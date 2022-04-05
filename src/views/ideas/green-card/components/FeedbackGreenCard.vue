<template>
    <!-- Start Feedback Area -->
    <section id="testimonials" class="feedback-area ptb-80 bg-f9fafb">
        <div class="container">
            <div class="section-title">
                <h2>Success Stories</h2>
                <div class="bar"></div>
                <p>Below are some examples of our successful cases</p>
            </div>


            <div class="feedback-slides">
                <div class="client-feedback">
                    <div>
                        <slick
                            ref="slick"
                            class="slider-for"
                            :options="slickOptions"
                        >


                            <div class="item">
                                <div class="single-feedback" style="padding-left: 40px">
                                    <h6>⭐⭐⭐⭐⭐</h6>
                                    <h3>STEM</h3>
                                    <span style="padding-bottom: 15px">Product Manager in Big Tech</span>
                                    <p>In 2022, U.S. Citizenship and Immigration Services announced updated guidance on adjudicating requests for National Interest Waivers regarding job offer and labor certification requirements for certain advanced degree professionals and individuals of exceptional ability.</p>
                                    <p>This includes persons with advanced degrees in science, technology, engineering, and math (STEM) fields and entrepreneurs.</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback" style="padding-left: 40px">
                                    <h6>⭐⭐⭐⭐⭐</h6>
                                    <h3>STEM</h3>
                                    <span style="padding-bottom: 15px">Software engineer</span>
                                    <p>Software engineer in tech industry, it took only 2 months to receive early work authorization before green card was approved which allowed for employment change to another tech company in San Francisco.</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback" style="padding-left: 40px">
                                    <h6>⭐⭐⭐⭐⭐</h6>
                                    <h3>Entrepreneur</h3>
                                    <span style="padding-bottom: 15px">Founder of infrastructure and ecosystem business</span>
                                    <p>An entrepreneur’s specific background and career are important factors in determining which self-petition method would be the best fit: Extraordinary Ability or National Interest Waiver. </p>
                                    <p>In this case the biggest supporting factor was that company has made — and will continue to make — huge contributions to US environment, access to clean water, and rebuilding and maintaining the infrastructure. </p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback" style="padding-left: 40px">
                                    <h6>⭐⭐⭐⭐⭐</h6>
                                    <h3>Finance</h3>
                                    <span style="padding-bottom: 15px">Hedge Fund Manager</span>
                                    <p>Petition highlighted the track-record of consistent financial success in leading and critical roles at for-profit and non-profit organizations and the subsequent benefits that this success brought to the lives of other Americans, as well as major conceptual innovations in investment strategy and contributions to the global economy and U.S. jobs market. </p>
                                    <p>Curated robust testimonial support highlighting the client’s unambiguous expertise and professional contributions from field-leading experts at premier professional and academic institutions across the country, including individuals who had discussed the client’s work in their own professional presentations and publications.</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback" style="padding-left: 40px">
                                    <h6>⭐⭐⭐⭐⭐</h6>
                                    <h3>Sciences</h3>
                                    <span style="padding-bottom: 15px">Cancer Biomarker Discovery Scientist</span>
                                    <p>5 publications; over 220 citations; 6 conference presentations; 6 expert opinion letters; multiple research grants, including evidence of funding by NIH, National Cancer Institute and a number of other organizations.</p>
                                    <p>Several honors and awards, an article about the scientist’s research achievements; memberships in professional associations; invitations to publish articles, to join laboratories, and to present at conferences.</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback" style="padding-left: 40px">
                                    <h6>⭐⭐⭐⭐⭐</h6>
                                    <h3>Business</h3>
                                    <span style="padding-bottom: 15px">International Customer and Product Support Manager</span>
                                    <p>Petition highlighted extraordinary global experience as an International Customer and Product Support Manager, including international travels to provide unique and specialized hands-on training to professionals in the trucking industry and developing innovative solutions to the commercial truck aftermarket.</p>
                                    <p>Client work supports the growth of US international export market. Through detailed research and preparation, an extensive portfolio outlined employment in a critical or essential role for organizations with a distinguished reputation, evidence of original contributions to client's field of employment, and evidence of judging the work of others.</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="single-feedback" style="padding-left: 40px">
                                    <h6>⭐⭐⭐⭐⭐</h6>
                                    <h3>Ambassador for the non-profit athletic foundation</h3>
                                    <span style="padding-bottom: 15px">Exceptional Abilities</span>
                                    <p>No formal degree – the case was based on Exceptional Abilities. The applicant has won many awards and grants, has actively engaged in fundraising for non-profit foundations helping disabled people. </p>
                                    <p>An award-winning documentary was made about the applicant who has been invited to many schools, corporate functions, and community events to speak about his work and to inspire others into doing the same.</p>
                                </div>
                            </div>

                        </slick>
                    </div>
                </div>

                <div class="client-thumbnails">
                    <div>
                        <slick
                            ref = "slick2"
                            class="slider-nav"
                            :options="slickOptions2"
                        >

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

        <div class="shape2 rotateme"><img src="../resources/shape2.svg" alt="shape"></div>
        <div class="shape4"><img src="../resources/shape4.svg" alt="shape"></div>
        <div class="shape7"><img src="../resources/shape4.svg" alt="shape"></div>
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
                asNavFor: '.slider-nav',
                prevArrow: '.client-feedback .prev-arrow',
                nextArrow: '.client-feedback .next-arrow'
            },
            slickOptions2: {
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                cssEase: 'linear',
                autoplay: true,
                centerMode: true,
                draggable: false,
                focusOnSelect: true,
                asNavFor: '.slider-for',
                prevArrow: '.client-thumbnails .prev-arrow',
                nextArrow: '.client-thumbnails .next-arrow'
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
