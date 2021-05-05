<template>
    <div>
        <router-link to="/login">Logout</router-link>

        <Profile v-bind:cmsToggleProp="true" v-bind:tokenProp="account.user.token"></Profile>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Profile from "../components/profile/Profile";

    export default {
        components: {Profile},
        computed: {
            ...mapState({
                account: state => state.account
            })
        }
    };
</script>
