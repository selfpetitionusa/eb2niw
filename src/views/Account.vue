<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>

                <div v-if="account.profile" class="row">
                    <div class="col-8 account">
                        <div class="row">
                            <div class="col-3">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <router-link class="nav-link" id="v-pills-link-tab" data-toggle="pill" role="tab" aria-controls="v-pills-link"  :to="{ path: '/account/profile-link' }">Your Website Address</router-link>
                                    <router-link class="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-basic"  :to="{ path: '/account/basic-info' }">Registration Info</router-link>
                                    <router-link class="nav-link" id="v-pills-reset-tab" data-toggle="pill" role="tab" aria-controls="v-pills-password"  :to="{ path: '/account/password-reset' }">Password Reset</router-link>
                                </div>
                            </div>
                            <div class="col-9" >
                                <router-view :model="account.profile"></router-view>
                                <div v-if="alert.failed === false" :class="`alert ${alert.type}`">{{alert.message}}</div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>

</template>


import Profile from "../components/profile/Profile";
import CmsNav from "../components/profile/section/CmsNav";
import { mapState, mapActions } from 'vuex'


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
