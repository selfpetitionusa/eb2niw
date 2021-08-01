<template>
    <!-- Start Feedback Area -->
    <section class="feedback-area ptb-80 bg-f7fafd">
        <div class="container">
            <div class="section-title">
                <h2>What users say?</h2>
                <div class="bar"></div>
                <p>From our users -- private tutors, like you.</p>
                <p>They all built their professional tutoring business with Tutomy:</p>
            </div>

            <div class="feedback-slides">
                <div class="client-feedback">
                    <div>
                        <slick
                            ref="slick"
                            :options="slickOptions"
                            :asNavFor = "$refs.slick2"
                        >
                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/img/client-image/Muhammad_img.png" alt="image">
                                    </div>

                                    <h3>Muhammad Mairaj</h3>
                                    <span>Math, Physics & English private tutor</span>
                                    <span><a href="https://www.tutomy.com/tutor/muhammadmairaj">Visit my website</a></span>
                                    <p>Tutomy website provides students with complete information about my services, prices, links to social media and allows them to contact me. And the most important: I look very professional.</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/img/client-image/Kgomotso_img.png" alt="image">
                                    </div>

                                    <h3>Kgomotso Molobi</h3>
                                    <span>Math & English private tutor</span>
                                    <a href="https://www.tutomy.com/tutor/kgomotsomolobi">Visit my website</a>
                                    <p>Easy to work with, even though you are not tech-savvy. I do not need to scratch my head every time I want to edit it.</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/img/client-image/Johnette_img.png" alt="image">
                                    </div>

                                    <h3>Johnette Stevenson</h3>
                                    <span>History, Geography & English private tutor</span>
                                    <a href="https://www.tutomy.com/tutor/johnette-stevenson">Visit my website</a>
                                    <p>An easy-to-use tool that helped me to build a personal, professionally-looking website without the need to have technical or design knowledge. And also great support and quick response time!</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/img/client-image/Santana_img.png" alt="image">
                                    </div>

                                    <h3>Santana Stallberg</h3>
                                    <span>All subjects for Jk-University remotely</span>
                                    <a href="https://www.tutomy.com/tutor/santanastallberg">Visit my website</a>
                                    <p>The fast and reliable one-page website, which is able to effectively display my tutoring abilities on both mobile and desktop. With a professional look and the ability to custom as needed, my website is able to attract the right clients at the right time!</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/img/client-image/Joseph_img.png" alt="image">
                                    </div>

                                    <h3>Joseph Seracuse</h3>
                                    <span>Math & Science private tutor</span>
                                    <a href="https://www.tutomy.com/tutor/josephseracuse">Visit my website</a>
                                    <p>Remarkably intuitive and easy to set up – I completed my website via my mobile phone quickly with little effort! I know my website looks great and highlights my qualifications wonderfully! Best tutor platform I've seen in my 17 years of tutoring!</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback">
                                    <div class="client-img">
                                        <img src="../../assets/img/client-image/Sunina_img.png" alt="image">
                                    </div>

                                    <h3>Sunina Kiran</h3>
                                    <span>Science & Environmental Sciences private tutor</span>
                                    <a href="https://www.tutomy.com/tutor/suninakiran">Visit my website</a>
                                    <p>Simple – yet great, clean, and professional website. Also super quick to set up, which allows me to focus on tutoring and my business.</p>
                                </div>
                            </div>

                        </slick>
                    </div>
                </div>

                <div class="client-thumbnails">
                    <div>
                        <slick
                            ref = "slick2"
                            :asNavFor = "$refs.slick"
                            :options="slickOptions2"
                        >
                            <div class="item">
                                <div class="img-fill"><img src="../../assets/img/client-image/Muhammad_img.png" alt="client"></div>
                            </div>

                            <div class="item">
                                <div class="img-fill"><img src="../../assets/img/client-image/Kgomotso_img.png" alt="client"></div>
                            </div>

                            <div class="item">
                                <div class="img-fill"><img src="../../assets/img/client-image/Johnette_img.png" alt="client"></div>
                            </div>

                            <div class="item">
                                <div class="img-fill"><img src="../../assets/img/client-image/Santana_img.png" alt="client"></div>
                            </div>

                            <div class="item">
                                <div class="img-fill"><img src="../../assets/img/client-image/Joseph_img.png" alt="client"></div>
                            </div>

                            <div class="item">
                                <div class="img-fill"><img src="../../assets/img/client-image/Sunina_img.png" alt="client"></div>
                            </div>

                        </slick>
                    </div>

                    <button class="prev-arrow slick-arrow">
                        <feather type="arrow-left"></feather>
                    </button>

                    <button class="next-arrow slick-arrow">
                        <feather type="arrow-right"></feather>
                    </button>
                </div>
            </div>
        </div>

        <div class="shape2 rotateme"><img src="../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape4"><img src="../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape6 rotateme"><img src="../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape7"><img src="../../assets/img/shape4.svg" alt="shape"></div>
    </section>
    <!-- End Feedback Area -->
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel';
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
    name: 'Feedback',
    components: { Slick },
    data() {
        return {
            slickOptions: {
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                fade: true,
                autoplay: true,
                draggable: true,
                prevArrow: '.client-feedback .prev-arrow',
                nextArrow: '.client-feedback .next-arrow'
            },
            slickOptions2: {
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                cssEase: 'linear',
                autoplay: true,
                centerMode: true,
                draggable: false,
                focusOnSelect: true,
                prevArrow: '.client-thumbnails .prev-arrow',
                nextArrow: '.client-thumbnails .next-arrow',
            },
        };
    },

    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        }
    }
}
</script>
