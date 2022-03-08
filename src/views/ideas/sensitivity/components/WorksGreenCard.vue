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
                        <img src="../../../../assets/img/landing-slider-1.png">
                        <a v-if="windowWidth > 767" @click="index = 0;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Process payments on autopilot</a></h3>
                            <p>Get paid with PayPal and Stripe (cards, Apple Pay, Google Pay) - no more chasing unpaid invoices!</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../../../assets/img/landing-slider-2.png">
                        <a v-if="windowWidth > 767" @click="index = 1;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Looks great on mobile and desktop</a></h3>
                            <p>Did you know that most of website visitors check you on mobile device?</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../../../assets/img/landing-slider-3.png" >
                        <a v-if="windowWidth > 767" @click="index = 2;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Automate your one-time and recurring calendar bookings</a></h3>
                            <p>Save time by letting students book lessons directly on your website</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../../../../assets/img/landing-slider-4.png" >
                        <a v-if="windowWidth > 767" @click="index = 3;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Add your photo or logo</a></h3>
                            <p>It tremendously increases the number of students who contact you</p>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div class="shape4"><img src="../../../../assets/img/shape4.svg"></div>
    </section>
    <!-- End Works Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'WorksGreenCard',
    components: { Carousel, Slide },
    data() {
        return {
            modalZoom: ['modal-zoom'],
            windowWidth: window.innerWidth,
            index: 0,
            modalProperties: [
                {
                   title : "Process payments on autopilot",
                   img: "./landing-slider-1.png"
                },
                {
                    title : "Looks great on mobile and desktop",
                    img: "./landing-slider-2.png"
                },
                {
                    title : "Automate your one-time and recurring calendar bookings",
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
            var images = require.context('../../../../assets/img/', false, /\.png$/)
            return images(this.modalProperties[this.index].img)
        }
    }
}
</script>
