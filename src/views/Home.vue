<template>

  <div @mouseleave="mouseLeave">
    <b-modal ref="modal-3"  style="border-radius: 30px" :return-focus="this.$parent" title="Qualify for a BONUS offer" hide-footer>
      <div class="popup-register">
        <p class="popup-title">Do you have <span class="highlight">11min</span> to create your new website?</p>
        <p class="popup-body">Complete website in the next 48h and benefit from 3 complimentary sessions:</p>

        <div class="row">
          <div class="col-sm-9">
            <ul class="bonus-offer">
              <li>Your website review by an expert</li>
              <li>1-on-1 advice on how to promote website</li>
              <li>Progress check-up</li>
            </ul>
          </div>

          <div class="col-sm-3 pic-container">
            <img src="./../assets/img/gift2.svg" alt="gift-pic">
          </div>
        </div>
      </div>

      <div class="col-12">
          <a href="/register" class="btn btn-primary btn-register" style="margin-top: 1.5rem">CREATE A WEBSITE TODAY - FREE</a>
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
      <Testimonials></Testimonials>
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
  import Testimonials from "../components/home/Testimonials";
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
      Testimonials,
      Contact,
      Header,
      Footer,
      PreLoader
    },
    methods: {
      mouseLeave: function() {
        if(!this.$store.state.popup.seen) {
          this.$refs['modal-3'].show();
        }
        this.$store.commit('popup/setSeen');
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
