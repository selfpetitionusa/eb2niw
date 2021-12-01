<template>

    <b-modal @show="initModal"  id="reviews-modal" title="Reviews and Testimonials" hide-footer>

        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="reviews-popup" class="cms" @submit.prevent="saveForm" novalidate>

                <div id="reviewCards" v-for="testimonial in data.testimonials" :key="testimonial.id">

                    <div class="form-group">
                        <label for="stars">Did you receive a star rating review?</label>
                            <div class="star-rating">
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                <div style="display: flex; align-items: center">
                                    <input type="number" max="5" min="0" class="form-control" id="stars" v-model.number="testimonial.stars" :class="{ 'is-invalid': submitted && errors.length }" >
                                    <p>stars (selecting "0" hides stars)</p>
                                </div>
                                <div v-if="submitted && errors.length" class="invalid-feedback">Rating is required</div>
                                </ValidationProvider>
                            </div>
                    </div>

                    <div class="form-group">
                        <label for="reviewer">Reviewer name</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="reviewer" placeholder="Caroline S." v-model="testimonial.reviewerName" :class="{ 'is-invalid': submitted && errors.length }" >
                            <div v-if="submitted && errors.length" class="invalid-feedback">Reviewer name is required</div>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <label for="reviewer-desc">Reviewer description</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="reviewer-desc" v-model="testimonial.reviewerDescription" placeholder="Tom's mom (12yo), New York" :class="{ 'is-invalid': submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Reviewer description is required</div>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <label for="review-source">Link to validate the review - optional<br> (review is on google, facebook, tutoring platform or other?)</label>
                        <ValidationProvider rules="url" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="review-source" v-model="testimonial.url" placeholder="https://reviewsource.com" :class="{ 'is-invalid': submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Link has wrong format, "https://" is required</div>
                        </ValidationProvider>
                    </div>


                    <div class="form-group">
                        <label for="testimonial">Testimonial</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <textarea class="form-control" id="testimonial" rows="3" v-model="testimonial.testimonial" placeholder="Type testimonial / review text" :class="{ 'is-invalid': submitted && errors.length }"></textarea>
                            <div v-if="submitted && errors.length" class="invalid-feedback">Testimonial is required</div>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="plus-minus">
                    <font-awesome-icon class="icon active" icon="plus-circle" v-on:click="addTestimonial" />
                    <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveReviewerMinus ? 'active' : 'disabled']" v-on:click="deleteTestimonial" />
                </div>
                <p class="plus-minus-comment">Reviewer</p>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel">Cancel</a>
                    <button type="submit" class="btn btn-primary btn-border btn-save">Save
                        <img v-show="account.status.updatingTestimonials"  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    </button>
                </div>

            </form>
        </ValidationObserver>
    </b-modal>

</template>


<script>

    import {mapActions, mapState} from "vuex";

    export default {
        name: 'ReviewsPopup',
        data() {
            return {
                submitted: false,
                data: {
                    testimonials: []
                }
            }
        },
        props: ['profileProp'],
        watch: {
            'account.status': function (val) {
                if(val.updatedTestimonials)
                    this.$bvModal.hide('reviews-modal');
            }
        },
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account
            }),
            isActiveReviewerMinus: function () {
                return this.data.testimonials.length > 1;
            },
        },
        methods: {
            ...mapActions('account', ['updateTestimonials']),
            ...mapActions('alert', ['clear']),
            addTestimonial: function() {
                this.data.testimonials.push({
                    id: Date.now(),
                    stars: 0,
                    reviewerName: "",
                    reviewerDescription: "",
                    url: "",
                    testimonial: ""
                });
            },
            initModal() {
                this.submitted = false;
                this.data = {
                    testimonials: JSON.parse(JSON.stringify(this.profileProp.testimonials))
                };
                if(this.data.testimonials.length === 0)
                    this.addTestimonial();
                this.clear();

            },
            deleteTestimonial: function() {
                if(this.data.testimonials.length > 1) {
                    this.data.testimonials.pop();
                }
            },
            saveForm(){
                this.submitted = true;
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    this.updateTestimonials(this.data);
                });

            }
        }
    }

</script>
