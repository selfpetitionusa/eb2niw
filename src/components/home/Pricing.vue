<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p><strong>100% Money-Back Guarantee</strong></p>
                    <p>Cancel monthly subscription anytime, no questions asked.</p>
                </div>
                <div class="paragraph">
                    <p>We want happy customers who benefit from the opportunity created by having a professional tutoring website.</p>
                </div>
            </div>

            <p><a class="pricing-free" @click="$gtag.event('register')" href="/register">FREE TRIAL</a></p>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Basic Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>5<span>/Monthly</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Template to launch website in 11min</li>
                                <li class="active">Customizable color themes</li>
                                <li class="active">Free personal subdomain on tutomy.com</li>
                                <li class="active">Search Engine Optimization on autopilot</li>
                                <li class="active">24/7 support from our experts</li>
                                <li class="active">Website includes Tutomy branding</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/register"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>Pro Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>18<span>/Monthly</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul style="margin: 0px 0px 12px">
                                <li class="active">All the benefits of the Basic Plan, and...</li>
                                <li><font-awesome-icon class="icon-plus" icon="plus-circle"/></li>
                            </ul>
                            <ul style="margin-bottom: 26px; padding: 25px 0px; background: linear-gradient(to right bottom, #fffcff, #fbfaff, #effbff, #e0fdff, #d5fefd)">
                                <li class="active">Stripe and PayPal payments</li>
                                <li class="active">Calendar integrated on the website</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/register"  @click="$gtag.event('plan-premium')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="shape7"><img src="../../assets/img/shape4.svg" alt="Price for private tutor website template"></div>
        <div class="shape4"><img src="../../assets/img/shape4.svg" alt="Price for private tutor website template"></div>
    </section>
    <!-- End Pricing Area -->
</template>
