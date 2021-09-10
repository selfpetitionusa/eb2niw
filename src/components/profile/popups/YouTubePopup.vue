<template>

    <b-modal @show="initModal"  id="youtube-modal" title="Introduction video" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="youtube-popup" class="cms" @submit.prevent="saveForm" novalidate>
                <div class="form-title">
                    <p>Paste video link with your introduction, lesson tutorial, presentation of your tutoring style, or other</p>
                </div>

                <div class="form-group">
                    <label for="youtube"><a class="yt-tutorial" href="https://youtu.be/ETkQS5CyTFs" target="_blank">HERE</a> how to get your video to display properly</label>
                    <ValidationProvider rules="url" v-slot="{ errors }" >
                        <input type="text" class="form-control" id="youtube" v-model="data.youtubeIntroLink" placeholder="https://www.youtube.com/embed/YOUR-VIDEO" :class="{ 'is-invalid': submitted && errors.length }">
                        <div v-if="submitted && errors.length" class="invalid-feedback">Url has wrong format</div>
                    </ValidationProvider>
                </div>


                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('youtube-modal')">Cancel</a>
                    <button type="submit"  class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingYoutubeForm">Save
                        <img v-show="account.status.updatingYoutubeForm" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    </button>
                </div>
            </form>
        </ValidationObserver>
    </b-modal>

</template>



<script>
    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                submitted: false,
                data: {}
            }
        },
        props: ['profileProp'],
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account
            })
        },
        watch: {
            'account.status': function (val) {
                if (val.updatedYoutubeForm)
                    this.$bvModal.hide('youtube-modal');
            }
        },
        methods: {
            ...mapActions('account', ['updateYoutube']),
            ...mapActions('alert', ['clear']),
            initModal() {
                this.submitted = false;
                this.data = {
                    youtubeIntroLink: this.profileProp.profile.youtubeIntroLink
                };
                this.clear();
            },
            saveForm() {
                this.submitted = true;
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    this.updateYoutube(this.data);
                });

            }
        }
    }
</script>
