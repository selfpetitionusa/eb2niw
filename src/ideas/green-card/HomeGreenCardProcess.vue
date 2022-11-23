<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img width="150px" src="./resources/selfpetitionusa-logo.svg" alt="Self Petition USA"/>
                    </router-link>

                    <ul class="nav ml-auto">

                        <li class="nav-item">
                            <a href="/" class="nav-link uscis-menu">Home</a>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    </header>
    <div>
      <ProcessGreenCard></ProcessGreenCard>
      <ContactGreenCard></ContactGreenCard>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterGreenCard v-else></FooterGreenCard>
  </div>

</template>

<script>
  import ProcessGreenCard from './components/ProcessGreenCard';
  import ContactGreenCard from './components/ContactGreenCard';
  import FooterGreenCard from "./components/FooterGreenCard";

  export default {
    name: 'HomeGreenCardProcess',
    components: {
      ProcessGreenCard,
      ContactGreenCard,
      FooterGreenCard
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
      }
    },

    mounted() {
      this.currentUrl = window.location.pathname;
    }
  }
</script>
