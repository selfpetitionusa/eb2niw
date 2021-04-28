<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80 bg-f9f6f6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Free Plan</h3>
                        </div>
                        
                        <div class="price">
                            <span><sup>$</sup>0 <span>/Mon</span></span>
                        </div>
                        
                        <div class="pricing-features">
                            <ul>
                                <li class="active">Your tutor website with our no-code template</li>
                                <li>Marketing and referral system</li>
                                <li>Video to run your lessons</li>
                                <li>Payment processing</li>
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
                            <h3>Paid Plan</h3>
                        </div>
                        
                        <div class="price">
                            <span><sup>$</sup>18.00 <span>/Mon</span></span>
                        </div>
                        
                        <div class="pricing-features">
                            <ul>
                                <li class="active">Marketing and referral system</li>
                                <li class="active">Your tutor website with our no-code template</li>
                                <li class="active">Video to run your lessons</li>
                                <li class="active">Payment processing</li>
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

                <p style="color: #949494; font-size: medium; font-size: 13px; text-align: center;">-- Tutomy is now in final development stage -- </p>
                <p style="color: #0e314c; font-size: medium;font-weight: bold">How about VIP access for free?</p>
                <div class="row">
                  <div class="col-8">
                    <p style="color: #6084a4; font-size: 13px">We are <span style="font-weight: bold; text-decoration: underline;">looking for 20 tutors</span> to test our new website dashboard.</p>
                    <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Get FREE website for 3 months.</p>
                    <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Contact us for details.</p>
                    <a href="mailto:ceo@tutomy.com?subject=Testing website dashboard" class="btn btn-primary mt-5 d-block mx-auto" style="text-transform:none;">Claim VIP access</a>
                  </div>
                  <div class="col-4">
                    <img src="../../assets/img/survey.svg" alt="video-pic">
                  </div>
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
            this.$store.commit('setSeen');
        }
    }
}
</script>