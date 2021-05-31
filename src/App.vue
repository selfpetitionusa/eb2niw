<template>
    <router-view></router-view>
</template>
<script>

  import { mapActions } from 'vuex'

  export default {
  name: 'app',
  components: {

  },
    methods: {
      ...mapActions({
        clearAlert: 'alert/clear'
      })
    },
    watch: {
      $route (){
        this.clearAlert();
      }
    },
    metaInfo() {
    return {
      title: "Tutomy - Website for your tutoring business",
      meta: [
        { vmid: 'description', name: 'description', content:  'Your new tutoring website - no coding or design skills required! Use the domain of your choice or our own. As easy as creating a Facebook or LinkedIn profile, so that you can focus on teaching.'},
        { vmid: 'ogtitle', property: 'og:title', content: "Tutomy - Website for your tutoring business"},
        { vmid: 'ogsite', property: 'og:site_name', content: 'Tutomy'},
        { vmid: 'ogtype', property: 'og:type', content: 'website'},
        { vmid: 'ogimage1', property: 'og:image', content: `https://www.tutomy.com/thumbnail.png`}
      ]
    }
  }
}
</script>

