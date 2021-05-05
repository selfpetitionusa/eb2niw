<template>
  <div>
    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
    <router-view></router-view>
  </div>

</template>
<script>

  import {mapActions, mapState} from "vuex";


  export default {
  name: 'app',
  components: {

  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (){
      // clear alert on location change
      this.clearAlert();
    }
  },
  metaInfo() {
    return {
      title: "Tutomy - Software tools for tutors",
      meta: [
        { vmid: 'description', name: 'description', content:  'Tutomy is a one-stop-shop for tutors. We give you tools to set up own website (no coding skills required!), system which directs students to learn more about you (discovery process), and converts them to your clients'},
        { vmid: 'ogtitle', property: 'og:title', content: "Tutomy - Software tools for tutors"},
        { vmid: 'ogsite', property: 'og:site_name', content: 'Tutomy'},
        { vmid: 'ogtype', property: 'og:type', content: 'website'},
        { vmid: 'ogimage1', property: 'og:image', content: `https://www.tutomy.com/thumbnail.png`}
      ]
    }
  }
}
</script>

