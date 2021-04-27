<template>
    <div>
        <h1>Hi {{account.user.firstName}}!</h1>
        <p>You're logged in!!!</p>
        <router-link to="/login">Logout</router-link>

    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                account: state => state.account
            })
        }
    };
</script>
