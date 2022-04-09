<template>
    <!-- Start Works Area -->
    <section class="works-area" style="background: white">

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
                :perPageCustom = "[[0, 1],[768, 2],[1200, 3]]"
            >
                <slide>
                    <div class="single-works">
                        <img src="../resources/mortgage-sensitivity.svg">
                        <a v-if="windowWidth > 767" @click="index = 0;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Embed on the website, in the email or get svg</a></h3>
                            <p>Need interactive sensitivity table for website visitors or a convenient output?</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../resources/temperature-sensitivity.svg">
                        <a v-if="windowWidth > 767" @click="index = 1;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Visualize scenarios with a simple API call</a></h3>
                            <p>Tailor the table for various industry standards: you decide what analysis & scenarios to analyze</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../resources/parameters-sensitivity.svg">
                        <a v-if="windowWidth > 767" @click="index = 2;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Easy way to personalize parameters</a></h3>
                            <p>Decide what scenarios to analyze and how to display visual results</p>
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
    name: 'WorksSensitivity',
    components: { Carousel, Slide },
    data() {
        return {
            modalZoom: ['modal-zoom'],
            windowWidth: window.innerWidth,
            index: 0,
            modalProperties: [
                {
                   title : "Embed on the website, in the email or get svg",
                   img: "./mortgage-sensitivity.svg"
                },
                {
                    title : "Visualize scenarios with a simple API call",
                    img: "./temperature-sensitivity.svg"
                },
                {
                    title : "Easy way to personalize parameters",
                    img: "./parameters-sensitivity.svg"
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
            var images = require.context('../resources/', false, /\.svg$/)
            return images(this.modalProperties[this.index].img)
        }
    }
}
</script>
