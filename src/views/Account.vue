<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>

                <div v-if="account.profile" class="row">
                    <div class="col-xl-7 col-lg-8 col-md-10 col-11 account">
                        <div class="row">
                            <div class="col-md-4 col-sm-5 col-9">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <router-link class="nav-link" id="v-pills-link-tab" data-toggle="pill" role="tab" aria-controls="v-pills-link"  :to="{ path: '/account/website-link' }">Your Website Address</router-link>
                                    <router-link class="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-basic"  :to="{ path: '/account/registration-info' }">Registration Info</router-link>
                                    <router-link class="nav-link" id="v-pills-reset-tab" data-toggle="pill" role="tab" aria-controls="v-pills-password"  :to="{ path: '/account/password-reset' }">Password Reset</router-link>
                                </div>
                            </div>
                            <div class="col-md-8 col-sm-7">
                                <router-view :model="account.profile"></router-view>
                                <div v-if="alert.failed === false" :class="`alert ${alert.type}`">{{alert.message}}</div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>

</template>



<script>

  import CmsNav from "../components/profile/section/CmsNav";
  import {mapActions, mapState} from "vuex";

    export default {
        components: {
            CmsNav
        },
        computed: {
            ...mapState({
                account: state => state.account,
                alert: state => state.alert
            })
        },
        methods: {
            ...mapActions('account', ['getProfile'])
        },
        created() {
            const token = null;
            const userId = this.account.user.id;
            this.getProfile({userId, token})
        }
    }

</script>
