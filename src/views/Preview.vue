<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>
        <Profile v-bind:cmsToggleProp="false" v-bind:tokenProp="this.$route.params.token"></Profile>
    </div>

</template>


<script>

  import Profile from "../components/profile/Profile";
  import CmsNav from "../components/profile/section/CmsNav";

    export default {
        components: {
            Profile,
            CmsNav
        }
    }

</script>
