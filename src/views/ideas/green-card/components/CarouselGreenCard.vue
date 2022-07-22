<template>
    <!-- Start Works Area -->
    <section class="works-area" style="background: white; margin-top: 10rem">

        <b-modal ref="modal-zoom" :modal-class="modalZoom" static :return-focus="this.$parent" size="lg" hide-footer>
            <template #modal-title>
               {{modalProperties[index].title}}
            </template>
            <img :src="getImgUrl()" />
        </b-modal>

        <div class="works-slides" style="margin-top: 3rem">
            <carousel
                :autoplay = "true"
                :paginationEnabled = "false"
                :loop = "true"
                :autoplaySpeed = "true"
                :autoplayTimeout = "5000"
                :perPageCustom = "[[0, 1],[768, 2],[1200, 3], [1500, 4]]"
            >
                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/Sample.png">
                        <a v-if="windowWidth > 767" @click="index = 0;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Successful real cover letter</a></h3>
                            <p>Candidate with banking and finance background</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/SampleEditable.png">
                        <a v-if="windowWidth > 767" @click="index = 1;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Editable cover letter</a></h3>
                            <p>Fill out yellow blanks to create your own letter</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/ReferralSample.png" >
                        <a v-if="windowWidth > 767" @click="index = 2;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Three examples of referral letters</a></h3>
                            <p>Use to prepare your own</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/Instructions.png" >
                        <a v-if="windowWidth > 767" @click="index = 3;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Instructions and samples to request referral letters</a></h3>
                            <p>Referral letters supporting cover letter</p>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div class="shape4"><img src="../resources/shape4.svg"></div>
    </section>
    <!-- End Works Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'CarouselGreenCard',
    components: { Carousel, Slide },
    data() {
        return {
            modalZoom: ['modal-zoom'],
            windowWidth: window.innerWidth,
            index: 0,
            modalProperties: [
                {
                   title : "Successful real cover letter",
                   img: "./Sample.png"
                },
                {
                    title : "Editable cover letter",
                    img: "./SampleEditable.png"
                },
                {
                    title : "Three examples of referral letters",
                    img: "./ReferralSample.png"
                },
                {
                    title : "Instructions and samples to request referral letters",
                    img: "./Instructions.png"
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
            var images = require.context('../resources/', false, /\.png$/)
            return images(this.modalProperties[this.index].img)
        }
    }
}
</script>
