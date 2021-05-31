<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>

        <section class="contact-area ptb-80">
            <div class="container support">
                <div class="section-title">
                    <h2>Get In Touch</h2>
                    <div class="bar"></div>
                </div>

                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-lg-6 offset-lg-1 col-col-md-12">
                        <div v-if="contact.status.messageFailure" class="alert alert-warning">
                            There was a problem submitting your message.
                        </div>
                        <ValidationObserver ref="form">
                            <form v-if="!contact.status.messageFailure && !contact.status.messageSent" id="contactForm" @submit.prevent="saveForm()" novalidate>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <ValidationProvider rules="required" v-slot="{ errors }" >
                                                <textarea name="message" v-model="data.message" class="form-control" id="message" cols="30" rows="5"  placeholder="Your Message" :class="{ 'is-invalid':  submitted && errors.length }"></textarea>
                                                <div v-if="submitted && errors.length" class="invalid-feedback">Message is required</div>
                                            </ValidationProvider>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12  d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary" :disabled="contact.status.sendingMessage">Send message
                                            <img v-show="contact.status.sendingMessage" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        </button>


                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </ValidationObserver>
                        <div v-if="contact.status.messageSent">
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

  import CmsNav from "../components/profile/section/CmsNav";
  import {mapActions, mapState} from "vuex";

    export default {
        data(){
            return {
                submitted: false,
                data:{}
            }
        },
        computed: {
            ...mapState({
                contact: state => state.contact
            })
        },
        components: {
            CmsNav
        },
        methods: {
            ...mapActions('contact', ['sendContactMessage']),
            saveForm(){
                this.submitted = true;
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }

                    this.sendContactMessage(this.data);
                });

            }

        }
    };

</script>
