<template>
    <div>
        <div v-if="alert.failed === false" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <Profile  v-if="account.profile"  v-bind:cmsToggleProp="true" v-bind:profileProp="account.profile" ></Profile>
    </div>
</template>


<script>
    import Profile from "../components/profile/Profile";

    import { mapState, mapActions } from 'vuex'

    export default {
        components: {Profile},
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
        },
    };
</script>
