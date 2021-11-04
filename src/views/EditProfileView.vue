<template>
    <div>
        <CmsNav v-bind:previewToggleProp="true"></CmsNav>
        <div style="top: 15px;z-index: 1" v-if="alert.failed === false" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <div style="top: 15px;z-index: 1;font-size: 16px" v-if="!account.user.active" :class="`alert alert-danger`">Your account has been disabled. Please <a href="/help" style="text-decoration: underline; font-weight: 500">contact us</a> to activate it.</div>
        <Profile  v-if="account.profile"  v-bind:cmsToggleProp="true" v-bind:profileProp="account.profile" ></Profile>
    </div>

</template>


<script>


  import Profile from "../components/profile/Profile";
  import CmsNav from "../components/profile/section/CmsNav";
  import { mapState, mapActions } from 'vuex'

    export default {
        components: {
            Profile,
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
    };
</script>
