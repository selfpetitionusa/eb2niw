<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p>If you're not happy with your subscription within 14 days, contact us for a full refund - no questions asked</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Basic Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>10<span> monthly</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">10,000 tables/month</li>
                                <li class="active">Full commercial usage license</li>
                                <li class="active">No watermark</li>
                                <li class="active">Worldwide CDN</li>
                                <li class="active">Regular support</li>
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
                            <h3>Professional Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>59<span> monthly</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Unlimited tables/month</li>
                                <li class="active">Full commercial usage license</li>
                                <li class="active">No watermark</li>
                                <li class="active">Worldwide CDN</li>
                                <li class="active">Priority Support</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/register"  @click="$gtag.event('plan-premium')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="shape7"><img src="../../../../assets/img/shape4.svg" ></div>
        <div class="shape4"><img src="../../../../assets/img/shape4.svg" ></div>
    </section>
    <!-- End Pricing Area -->
</template>

<script>
export default {
    name: 'PricingSensitivity'
}
</script>
