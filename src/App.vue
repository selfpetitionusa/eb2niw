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
      title: "EB-2 NIW: Self petition green card template for professionals",
      meta: [
        { vmid: 'description', name: 'description', content:  'Templates to build your own successful EB-2 National Interest Waiver (NIW) case: actual, successful application with 3 reference letters which led to EB-2 NIW green card by a business professional and instructions to arrange for high-quality reference letters'},
        { vmid: 'ogtitle', property: 'og:title', content: "EB-2 NIW: Self petition green card template for professionals"},
        { vmid: 'ogsite', property: 'og:site_name', content: 'Self Petition USA'},
        { vmid: 'ogtype', property: 'og:type', content: 'website'},
      ]
    }
  }
}
</script>
