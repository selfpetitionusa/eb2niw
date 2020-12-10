<template>
  <div>
    <Banner></Banner>
    <BoxesArea></BoxesArea>
    <ServicesArea></ServicesArea>
    <Pricing></Pricing>
    <Contact></Contact>
  </div>
</template>

<script>
  import Banner from './../components/home/Banner';
  import BoxesArea from './../components/home/BoxesArea';
  import ServicesArea from './../components/home/ServicesArea';
  import Pricing from './../components/home/Pricing';
  import Contact from './../components/home/Contact';


  export default {
    name: 'Home',
    components: {
      Banner,
      BoxesArea,
      ServicesArea,
      Pricing,
      Contact
    }
  }
</script>