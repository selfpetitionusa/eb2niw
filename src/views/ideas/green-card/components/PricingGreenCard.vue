<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p>We review profiles of candidates to select only those with high chances of success and dedicate you to a lawyer who specializes in your area</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Profile Evaluation</h3>
                        </div>

                        <div class="price">
                            <span>Free</span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Your profile evaluation</li>
                                <li class="active">No commitment to file</li>
                                <li class="active">Unlimited inquiries</li>
                                <li class="active">Process overview</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/green-card-evaluation"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>Petition filing</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>7-15k<span>/depends on</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Number of family members</li>
                                <li class="active">Your profile details</li>
                                <li class="active">Type of the visa: EB-1A vs EB-2 NIW</li>
                                <li class="active">20% refund policy if not successful</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/green-card-application"  @click="$gtag.event('plan-premium')" class="btn btn-primary">Select Plan</a>
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
    name: 'PricingGreenCard'
}
</script>
