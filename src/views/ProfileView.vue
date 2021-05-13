<template>

    <div>
        <Profile v-bind:cmsToggleProp="false" v-bind:tokenProp="this.$route.params.token" ></Profile>
    </div>

</template>


<script>
    import Profile from "../components/profile/Profile";

    export default {
        components: {Profile}
    };
</script>
