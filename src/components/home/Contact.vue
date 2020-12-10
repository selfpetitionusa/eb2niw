<template>
    <section class="contact-area ptb-80">
        <SectionFive id="contact"/>
        <div class="container">
            <div class="section-title">
                <h2>Get In Touch</h2>
                <div class="bar"></div>
                <p>Tutoring your way to profit - how can we help?</p>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-lg-5 col-md-12">
                    <img src="../../assets/img/contact.svg" alt="contact-pic">
                </div>

                <div class="col-lg-6 offset-lg-1 col-col-md-12">
                    <div v-if="show_contact && contact_notice != ''" class="alert alert-warning">
                        There was a problem submitting your message. {{ contact_notice }}
                    </div>
                    <form v-if="show_contact" id="contactForm" @submit.prevent="sendContactMessage()">
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

                            <div class="col-lg-12 col-md-12  d-flex justify-content-center justify-content-lg-start">
                                <button type="submit" class="btn btn-primary">Send Message</button>
                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </form>
                    <div v-else>
                        <h4>Message Sent Successfully!</h4>
                        <p>Thank you for contacting us, we'll get back to you as soon as we can.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                contact_name: '',
                contact_email: '',
                contact_message: '',
                show_contact: true,
                contact_notice: ''
            }
        },
        methods: {
            async sendContactMessage() {
                if(!this.validateEmail(this.contact_email)) {
                    this.contact_notice = "The email address is badly formatted.";
                } else {
                    const url = `https://us-central1-tutor-landing.cloudfunctions.net/sendEmail?name=${this.contact_name}&email_from=${this.contact_email}&message=${this.contact_message}`;
                    const requestOptions = {
                        method: "GET",
                        headers: {"Content-Type" : "application/json"}
                    };
                    fetch(url, requestOptions);
                    this.show_contact = false;

                }
            },
            validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
        }
    }
</script>