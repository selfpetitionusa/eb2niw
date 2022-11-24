<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>SINGLE MEME</h3>
                        </div>

                        <div class="price">
                            <span><sup></sup>$17</span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">1 user</li>
                                <li class="active">Unlimited uploads</li>
                                <li class="active">Unlimited text edits</li>
                                <li class="active">Price per download</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/register"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>7 MEMES PACKAGE</h3>
                        </div>

                        <div class="price">
                            <span><sup></sup>$89</span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">1 user</li>
                                <li class="active">Unlimited uploads</li>
                                <li class="active">Unlimited text edits</li>
                                <li class="active">Download 7 memes</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/register"  @click="$gtag.event('plan-premium')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>UNLIMITED</h3>
                        </div>

                        <div class="price">
                            <span><sup></sup>$135<span> monthly</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Multiple users</li>
                                <li class="active">Unlimited uploads</li>
                                <li class="active">Unlimited text edits</li>
                                <li class="active">Unlimited downloads</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/register"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="shape7"><img src="../../../assets/img/shape4.svg" ></div>
    </section>
    <!-- End Pricing Area -->
</template>

<script>
export default {
    name: 'PricingMemes'
}
</script>
