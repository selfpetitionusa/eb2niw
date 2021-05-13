<template>

    <div class="nav-cms">
        <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
            <div class="startp-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md">

                        <ul>
                            <li class="nav-item"><a href="/dashboard" class="nav-link">Home</a></li>
                        </ul>

                        <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                        <b-collapse class="collapse" id="navbarSupportedContent" is-nav>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><a href="/account" class="nav-link">My account</a></li>
                                <li class="nav-item"><a href="/help" class="nav-link">Help</a></li>
                                <li class="nav-item"><a class="nav-link"><router-link to="/login">Logout</router-link></a></li>
                            </ul>
                        </b-collapse>

                    </nav>
                </div>
            </div>
        </header>

        <section class="contact-area ptb-80">
            <SectionFive id="contact"/>
            <div class="container support nav-margin">
                <div class="section-title">
                    <h2>Get In Touch</h2>
                    <div class="bar"></div>
                </div>

                <div class="row h-100 justify-content-center align-items-center">
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

                                <div class="col-lg-12 col-md-12  d-flex justify-content-end">
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

    </div>

</template>




<script>

    export default {
        data(){
            return {
                isSticky: false,
                contact_name: '',
                contact_email: '',
                contact_message: '',
                show_contact: true,
                contact_notice: ''
            }
        },
        mounted() {
            const that = this;
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY;
                // eslint-disable-next-line no-console
                if(scrollPos >= 100){
                    that.isSticky = true;
                } else {
                    that.isSticky = false;
                }
            })
        },
        methods: {
            async sendContactMessage() {
                if(!this.validateEmail(this.contact_email)) {
                    this.contact_notice = "The email address is badly formatted.";
                } else {
                    const url = `/api/contact`;
                    const requestOptions = {
                        method: "POST",
                        headers: {"Content-Type" : "application/json"},
                        body: JSON.stringify({ name: this.contact_name, email: this.contact_email, message: this.contact_message })
                    };
                    fetch(url, requestOptions).then(this.show_contact = false)
                }
            },
            validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(String(email).toLowerCase());
            }
        }
    };
</script>
