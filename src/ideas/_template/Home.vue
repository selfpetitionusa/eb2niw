<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <Header v-else></Header>
    <PreLoader v-if="isLoading" />
    <div>
      <Templates></Templates>
      <AI></AI>
      <AboutUs></AboutUs>
      <Timeline></Timeline>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <Footer v-else></Footer>
  </div>

</template>


<script>
  import AboutUs from './components/AboutUs';
  import Timeline from './components/Timeline';
  import Templates from './components/Templates';
  import AI from './components/AI';
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import PreLoader from "./components/PreLoader";

  export default {
    name: 'Home',
    components: {
      AboutUs,
      Timeline,
      Templates,
      AI,
      Header,
      Footer,
      PreLoader,
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
