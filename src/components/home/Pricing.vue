<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80 bg-f9f6f6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p><strong>100% Money Back Guarantee.</strong></p>
                    <p>Cancel monthly subscription anytime, no questions ask.</p>
                </div>
                <div class="paragraph">
                    <p>We want happy customers who benefit from the opportunity which tutoring website brings. If you buy the package and aren’t satisfied, e-mail us within 7 days from your purchase and we will refund your money.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Basic Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>9<span>/Mon</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul style="padding: 5px">
                                <li class="active">Website optimized to get you more students</li>
                                <li class="active">Zero-code, zero-design website template</li>
                                <li class="active">Subdomain on our server: <span style="color: #a7a7a7">yourname.tutomy.com</span></li>
                                <li class="active">24h support</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <button type="submit" v-b-modal.modal-2  @click="logEvent('free')" class="btn btn-primary">Select Plan</button>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>Tailored Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>18 + domain cost <span>/Mon</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul style="padding: 5px">
                                <li class="active">Website optimized to get you more students</li>
                                <li class="active">Zero-code, zero-design website template</li>
                                <li class="active">Your own domain: <span style="color: #a7a7a7">yourname.com</span></li>
                                <li class="active">24h support</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <button type="submit" v-b-modal.modal-2  @click="logEvent('premium')" class="btn btn-primary">Select Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-modal id="modal-2"  style="border-radius: 30px" :return-focus="this.$parent" hide-footer hide-header >
            <div class="mt-2">

                <p style="color: #0e314c; font-size: medium;font-weight: bold">How about VIP access for free?</p>
                <div class="row">
                  <div class="col-8">
                    <p style="color: #6084a4; font-size: 13px">We are <span style="font-weight: bold; text-decoration: underline;">looking for 20 tutors</span> to test our new website dashboard.</p>
                    <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Get FREE website for 3 months.</p>
                    <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Contact us for details.</p>
                  </div>

                  <div class="col-4">
                    <img src="../../assets/img/survey.svg" alt="video-pic">
                  </div>
                </div>

                <div class="row">
                    <div class="col-6"><a href="mailto:ceo@tutomy.com?subject=Testing website dashboard" class="btn btn-primary mt-5 d-block mx-auto" style="text-transform:none;">Free Test</a></div>
                    <div class="col-6"><a href="mailto:ceo@tutomy.com?subject=Paid Plan" class="btn btn-primary mt-5 d-block mx-auto" style="text-transform:none;">Paid Plan</a></div>
                </div>
            </div>

        </b-modal>

        <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape2 rotateme"><img src="../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape7"><img src="../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape4"><img src="../../assets/img/shape4.svg" alt="shape"></div>
    </section>
    <!-- End Pricing Area -->
</template>

<script>



export default {
    name: 'Pricing',
    methods: {
        logEvent() {
            this.$store.commit('popup/setSeen');
        }
    }
}
</script>
