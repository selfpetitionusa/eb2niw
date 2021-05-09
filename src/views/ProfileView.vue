<template>
    <div>
        <Profile  v-if="account.profile"  v-bind:cmsToggleProp="false" v-bind:profileProp="account.profile" ></Profile>

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
            const token = this.$route.params.token;
            const userId = null;
            this.getProfile({userId, token})
        },
    };
</script>
