<template>

    <b-modal @show="initModal"  id="links-modal" title="Social media" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="links-popup" class="cms"  @submit.prevent="saveForm" novalidate>
                <div class="form-title">
                    <div>Include social media to help website visitors learn more:</div>
                    <ul>
                        <li>Open your social media profile</li>
                        <li>Copy profile link from the browser (https:/www.facebook.com/...)</li>
                    </ul>
                </div>

                <div class="form-group">
                    <label for="facebook">Facebook</label>
                    <div class="link-popup">
                        <div class="logo"><feather type="facebook"></feather></div>
                        <ValidationProvider rules="url" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="facebook" v-model="facebook"  placeholder="https://www.facebook.com/YOUR-PROFILE-OR-PAGE" :class="{ 'is-invalid': submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Url has wrong format</div>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="form-group">
                    <label for="instagram">Instagram</label>
                    <div class="link-popup">
                        <div class="logo"><feather type="instagram"></feather></div>
                        <ValidationProvider rules="url" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="instagram" v-model="instagram" placeholder="https://www.instagram.com/YOUR-PROFILE" :class="{ 'is-invalid': submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Url has wrong format</div>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="form-group">
                    <label for="youtube">YouTube channel</label>
                    <div class="link-popup">
                        <div class="logo"><feather type="youtube"></feather></div>
                        <ValidationProvider rules="url" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="youtube" v-model="youtube" placeholder="https://www.youtube.com/c/YOUR-CHANNEL/featured" :class="{ 'is-invalid': submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Url has wrong format</div>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="form-group">
                    <label for="linkedin">LinkedIn</label>
                    <div class="link-popup">
                        <div class="logo"><feather type="linkedin"></feather></div>
                        <ValidationProvider rules="url" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="linkedin" v-model="linkedin"  placeholder="https://www.linkedin.com/in/YOUR-PROFILE" :class="{ 'is-invalid': submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Url has wrong format</div>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('links-modal')">Cancel</a>
                    <button type="submit" class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingLinksInfo">Save
                        <img v-show="account.status.updatingLinksInfo" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
                instagram: this.profileProp.profile.links.instagramLink,
                youtube: this.profileProp.profile.links.youtubeLink,
                linkedin: this.profileProp.profile.links.linkedInLink,
                facebook: this.profileProp.profile.links.facebookLink,
                submitted: false
            }
        },
        props: ['profileProp'],
        watch: {
            'account.status': function (val) {
                if(val.updatedLinksFormInfo)
                    this.$bvModal.hide('links-modal');
            }
        },
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account
            })
        },
        methods: {
            ...mapActions('account', ['updateLinksInfo']),
            ...mapActions('alert', ['clear']),
            initModal() {
                this.instagram = this.profileProp.profile.links.instagramLink;
                this.youtube =this.profileProp.profile.links.youtubeLink;
                this.linkedin = this.profileProp.profile.links.linkedInLink;
                this.facebook = this.profileProp.profile.links.facebookLink;
                this.submitted = false;
                this.clear();
            },
            saveForm(){
                this.submitted = true;
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    const instagram = this.instagram;
                    const youtube = this.youtube;
                    const linkedin = this.linkedin;
                    const facebook = this.facebook;
                    this.updateLinksInfo({instagram, youtube, linkedin, facebook});
                });
            }
        }
    }
</script>
