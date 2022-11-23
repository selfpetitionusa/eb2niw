<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderPolls v-else></HeaderPolls>
    <PreLoaderPolls v-if="isLoading" />
    <div>
      <BannerPolls></BannerPolls>
      <ServicesAreaPolls></ServicesAreaPolls>
      <PricingPolls></PricingPolls>
      <ContactPolls></ContactPolls>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterPolls v-else></FooterPolls>
  </div>

</template>

<script>
  import BannerPolls from './components/BannerPolls';
  import ServicesAreaPolls from './components/ServicesAreaPolls';
  import PricingPolls from './components/PricingPolls';
  import ContactPolls from './components/ContactPolls';
  import HeaderPolls from "./components/HeaderPolls";
  import FooterPolls from "./components/FooterPolls";
  import PreLoaderPolls from "./components/PreLoaderPolls";


  export default {
    name: 'HomePolls',
    components: {
      BannerPolls,
      ServicesAreaPolls,
      PricingPolls,
      ContactPolls,
      HeaderPolls,
      FooterPolls,
      PreLoaderPolls
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
