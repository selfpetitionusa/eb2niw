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
      title: "Tutomy - Create a professional tutoring website in 11min",
      meta: [
        { vmid: 'description', name: 'description', content:  'We are not just a website builder for private tutors. An easy and intuitive private tutor website template is just a start. You succeed when your calendar gets fully booked. We guide you on how to use your website to achieve this goal. Coding and design work is already done so that you can focus on tutoring and finding students!'},
        { vmid: 'ogtitle', property: 'og:title', content: "Tutomy - Create a professional tutoring website in 11min"},
        { vmid: 'ogsite', property: 'og:site_name', content: 'Tutomy'},
        { vmid: 'ogtype', property: 'og:type', content: 'website'},
        { vmid: 'ogimage1', property: 'og:image', content: `https://www.tutomy.com/thumbnail.png`}
      ]
    }
  }
}
</script>
