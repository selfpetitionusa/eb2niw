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
                :perPageCustom = "[[0, 1],[768, 2],[1200, 3], [1500, 4]]"
            >
                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/aggregate.png">
                        <a v-if="windowWidth > 767" @click="index = 0;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Upload your meme background</a></h3>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/upvotes.png">
                        <a v-if="windowWidth > 767" @click="index = 1;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Select photos to extract faces</a></h3>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/emoji.png" >
                        <a v-if="windowWidth > 767" @click="index = 2;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Personalize your meme</a></h3>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/annotate.png" >
                        <a v-if="windowWidth > 767" @click="index = 3;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Easily add the relevant text</a></h3>
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
                   title : "Upload your meme background",
                   img: "./aggregate.png"
                },
                {
                    title : "Select photos to extract faces",
                    img: "./upvotes.png"
                },
                {
                    title : "Personalize your meme",
                    img: "./emoji.png"
                },
                {
                    title : "Easily add the relevant text",
                    img: "./annotate.png"
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
