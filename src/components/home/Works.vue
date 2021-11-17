<template>
    <!-- Start Works Area -->
    <section class="works-area" style="background: white">

        <b-modal ref="modal-zoom" :modal-class="modalZoom" static :return-focus="this.$parent" size="lg" hide-footer>
            <template #modal-title>
               {{modalProperties[index].title}}
            </template>
            <img :src="getImgUrl()" />
        </b-modal>

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
                        <a v-if="windowWidth > 767" @click="index = 0;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">How do your clients see you?</a></h3>
                            <p>Professional tutoring website which you can create in just 11 minutes</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../assets/img/landing-slider-2.png" alt="Finding students with Tutomy website - mobile view">
                        <a v-if="windowWidth > 767" @click="index = 1;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Looks great on mobile and desktop</a></h3>
                            <p>Did you know that most of website visitors check you on mobile device?</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../assets/img/landing-slider-3.png" alt="Finding students with Tutomy website - calendar, bookings and payments">
                        <a v-if="windowWidth > 767" @click="index = 2;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Save time with calendar and auto-billing</a></h3>
                            <p>Automate your one-time and recurring payments when clients book lessons on your website</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../assets/img/landing-slider-4.png" alt="Finding students with Tutomy website - add photo view">
                        <a v-if="windowWidth > 767" @click="index = 3;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Add your photo or logo</a></h3>
                            <p>It tremendously increases the number of students who contact you</p>
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
    components: { Carousel, Slide },
    data() {
        return {
            modalZoom: ['modal-zoom'],
            windowWidth: window.innerWidth,
            index: 0,
            modalProperties: [
                {
                   title : "How do your clients see you?",
                   img: "./landing-slider-1.png"
                },
                {
                    title : "Looks great on mobile and desktop",
                    img: "./landing-slider-2.png"
                },
                {
                    title : "Save time with calendar and auto-billing",
                    img: "./landing-slider-3.png"
                },
                {
                    title : "Add your photo or logo",
                    img: "./landing-slider-4.png"
                }

            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        },
        getImgUrl() {
            var images = require.context('../../assets/img/', false, /\.png$/)
            return images(this.modalProperties[this.index].img)
        }
    }
}
</script>
