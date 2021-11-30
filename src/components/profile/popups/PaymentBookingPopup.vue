<template>

    <div>
        <b-modal v-if="proPlan" @show="initModal" id="payment-booking-modal" title="E-mail, bookings & payments" hide-footer>
            <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
            <ValidationObserver ref="form">
                <form id="payment-booking-popup" class="cms" @submit.prevent="saveForm" novalidate>
                    <div class="form-title">
                        <p class="first">"Contact {{name}}"</p>
                    </div>

                    <div class="form-group">
                        <label for="email">By pressing this button, visitors will send you an email at</label>
                        <ValidationProvider rules="required|email" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="email" v-model="data.email" :class="{ 'is-invalid':  submitted && errors.length }" >
                            <div v-if="submitted && errors.includes('required')" class="invalid-feedback">Email is required</div>
                            <div v-if="submitted && errors.includes('email')" class="invalid-feedback">Email has wrong format</div>
                        </ValidationProvider>
                    </div>


                    <div class="form-title">
                        <p class="no-bottom-margin">"Book / Pay"</p>
                        <p class="first" style="font-weight: 400"><a class="yt-tutorial" href="https://youtu.be/TTp7FvWNdUI" target="_blank" style="font-weight: 600">HERE</a> how to add payment & booking links</p>
                    </div>

                    <div class="radio-container">
                        <div class="form-check radio">
                            <input class="form-check-input" type="radio" id="booking-radio" v-model="actionType" value="Booking"  >
                            <div class="form-inline">
                                <label class="form-check-label item" for="booking-input">Link calendar bookings (only Book)</label>
                                <ValidationProvider rules="url" v-slot="{ errors }" >
                                    <input type="text" class="form-control item" id="booking-input" size="52%" v-model="data.bookingLink" :disabled="actionType !== 'Booking'" placeholder="https://bookinglink.com" :class="{ 'is-invalid': submitted && errors.length }">
                                    <div v-if="submitted && errors.includes('url')" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                                </ValidationProvider>
                            </div>
                        </div>

                        <div class="form-check radio">
                            <input class="form-check-input" type="radio"  id="payment-radio" v-model="actionType" value="Payment" >
                            <div class="form-inline">
                                <label class="form-check-label item" for="payment-input">Link payments (only Pay)</label>
                                <ValidationProvider rules="url" v-slot="{ errors }" >
                                    <input type="text" class="form-control item" id="payment-input" size="52%" v-model="data.paymentLink"  :disabled="actionType !== 'Payment'" placeholder="https://paymentlink.com" :class="{ 'is-invalid': submitted && errors.length }" >
                                    <div v-if="submitted && errors.includes('url')" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                                </ValidationProvider>
                            </div>
                        </div>

                        <div class="form-check radio">
                            <input class="form-check-input" type="radio"  id="payment-booking-radio" v-model="actionType" value="BookingAndPayment" >
                            <div class="form-inline">
                                <label class="form-check-label item" for="booking-payment-input">Link bookings and payments (Book & Pay)</label>
                                <ValidationProvider rules="url" v-slot="{ errors }" >
                                    <input type="text" class="form-control item"  id="booking-payment-input" size="52%" v-model="data.paymentLink2"  :disabled="actionType !== 'BookingAndPayment'" placeholder="https://bookinglink.com" :class="{ 'is-invalid': submitted && errors.length }" style="margin-bottom: 5px;">
                                    <div v-if="submitted && errors.includes('url')" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                                </ValidationProvider>

                                <label class="form-check-label item" for="payment-booking-input"></label>
                                <ValidationProvider rules="url" v-slot="{ errors }" >
                                    <input type="text" class="form-control item"  id="payment-booking-input" size="52%" v-model="data.bookingLink2"  :disabled="actionType !== 'BookingAndPayment'" placeholder="https://paymentlink.com" :class="{ 'is-invalid': submitted && errors.length }" >
                                    <div v-if="submitted && errors.includes('url')" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                                </ValidationProvider>

                            </div>
                        </div>

                        <div class="form-check radio" style="height: 35px">
                            <label class="form-check-label item" for="no-radio">No button</label>
                            <input class="form-check-input" type="radio"  id="no-radio" v-model="actionType" value="None" style="margin-bottom: 3px;">
                        </div>

                    </div>

                    <div class="btn-container">
                        <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('payment-booking-modal')">Cancel</a>
                        <button type="submit"  class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingPaymentBookingForm">Save
                            <img v-show=" account.status.updatingPaymentBookingForm" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        </button>
                    </div>
                </form>
            </ValidationObserver>
        </b-modal>




        <b-modal v-if="!proPlan" @show="initModal" id="payment-booking-modal" title="Upgrade to PRO Plan" hide-footer>
            <form id="payment-booking-popup" class="cms">

                <div v-if="!invoice && !contact.status.messageSent">

                    <div class="form-title">
                        <div style="font-size: 15px; margin-bottom: 15px;">Select options you wish to add to your website</div>
                    </div>

                    <div class="form-check" style="margin-bottom: 0.7rem">
                        <input class="form-check-input" type="radio" id="selectCalendar" v-model="proPlanActionType"  value="Booking" >
                        <label class="form-check-label" for="selectCalendar">Calendar: <span style="font-weight: 300">manage your booking schedule</span></label>
                    </div>

                    <div class="form-check" style="margin-bottom: 0.7rem">
                        <input class="form-check-input" type="radio" id="selectPayments"  v-model="proPlanActionType" value="Payment" >
                        <label class="form-check-label" for="selectPayments">Payments:
                            <span style="font-weight: 300">accept
                                <span><img style="height: 35px; margin: 0px 5px 2px" src="../../../assets/img/PayPal-logo.png"></span> and
                                <span><img style="height: 27px" src="../../../assets/img/stripe-logo.png"></span>
                            </span>
                        </label>
                    </div>

                    <div class="form-check" style="margin-bottom: 2rem">
                        <input class="form-check-input" type="radio" id="selectCalendarAndPayments" v-model="proPlanActionType" value="BookingAndPayment" >
                        <label class="form-check-label" for="selectCalendarAndPayments">Both calendar and payments</label>
                    </div>

                    <div class="form-title">
                        <div style="font-size: 15px; margin-bottom: 15px; color: #5457c1; margin-bottom: 0">PRO Plan is $9 per month</div>
                        <div style="font-size: 15px; margin-bottom: 15px; color: #5457c1; margin-bottom: 2rem; font-weight: 300">Cancel monthly subscription anytime</div>
                    </div>
                </div>


                <div v-if="invoice && !contact.status.messageSent" class="form-group" style="margin-bottom: 4rem">
                    <label for="invoiceData">Provide your full name and address for invoicing purposes</label>
                    <textarea class="form-control" id="invoiceData" rows="6" v-model="invoiceData" placeholder="Here type your full name and address for invoicing purposes"></textarea>
                </div>


                <div v-if="!contact.status.messageSent" class="row justify-content-center">
                    <a class="col-4 btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('payment-booking-modal')" v-on:click="restartPopup()">Cancel</a>

                    <a href="#" id="choosePro" class="col-7 btn btn-primary btn-border" v-if="!invoice" v-on:click="invoice=true">GO PRO PLAN</a>
                    <button type="submit" id="submitInvoice" class="col-7 btn btn-primary btn-border" v-if="invoice" v-on:click="sendInvoice()" :disabled="contact.status.sendingMessage">SUBMIT
                        <img v-show="contact.status.sendingMessage" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    </button>
                </div>

                <div v-if="!contact.status.messageSent" class="row" style="margin-top: 10px; text-decoration: underline">
                    <a id="proPlanInfo" class="col-7 offset-5"  style="display: flex; justify-content: center; padding-left: 0"><router-link  :to="{ path: '/', query: { pricing: true }}" >Pricing details</router-link></a>
                </div>

                <div v-if="contact.status.messageSent">
                    <h4>Invoice Data successfully saved!</h4>
                    <p>Thank you for choosing us, we'll activate the plan as soon as we can.</p>
                </div>
            </form>
        </b-modal>
    </div>
</template>



<script>
    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                submitted: false,
                data: {
                    bookingLink: '',
                    paymentLinkInput: '',
                    email: ''
                },
                proPlan: true,
                invoice: false,
                actionType: '',
                proPlanActionType: '',
                invoiceData: ''
            }
        },
        props: ['profileProp'],
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account,
                contact: state => state.contact
            }),
            name: function () {
                if(this.profileProp.profile.firstName)
                    return this.profileProp.profile.firstName;
                else return '< Name >'
            }
        },
        watch: {
            'account.status': function (val) {
                if (val.updatedPaymentBookingForm)
                    this.$bvModal.hide('payment-booking-modal');
            }
        },
        methods: {
            ...mapActions('account', ['updatePaymentBooking']),
            ...mapActions('alert', ['clear']),
            ...mapActions('contact', ['sendContactMessage']),
            initModal() {
                this.submitted = false;
                this.proPlan = this.profileProp.profile.proPlan;
                this.proPlan = false;
                this.data = {
                    email: this.profileProp.profile.email,
                    bookingLink: this.profileProp.profile.bookingLink,
                    paymentLink: this.profileProp.profile.paymentLink
                };

                if(this.profileProp.profile.bookingLink && !this.profileProp.profile.paymentLink) {
                    this.actionType = 'Booking';
                } else if(this.profileProp.profile.paymentLink && !this.profileProp.profile.bookingLink) {
                    this.actionType = 'Payment';
                } else if(this.profileProp.profile.paymentLink && this.profileProp.profile.bookingLink) {
                    this.actionType = 'BookingAndPayment';
                    this.data.bookingLink = '';
                    this.data.paymentLink = '';
                    this.data.bookingLink2 = this.profileProp.profile.bookingLink;
                    this.data.paymentLink2 = this.profileProp.profile.paymentLink;
                } else {
                    this.actionType = 'None';
                }
                this.clear();
            },
            restartPopup: function () {
                this.invoice = false;
            },
            saveForm() {
                this.submitted = true;
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    if(this.actionType === 'BookingAndPayment') {
                        const data  = {
                            email: this.data.email,
                            bookingLink: this.data.bookingLink2,
                            paymentLink: this.data.paymentLink2
                        };
                        this.updatePaymentBooking(data);
                    } else {
                        this.updatePaymentBooking(this.data);
                    }

                });

            },
            sendInvoice() {
                this.sendContactMessage({message: this.invoiceData + '\n' + this.proPlanActionType})
            }
        }
    }
</script>
