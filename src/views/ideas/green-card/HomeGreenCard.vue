<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderGreenCard v-else></HeaderGreenCard>
    <PreLoaderGreenCard v-if="isLoading" />
    <div>
      <BannerGreenCard></BannerGreenCard>
      <ServicesAreaGreenCard></ServicesAreaGreenCard>
      <ProcessGreenCard></ProcessGreenCard>
      <BioGreenCard></BioGreenCard>
      <FeedbackGreenCard></FeedbackGreenCard>
      <ContactGreenCard></ContactGreenCard>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterGreenCard v-else></FooterGreenCard>
  </div>

</template>

<script>
  import BannerGreenCard from './components/BannerGreenCard';
  import ServicesAreaGreenCard from './components/ServicesAreaGreenCard';
  import FeedbackGreenCard from './components/FeedbackGreenCard';
  import ProcessGreenCard from './components/ProcessGreenCard';
  import BioGreenCard from './components/BioGreenCard';
  import ContactGreenCard from './components/ContactGreenCard';
  import HeaderGreenCard from "./components/HeaderGreenCard";
  import FooterGreenCard from "./components/FooterGreenCard";
  import PreLoaderGreenCard from "./components/PreLoaderGreenCard";


  export default {
    name: 'HomeGreenCard',
    components: {
      BannerGreenCard,
      ServicesAreaGreenCard,
      FeedbackGreenCard,
      ProcessGreenCard,
      BioGreenCard,
      ContactGreenCard,
      HeaderGreenCard,
      FooterGreenCard,
      PreLoaderGreenCard
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
