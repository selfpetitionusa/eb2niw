<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Process</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p>We review profiles of candidates to select only those with high chances of success and dedicate you to a lawyer who specializes in your area</p>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Evaluation</h3>
                        </div>

                        <div class="price">
                            <span>Free</span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Your profile evaluation</li>
                                <li class="active">Process overview</li>
                                <li class="active">No commitment to file</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/green-card-evaluation"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>Consultation</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>240<span>/45min</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Filing process overview</li>
                                <li class="active">Lawyer matching</li>
                                <li class="active">Tailored pricing quote</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="https://calendly.com/self-petition/consultation"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Filing</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>7-15k<span>/depends on</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Number of family members</li>
                                <li class="active">Your profile details</li>
                                <li class="active">Visa type: EB-1A vs EB-2 NIW</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="https://calendly.com/self-petition/green-card-pricing-quote"  @click="$gtag.event('plan-premium')" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="shape7"><img src="../resources/shape4.svg" ></div>
    </section>
    <!-- End Pricing Area -->
</template>

<script>
export default {
    name: 'PricingGreenCard'
}
</script>
