<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="process"/>
        <div class="container">
            <div class="section-title">
                <h2>About the Process</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p style="font-weight: 600">Self-petition EB-2 NIW</p>
                    <p>You can self-petition without employer sponsorship. It is fast since NIW waives lengthy Labor Certification process.</p>
                </div>

                <div class="paragraph">
                    <p style="font-weight: 600">NOT only for scientists and PhDs</p>
                    <p>Build your own successful case with our templates: actual, successful application with 3 reference letters which led to EB-2 NIW green card by a business professional.</p>
                    <p style="margin-top: 10px;">See clearly how to satisfy National Interest Waiver requirements to get your green card approved</p>
                </div>
            </div>
        </div>

        <div class="row service-action-btns" style="margin-top: 4rem; margin-bottom: 4rem">
            <div class="col-xl-7 col-lg-9">
                <div class="row justify-content-center">
                    <div class="col-sm-8 col-10">
                        <a href="/green-card-evaluation" @click="$gtag.event('register')" class="btn btn-primary btn-assess">Check EB-2 NIW eligibility</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12" style="margin-top: 7rem">
            <div class="row">
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Stem.png">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Entrepreneurs.png">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Finance.png">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Sciences.png">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Business.png">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Other.png">
                    </a>
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
