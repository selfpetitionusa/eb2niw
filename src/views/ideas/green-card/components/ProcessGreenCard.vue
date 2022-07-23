<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6; padding-top: 7rem">
        <SectionFour id="process"/>
        <div class="container">
            <div class="section-title" style="margin-bottom: 0rem">
                <h2>About EB-2 NIW Process</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p style="font-weight: 600">Self-petition EB-2 NIW</p>
                    <p>You can self-petition without employer sponsorship. It is fast since NIW waives lengthy Labor Certification process.</p>
                </div>

                <div class="paragraph">
                    <p style="font-weight: 600">NOT only for scientists and PhDs</p>
                    <p>Build your own successful case with our templates: actual, successful application with 3 reference letters which led to EB-2 NIW green card by a business professional.</p>
                </div>

                <div class="paragraph" style="margin-top: 4rem">
                    <a href="/process" class="process-hyperlink">Learn more</a>
                </div>
            </div>
        </div>

        <div class="row service-action-btns" style="margin-top: 0rem; margin-bottom: 4rem">
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
                        <img src="../resources/Stem.png" alt="i-140 for STEM">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Entrepreneurs.png" alt="i-485 for entrepreneurs">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Finance.png" alt="i-140 for finance">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Sciences.png" alt="i-485 for sciences">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Business.png" alt="i-140 for business professionals">
                    </a>
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                        <img src="../resources/Other.png" alt="i-485 for business professionals">
                    </a>
                </div>
            </div>
        </div>


        <div class="shape7"><img src="../resources/shape4.svg" alt="i-485 for engineers"></div>
    </section>
    <!-- End Pricing Area -->
</template>

<script>
export default {
    name: 'PricingGreenCard'
}
</script>
