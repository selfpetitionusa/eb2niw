<template>

    <div>
        <CmsNav v-bind:previewToggleProp="true"></CmsNav>
        <Profile v-bind:cmsToggleProp="true" v-bind:tokenProp="account.user.token"></Profile>
    </div>

</template>




<script>

  import { mapState } from 'vuex';
  import Profile from "../components/profile/Profile";
  import CmsNav from "../components/profile/section/CmsNav";

    export default {
        components: {
            Profile,
            CmsNav
        },
        computed: {
            ...mapState({
                account: state => state.account
            })
        }
    }

</script>
