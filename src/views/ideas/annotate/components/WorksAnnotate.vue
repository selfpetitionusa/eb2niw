<template>
    <!-- Start Works Area -->
    <section class="works-area" style="background: white">

        <b-modal ref="modal-zoom" :modal-class="modalZoom" static :return-focus="this.$parent" size="lg" hide-footer>
            <template #modal-title>
               {{modalProperties[index].title}}
            </template>
            <img :src="getImgUrl()" />
        </b-modal>

        <div style="margin: 0 25px">
            <div class="row">
                <div class="col-lg-6 col-sm-8 col-10 offset-lg-3 offset-sm-2 offset-1">
                    <img src="../resources/1-2-3.svg" style="margin-bottom: 1rem"/>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                    <div class="row">
                        <div class="col-4" style="text-align: center; padding: 0">Select elements <br> for users to comment on</div>
                        <div class="col-4" style="text-align: center; padding: 0 10px">Get comments, <br> upvotes & reactions</div>
                        <div class="col-4" style="text-align: center; padding: 0">Aggregate feedback <br>into actionable reports</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="works-slides" style="margin-top: 7rem">
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
                        <img src="../resources/aggregate.png">
                        <a v-if="windowWidth > 767" @click="index = 0;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Aggregate feedback into actionable reports</a></h3>
                            <p>At first glance you know which areas to prioritize</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../resources/upvotes.png">
                        <a v-if="windowWidth > 767" @click="index = 1;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Resolve unclear or conflicting feedback</a></h3>
                            <p>It has never been more obvious which feedback to implement</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../resources/emoji.png" >
                        <a v-if="windowWidth > 767" @click="index = 2;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Capture your visitors emotions</a></h3>
                            <p>Choose the emojis that better capture feedback in your project</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works">
                        <img src="../resources/annotate.png" >
                        <a v-if="windowWidth > 767" @click="index = 3;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Collect visual feedback</a></h3>
                            <p>Spend less time collecting and organizing feedback</p>
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
    name: 'WorksAnnotate',
    components: { Carousel, Slide },
    data() {
        return {
            modalZoom: ['modal-zoom'],
            windowWidth: window.innerWidth,
            index: 0,
            modalProperties: [
                {
                   title : "Aggregate feedback into actionable reports",
                   img: "./aggregate.png"
                },
                {
                    title : "Resolve unclear or conflicting feedback",
                    img: "./upvotes.png"
                },
                {
                    title : "Capture your visitors emotions",
                    img: "./emoji.png"
                },
                {
                    title : "Collect visual feedback",
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
