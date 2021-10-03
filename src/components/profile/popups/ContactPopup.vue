<template>

    <b-modal @show="initModal"  id="contact-modal" title="Contact me" hide-footer>
        <div v-if="show_contact && contact_notice != ''" class="alert alert-warning">
            There was a problem submitting your message. {{ contact_notice }}
        </div>

        <div v-if="cmsToggle" class="alert alert-warning">
           Form is disabled in profile edit mode
        </div>
        <form v-if="show_contact" id="contactModal" @submit.prevent="sendContactMessage()">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <input type="text" v-model="contact_name" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Name">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <input type="email" v-model="contact_email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Email">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                        <textarea name="message" v-model="contact_message" class="form-control" id="message" cols="30" rows="5" required data-error="Write your message" placeholder="Your Message"></textarea>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12 d-flex btn-profile btn-contact justify-content-center justify-content-lg-end">
                    <button type="submit" class="btn btn-primary inner" :disabled="cmsToggle || !email" style="margin: 0px">Send Message</button>

                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </form>
        <div v-else>
            <h4>Message Sent Successfully!</h4>
            <p>Thank you for contacting, I'll get back to you as soon as I can.</p>
        </div>
    </b-modal>

</template>


<script>

    import config  from "../../../config/config";

    export default {
        name: 'ContactPopup',
        data() {
            return {
                contact_name: '',
                contact_email: '',
                contact_message: '',
                show_contact: true,
                contact_notice: ''
            }
        },
        props: ['email', 'cmsToggle'],
        methods: {
            async sendContactMessage() {
                if(!this.validateEmail(this.contact_email)) {
                    this.contact_notice = "The email address is badly formatted.";
                } else {
                    const url = `${config.apiUrl}/contact/profile`;
                    const requestOptions = {
                        method: "POST",
                        headers: {"Content-Type" : "application/json"},
                        body: JSON.stringify({ name: this.contact_name, from: this.contact_email, to: this.email, message: this.contact_message })
                    };
                    fetch(url, requestOptions).then(this.handleResponse)
                }
            },
            validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(String(email).toLowerCase());
            },
            handleResponse(response) {
                if (!response.ok) {
                    this.contact_notice = "We'll get back to you as soon as we can.";
                    const url = `${config.apiUrl}/contact/landing`;
                    const requestOptions = {
                        method: "POST",
                        headers: {"Content-Type" : "application/json"},
                        body: JSON.stringify({ name: this.contact_name, email: this.contact_email, message:  'Problem with sending message:' + this.contact_message  + 'Tutor email:' + this.email + 'Sender email:' + this.contact_email})
                    };
                    fetch(url, requestOptions)

                } else {
                    this.show_contact = false;
                }
            },
            initModal() {
                this.show_contact = true;
                this.contact_name = '';
                this.contact_email = '';
                this.contact_message = '';
                this.contact_notice = '';
            }

        }
    }
</script>
