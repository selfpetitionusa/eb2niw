<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderSensitivity v-else></HeaderSensitivity>
    <PreLoaderSensitivity v-if="isLoading" />
    <div>
      <BannerSensitivity></BannerSensitivity>
      <ServicesAreaSensitivity></ServicesAreaSensitivity>
      <WorksSensitivity></WorksSensitivity>
      <PricingSensitivity></PricingSensitivity>
      <ContactSensitivity></ContactSensitivity>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterSensitivity v-else></FooterSensitivity>
  </div>

</template>

<script>
  import BannerSensitivity from './components/BannerSensitivity';
  import ServicesAreaSensitivity from './components/ServicesAreaSensitivity';
  import PricingSensitivity from './components/PricingSensitivity';
  import ContactSensitivity from './components/ContactSensitivity';
  import HeaderSensitivity from "./components/HeaderSensitivity";
  import FooterSensitivity from "./components/FooterSensitivity";
  import PreLoaderSensitivity from "./components/PreLoaderSensitivity";
  import WorksSensitivity from "./components/WorksSensitivity";



  export default {
    name: 'HomeSensitivity',
    components: {
      BannerSensitivity,
      ServicesAreaSensitivity,
      PricingSensitivity,
      ContactSensitivity,
      HeaderSensitivity,
      FooterSensitivity,
      PreLoaderSensitivity,
      WorksSensitivity
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
