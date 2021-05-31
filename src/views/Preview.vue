<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>
        <Profile v-if="account.profile"  v-bind:cmsToggleProp="false" v-bind:profileProp="account.profile" ></Profile>
    </div>

</template>


<script>

  import Profile from "../components/profile/Profile";
  import CmsNav from "../components/profile/section/CmsNav";

  import { mapState, mapActions } from 'vuex'

  export default {
      components: {Profile, CmsNav},
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
