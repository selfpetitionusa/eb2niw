<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderSanctions v-else></HeaderSanctions>
    <PreLoaderSanctions v-if="isLoading" />
    <div>
      <BannerSanctions></BannerSanctions>
      <ServicesAreaSanctions></ServicesAreaSanctions>
      <PricingSanctions></PricingSanctions>
      <ContactSanctions></ContactSanctions>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterSanctions v-else></FooterSanctions>
  </div>

</template>

<script>
  import BannerSanctions from './components/BannerSanctions';
  import ServicesAreaSanctions from './components/ServicesAreaSanctions';
  import PricingSanctions from './components/PricingSanctions';
  import ContactSanctions from './components/ContactSanctions';
  import HeaderSanctions from "./components/HeaderSanctions";
  import FooterSanctions from "./components/FooterSanctions";
  import PreLoaderSanctions from "./components/PreLoaderSanctions";


  export default {
    name: 'HomeSanctions',
    components: {
      BannerSanctions,
      ServicesAreaSanctions,
      PricingSanctions,
      ContactSanctions,
      HeaderSanctions,
      FooterSanctions,
      PreLoaderSanctions
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
