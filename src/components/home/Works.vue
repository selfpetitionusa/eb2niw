<template>
    <!-- Start Works Area -->
    <section class="works-area" style="background: white">


        <div class="works-slides">
            <carousel
                :autoplay = "true"
                :paginationEnabled = "false"
                :loop = "true"
                :autoplaySpeed = "true"
                :autoplayTimeout = "5000"
                :perPageCustom = "[[0, 1],[768, 2],[1200, 3], [1500, 4]]"
            >
                <slide>
                    <div class="single-works">
                        <img src="../../assets/img/landing-slider-1.png" alt="Finding students with Tutomy website - example view">

                        <a href="#" class="icon"><feather type="zoom-in"></feather></a>
                        <div class="works-content">
                            <h3><a href="#">How do your clients see you?</a></h3>
                            <p>Your professional tutoring website which you create within 11min</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../assets/img/landing-slider-2.png" alt="Finding students with Tutomy website - empty view">

                        <a href="#" class="icon"><feather type="zoom-in"></feather></a>
                        <div class="works-content">
                            <h3><a href="#">Your starting point</a></h3>
                            <p>Fill out an empty template with information about your tutoring business</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../assets/img/landing-slider-3.png" alt="Finding students with Tutomy website - edit view">

                        <a href="#" class="icon"><feather type="zoom-in"></feather></a>
                        <div class="works-content">
                            <h3><a href="#">Add your photo or logo</a></h3>
                            <p>It tremendously increases the number of students who contact you</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../assets/img/landing-slider-4.png" alt="Finding students with Tutomy website - complete view">

                        <a href="#" class="icon"><feather type="zoom-in"></feather></a>
                        <div class="works-content">
                            <h3><a href="#">Use the preview to see your website</a></h3>
                            <p>Any update you make, after saving the changes you see how your website is coming together</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../assets/img/landing-slider-5.png" alt="Finding students with Tutomy website - edit rates view">

                        <a href="#" class="icon"><feather type="zoom-in"></feather></a>
                        <div class="works-content">
                            <h3><a href="#">Decide how much information to include</a></h3>
                            <p>Website is flexible to accommodate your individual business need</p>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div class="shape4"><img src="../../assets/img/shape4.svg" alt="shape"></div>
    </section>
    <!-- End Works Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'Works',
    components: { Carousel, Slide }
}
</script>
