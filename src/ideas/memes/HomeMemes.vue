<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderMemes v-else></HeaderMemes>
    <PreLoaderMemes v-if="isLoading" />
    <div>
      <BannerMemes></BannerMemes>
      <ServicesMemes></ServicesMemes>
      <WorksMemes></WorksMemes>
      <PricingMemes></PricingMemes>
      <ContactMemes></ContactMemes>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterMemes v-else></FooterMemes>
  </div>

</template>


<script>
  import BannerMemes from './components/BannerMemes';
  import ServicesMemes from './components/ServicesMemes';
  import PricingMemes from './components/PricingMemes';
  import ContactMemes from './components/ContactMemes';
  import HeaderMemes from "./components/HeaderMemes";
  import FooterMemes from "./components/FooterMemes";
  import PreLoaderMemes from "./components/PreLoaderMemes";
  import WorksMemes from "./components/WorksMemes";



  export default {
    name: 'HomeMemes',
    components: {
      BannerMemes,
      ServicesMemes,
      PricingMemes,
      ContactMemes,
      HeaderMemes,
      FooterMemes,
      PreLoaderMemes,
      WorksMemes
    },
    data() {
      return {
        isLoading: true,
        currentUrl: ''
      }
    },

    watch: {
      '$route'(pathUrl){
        this.currentUrl = pathUrl.path;
        this.isLoading = true;
        setTimeout(() => { this.isLoading = false }, 1500);
      }
    },

    mounted() {
      this.currentUrl = window.location.pathname;
      setTimeout(() => {
        this.isLoading = false
      }, 2000);
    }
  }
</script>
