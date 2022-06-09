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
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>STEP 1</h3>
                            <h3 style="margin-top: 0.5rem">Evaluation</h3>
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
                            <a href="/green-card-evaluation"  @click="$gtag.event('plan-basic')" class="btn btn-primary">Start</a>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>STEP 2</h3>
                            <h3 style="margin-top: 0.5rem">Consultation</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>240<span>/45min</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Lawyer matching</li>
                                <li class="active">Personalized filing plan</li>
                                <li class="active">Tailored pricing quote</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <div class="btn-gc" style="color: #d3d3d3">Start with evaluation</div>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>STEP 3</h3>
                            <h3 style="margin-top: 0.5rem">Filing</h3>
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
                            <div class="btn-gc" style="color: #d3d3d3; ">Start with evaluation</div>
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
