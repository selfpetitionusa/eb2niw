<template>

  <div @mouseleave="mouseLeave">
    <b-modal ref="modal-3"  style="border-radius: 30px" :return-focus="this.$parent" hide-footer hide-header >
      <div class="mt-2">

        <p style="color: #0e314c; font-size: medium;font-weight: bold">How about VIP access for free?</p>
        <div class="row">
          <div class="col-7">
            <p style="color: #6084a4; font-size: 13px">We are <span style="font-weight: bold; text-decoration: underline;">looking for 20 tutors</span> to test our new website dashboard.</p>
            <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Get FREE website presence for 3 months.</p>
            <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Contact us for details.</p>
            <a href="mailto:ceo@tutomy.com?subject=Testing website dashboard" class="btn btn-primary mt-5 d-block mx-auto" style="text-transform:none;">Claim VIP access</a>
          </div>
          <div class="col-5">
            <img src="./../assets/img/survey.svg" alt="video-pic">
          </div>
        </div>
      </div>

    </b-modal>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <Header v-else></Header>
    <PreLoader v-if="isLoading" />
    <div>
      <Banner></Banner>
      <BoxesArea></BoxesArea>
      <ServicesArea></ServicesArea>
      <Pricing></Pricing>
      <Contact></Contact>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <Footer v-else></Footer>
  </div>

</template>

<script>
  import Banner from './../components/home/Banner';
  import BoxesArea from './../components/home/BoxesArea';
  import ServicesArea from './../components/home/ServicesArea';
  import Pricing from './../components/home/Pricing';
  import Contact from './../components/home/Contact';
  import Header from "../components/layout/Header";
  import Footer from "../components/layout/Footer";
  import PreLoader from "../components/layout/PreLoader";


  export default {
    name: 'Home',
    components: {
      Banner,
      BoxesArea,
      ServicesArea,
      Pricing,
      Contact,
      Header,
      Footer,
      PreLoader
    },
    methods: {
      mouseLeave: function() {
        if(!this.$store.state.seen) {
          this.$refs['modal-3'].show();
        }
        this.$store.commit('setSeen');
      }
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