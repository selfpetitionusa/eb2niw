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
                :autoplayTimeout = "7000"
                :perPageCustom = "[[0, 1],[768, 2],[1200, 3], [1500, 4]]"
            >
                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/carousel1.png">
                        <a v-if="windowWidth > 767" @click="index = 0;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Upload image for meme background</a></h3>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/carousel2.png">
                        <a v-if="windowWidth > 767" @click="index = 1;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Upload photo to crop face</a></h3>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/carousel3.png" >
                        <a v-if="windowWidth > 767" @click="index = 2;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Position face to create a meme</a></h3>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/carousel4.png" >
                        <a v-if="windowWidth > 767" @click="index = 3;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Remove background from photo</a></h3>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/carousel5.png" >
                        <a v-if="windowWidth > 767" @click="index = 4;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Add some text</a></h3>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/carousel6.png" >
                        <a v-if="windowWidth > 767" @click="index = 5;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Download your finished meme</a></h3>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div class="shape4"><img src="../../../assets/img/shape4.svg"></div>
    </section>
    <!-- End Works Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'WorksMemes',
    components: { Carousel, Slide },
    data() {
        return {
            modalZoom: ['modal-zoom'],
            windowWidth: window.innerWidth,
            index: 0,
            modalProperties: [
                {
                   title : "Upload image for meme background",
                   img: "./carousel1.png"
                },
                {
                    title : "Upload photo to crop face",
                    img: "./carousel2.png"
                },
                {
                    title : "Position face to create a meme",
                    img: "./carousel3.png"
                },
                {
                    title : "Remove background from photo",
                    img: "./carousel4.png"
                },
                {
                    title : "Add some text",
                    img: "./carousel5.png"
                },
                {
                    title : "Download your finished meme",
                    img: "./carousel6.png"
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
