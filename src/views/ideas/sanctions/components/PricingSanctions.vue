<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p>If you're not happy with your subscription, contact us for a full refund within 14 days - no questions asked</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Basic Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>49<span>per month</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">100 customers per day</li>
                                <li class="active">Set up with a few lines of code</li>
                                <li class="active">Global & local Sanctions Lists</li>
                                <li class="active">Over 2bn unique records</li>
                                <li class="active">24/7 email support</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/sanctions-application"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>Enterprise Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>120<span>per month</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">1000 customers per day</li>
                                <li class="active">Set up with a few lines of code</li>
                                <li class="active">Global & local Sanctions Lists</li>
                                <li class="active">Over 2bn unique records</li>
                                <li class="active">24/7 email and call support</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/sanctions-application"  @click="$gtag.event('plan-premium')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Unlimited Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>500<span>per month</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Unlimited customers per day</li>
                                <li class="active">Set up with a few lines of code</li>
                                <li class="active">Global & local Sanctions Lists</li>
                                <li class="active">Over 2bn unique records</li>
                                <li class="active">Dedicated account manager</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/sanctions-application"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Select Plan</a>
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
    name: 'PricingSanctions'
}
</script>
