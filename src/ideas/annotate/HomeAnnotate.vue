<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderAnnotate v-else></HeaderAnnotate>
    <PreLoaderAnnotate v-if="isLoading" />
    <div>
      <BannerAnnotate></BannerAnnotate>
      <ServicesAreaAnnotate></ServicesAreaAnnotate>
      <WorksAnnotate></WorksAnnotate>
      <PricingAnnotate></PricingAnnotate>
      <ContactAnnotate></ContactAnnotate>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterAnnotate v-else></FooterAnnotate>
  </div>

</template>


<script>
  import BannerAnnotate from './components/BannerAnnotate';
  import ServicesAreaAnnotate from './components/ServicesAreaAnnotate';
  import PricingAnnotate from './components/PricingAnnotate';
  import ContactAnnotate from './components/ContactAnnotate';
  import HeaderAnnotate from "./components/HeaderAnnotate";
  import FooterAnnotate from "./components/FooterAnnotate";
  import PreLoaderAnnotate from "./components/PreLoaderAnnotate";
  import WorksAnnotate from "./components/WorksAnnotate";



  export default {
    name: 'HomeAnnotate',
    components: {
      BannerAnnotate,
      ServicesAreaAnnotate,
      PricingAnnotate,
      ContactAnnotate,
      HeaderAnnotate,
      FooterAnnotate,
      PreLoaderAnnotate,
      WorksAnnotate
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
