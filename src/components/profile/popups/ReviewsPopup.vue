<template>

    <b-modal @show="initModal"  id="reviews-modal" title="Reviews and Testimonials" hide-footer>
        <form id="reviews-popup" class="cms" novalidate>

            <div id="reviewCards" v-for="reviewer in data.reviewers" :key="reviewer.id">

                <div class="form-group">
                    <label for="stars">Did you receive a star rating review?</label>
                        <div class="star-rating">
                            <input type="number" max="5" min="0" class="form-control" id="stars" v-model="reviewer.stars">
                            <p>stars (selecting "0" hides stars)</p>
                        </div>
                </div>

                <div class="form-group">
                    <label for="reviewer">Reviewer name</label>
                        <input type="text" class="form-control" id="reviewer" placeholder="Caroline S." v-model="reviewer.name">
                </div>

                <div class="form-group">
                    <label for="reviewer-desc">Reviewer description</label>
                        <input type="text" class="form-control" id="reviewer-desc" v-model="reviewer.description" placeholder="Tom's mom (12yo), New York">
                </div>

                <div class="form-group">
                    <label for="review-source">Link to validate the review - optional<br> (review is on google, facebook, tutoring platform or other?)</label>
                        <input type="text" class="form-control" id="review-source" v-model="reviewer.linksource" placeholder="https://reviewsource.com">
                </div>

                <div class="form-group">
                    <label for="testimonial">Testimonial</label>
                        <textarea class="form-control" id="testimonial" rows="3" v-model="reviewer.testimonial" placeholder="Type testimonial / review text"></textarea>
                </div>
            </div>

            <div class="plus-minus">
                <font-awesome-icon class="icon active" icon="plus-circle" v-bind:class="[isActiveReviewerPlus ? 'active' : 'disabled']" v-on:click="addReviewer" />
                <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveReviewerMinus ? 'active' : 'disabled']" v-on:click="deleteReviewer" />
            </div>
            <p class="plus-minus-comment">Reviewer</p>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save">Save
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                </button>
            </div>

        </form>
    </b-modal>

</template>


<script>

    export default {
        name: 'ReviewsPopup',
        data() {
            return {
                submitted: false,
                data: {
                    reviewers: []
                }
            }
        },
        computed: {
            isActiveReviewerMinus: function () {
                return this.data.reviewers.length > 1;
            },
            isActiveReviewerPlus: function () {
                return this.data.reviewers.length < 10;
            }
        },
        methods: {
            addReviewer: function() {
                if(this.data.reviewers.length < 10) {
                    this.data.reviewers.push({
                        id: Date.now(),
                        stars: "",
                        name: "",
                        description: "",
                        linksource: "",
                        testimonial: ""
                    });
                }
            },
            deleteReviewer: function() {
                if(this.data.reviewers.length > 1) {
                    this.data.reviewers.pop();
                }
            },
        }
    }

</script>
