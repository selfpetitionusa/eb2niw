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
      title: "Template",
      meta: [
        { vmid: 'description', name: 'description', content:  'Template description'},
        { vmid: 'ogtitle', property: 'og:title', content: "Template title"},
        { vmid: 'ogsite', property: 'og:site_name', content: 'Template site name'},
        { vmid: 'ogtype', property: 'og:type', content: 'website'},
      ]
    }
  }
}
</script>
