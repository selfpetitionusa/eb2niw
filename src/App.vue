<template>

  <router-view></router-view>

</template>
<script>

export default {
  name: 'app',
  components: {

  },
  metaInfo() {
    return {
      title: "Tutomy - Software tools for tutors",
      meta: [
        { vmid: 'description', name: 'description', content:  'Tutomy is a one-stop-shop for tutors. We give you tools to set up own website (no coding skills required!), system which directs students to learn more about you (discovery process), and converts them to your clients'},
        { vmid: 'ogtitle', property: 'og:title', content: "Tutomy - Software tools for tutors"},
        { vmid: 'ogsite', property: 'og:site_name', content: 'Tutomy'},
        { vmid: 'ogtype', property: 'og:type', content: 'website'},
        { vmid: 'ogimage1', property: 'og:image', content: `https://www.tutomy.com/thumbnail.png`},
        { vmid: 'ogimage2', property: 'og:image', content: `https://www.tutomy.com/thumbnail2.png`},
      ]
    }
  }
}
</script>
