<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p>You only get charged when your fans pay to you</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Basic Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup></sup>6%<span> processed payments</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Create a poll</li>
                                <li class="active">Share it with your audience</li>
                                <li class="active">Let fans vote with their money</li>
                                <li class="active">Receive payments from voters <br>who selected the winning option</li>
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
                            <span><sup></sup>7.5%<span> processed payments</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul style="margin: 0px 0px 12px">
                                <li class="active">All the benefits of the Basic Plan, and...</li>
                                <li><font-awesome-icon class="icon-plus" icon="plus-circle"/></li>
                            </ul>
                            <ul style="margin-bottom: 16px; padding: 8px 0px; background: linear-gradient(to right bottom, #fffcff, #fbfaff, #effbff, #e0fdff, #d5fefd)">
                                <li class="active">Customize colors</li>
                                <li class="active">Add personal branding</li>
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
