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
                            <input class="form-check-input" type="radio" id="booking-radio" v-model="data.actionType" value="Booking"  >
                            <div class="form-inline">
                                <label class="form-check-label item" for="booking-input">Link calendar bookings (only Book)</label>
                                <ValidationProvider rules="url" v-slot="{ errors }" >
                                    <input type="text" class="form-control item" id="booking-input" size="52%" v-model="bookingLinkInput" :disabled="data.actionType !== 'Booking'" placeholder="https://bookinglink.com" :class="{ 'is-invalid': submitted && errors.length }">
                                    <div v-if="submitted && errors.includes('url')" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                                </ValidationProvider>
                            </div>
                        </div>

                        <div class="form-check radio">
                            <input class="form-check-input" type="radio"  id="payment-radio" v-model="data.actionType" value="Payment" >
                            <div class="form-inline">
                                <label class="form-check-label item" for="payment-input">Link payments (only Pay)</label>
                                <ValidationProvider rules="url" v-slot="{ errors }" >
                                    <input type="text" class="form-control item" id="payment-input" size="52%" v-model="paymentLinkInput"  :disabled="data.actionType !== 'Payment'" placeholder="https://paymentlink.com" :class="{ 'is-invalid': submitted && errors.length }" >
                                    <div v-if="submitted && errors.includes('url')" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                                </ValidationProvider>
                            </div>
                        </div>

                        <div class="form-check radio">
                            <input class="form-check-input" type="radio"  id="payment-booking-radio" v-model="data.actionType" value="BookingAndPayment" >
                            <div class="form-inline">
                                <label class="form-check-label item" for="booking-payment-input">Link bookings and payments (Book & Pay)</label>
                                <ValidationProvider rules="url" v-slot="{ errors }" >
                                    <input type="text" class="form-control item"  id="booking-payment-input" size="52%" v-model="bookingPaymentLinkInput"  :disabled="data.actionType !== 'BookingAndPayment'" placeholder="https://bookinglink.com" :class="{ 'is-invalid': submitted && errors.length }" style="margin-bottom: 5px;">
                                    <div v-if="submitted && errors.includes('url')" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                                </ValidationProvider>

                                <label class="form-check-label item" for="payment-booking-input"></label>
                                <ValidationProvider rules="url" v-slot="{ errors }" >
                                    <input type="text" class="form-control item"  id="payment-booking-input" size="52%" v-model="paymentBookingLinkInput"  :disabled="data.actionType !== 'BookingAndPayment'" placeholder="https://paymentlink.com" :class="{ 'is-invalid': submitted && errors.length }" >
                                    <div v-if="submitted && errors.includes('url')" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                                </ValidationProvider>

                            </div>
                        </div>

                        <div class="form-check radio" style="height: 35px">
                            <label class="form-check-label item" for="no-radio">No button</label>
                            <input class="form-check-input" type="radio"  id="no-radio" v-model="data.actionType" value="None" style="margin-bottom: 3px;">
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

                <div class="row" style="margin: 1rem 0 3rem">
                    <div class="col-4 align-items-center" style="display: flex; justify-content: center">
                        <font-awesome-icon icon="calendar-alt" style="color: #5457C1; font-size: 2.2rem"/>
                    </div>
                    <div class="col-4 align-items-center" style="display: flex; justify-content: center">
                        <img src="../../../assets/img/PayPal-logo.png">
                    </div>
                    <div class="col-4 align-items-center" style="display: flex; justify-content: center">
                        <img src="../../../assets/img/stripe-logo.png">
                    </div>
                </div>

                <div class="form-title">
                    <div style="font-size: 15px; margin-bottom: 15px;">Select options you wish to add to your website</div>
                </div>

                <div class="form-check" style="margin-bottom: 0.7rem">
                    <input class="form-check-input" type="radio" id="selectCalendar">
                    <label class="form-check-label" for="selectCalendar">Calendar: <span style="font-weight: 400">to let clients book lessons</span></label>
                </div>

                <div class="form-check" style="margin-bottom: 0.7rem">
                    <input class="form-check-input" type="radio" id="selectPayments">
                    <label class="form-check-label" for="selectPayments">Payments: <span style="font-weight: 400">process with PayPal and Stripe</span></label>
                </div>

                <div class="form-check" style="margin-bottom: 4rem">
                    <input class="form-check-input" type="radio" id="selectCalendarAndPayments">
                    <label class="form-check-label" for="selectCalendarAndPayments">Both calendar and payments</label>
                </div>


                <div class="row justify-content-center">
                    <a class="col-4 btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('payment-booking-modal')">Cancel</a>
                    <button type="submit"  class="col-7 btn btn-primary btn-border" :disabled="account.status.updatingPaymentBookingForm">GO PRO PLAN
                        <img v-show=" account.status.updatingPaymentBookingForm" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    </button>
                </div>

                <div class="row" style="margin-top: 10px; text-decoration: underline">
                    <a href="https://www.tutomy.com" target="_blank" v-scroll-to="'#pricing'" id="proPlanInfo" class="col-7 offset-5" style="display: flex; justify-content: center; padding-left: 0">Read pricing details</a>
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
                data: {},
                bookingLinkInput: '',
                paymentLinkInput: '',
                bookingPaymentLinkInput: '',
                proPlan: false
            }
        },
        props: ['profileProp'],
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account
            }),
            name: function () {
                if(this.profileProp.profile.firstName)
                    return this.profileProp.profile.firstName;
                else return '< Name >'
            },
            actionLink: function () {
                if(this.data.actionType === 'Payment') {
                   return this.paymentLinkInput;
                } else if(this.data.actionType === 'Booking') {
                    return this.bookingLinkInput;
                } else if(this.data.actionType === 'BookingAndPayment') {
                    return this.bookingPaymentLinkInput;
                } else {
                    return undefined;
                }
            }
        },
        mounted() {
            const that = "/";
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
        watch: {
            'account.status': function (val) {
                if (val.updatedPaymentBookingForm)
                    this.$bvModal.hide('payment-booking-modal');
            },
            'data.actionType': function(val) {
                if(val === 'Payment') {
                    this.bookingLinkInput = '';
                    this.bookingPaymentLinkInput = '';
                } else if(val === 'Booking') {
                    this.bookingPaymentLinkInput = '';
                    this.paymentLinkInput = '';
                } else if(val === 'BookingAndPayment') {
                    this.bookingLinkInput = '';
                    this.paymentLinkInput = '';
                } else if(val === 'None') {
                    this.bookingLinkInput = '';
                    this.bookingPaymentLinkInput = '';
                    this.paymentLinkInput = '';
                } else {
                    this.bookingLinkInput = '';
                    this.bookingPaymentLinkInput = '';
                    this.paymentLinkInput = '';
                }
            }
        },
        methods: {
            ...mapActions('account', ['updatePaymentBooking']),
            ...mapActions('alert', ['clear']),
            initModal() {
                this.submitted = false;
                this.data = {
                    email: this.profileProp.profile.email,
                    actionType: this.profileProp.profile.actionType,
                };
                if(this.profileProp.profile.actionType === 'Payment') {
                    this.paymentLinkInput = this.profileProp.profile.actionLink;
                } else if(this.profileProp.profile.actionType === 'Booking') {
                    this.bookingLinkInput = this.profileProp.profile.actionLink;
                } else if(this.profileProp.profile.actionType === 'BookingAndPayment') {
                    console.log(this.profileProp.profile.actionLink)
                    this.bookingPaymentLinkInput = this.profileProp.profile.actionLink;
                }
                this.clear();
            },
            saveForm() {
                this.submitted = true;
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    this.data['actionLink'] = this.actionLink;
                    console.log(this.data)
                    this.updatePaymentBooking(this.data);
                });

            }
        }
    }
</script>
