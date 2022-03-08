<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderGreenCard v-else></HeaderGreenCard>
    <PreLoaderGreenCard v-if="isLoading" />
    <div>
      <BannerGreenCard></BannerGreenCard>
      <ServicesAreaGreenCard></ServicesAreaGreenCard>
      <WorksGreenCard></WorksGreenCard>
      <PricingGreenCard></PricingGreenCard>
      <ContactGreenCard></ContactGreenCard>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterGreenCard v-else></FooterGreenCard>
  </div>

</template>

<script>
  import BannerGreenCard from './components/BannerGreenCard';
  import ServicesAreaGreenCard from './components/ServicesAreaGreenCard';
  import PricingGreenCard from './components/PricingGreenCard';
  import ContactGreenCard from './components/ContactGreenCard';
  import HeaderGreenCard from "./components/HeaderGreenCard";
  import FooterGreenCard from "./components/FooterGreenCard";
  import PreLoaderGreenCard from "./components/PreLoaderGreenCard";
  import WorksGreenCard from "./components/WorksGreenCard";



  export default {
    name: 'HomeGreenCard',
    components: {
      BannerGreenCard,
      ServicesAreaGreenCard,
      PricingGreenCard,
      ContactGreenCard,
      HeaderGreenCard,
      FooterGreenCard,
      PreLoaderGreenCard,
      WorksGreenCard
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
