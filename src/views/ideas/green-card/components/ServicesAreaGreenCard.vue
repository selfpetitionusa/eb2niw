<template>
    <!-- Start Design & Development Services -->
    <section class="services-area ptb-80" style="background: white; padding-bottom: 40px; padding-top: 2rem; margin-top: 0rem">
        
        <div class="col-12" style="margin-bottom: 7rem">
            <div class="row">
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/Stem.png" alt="i-140 for STEM">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/Entrepreneurs.png" alt="i-485 for entrepreneurs">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/Finance.png" alt="i-140 for finance">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/Sciences.png" alt="i-485 for sciences">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/Business.png" alt="i-140 for business professionals">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/Other.png" alt="i-485 for business professionals">
                </div>
            </div>
        </div>
        
        <SectionThree id="solutions"/>
        <div class="container">

            <div class="section-title">
                <h2>What EB2-NIW Starter Kit includes</h2>
                <div class="bar"></div>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                    <img src="../resources/Green-stamp-pure.svg" alt="permanent resident self petition">
                </div>

                <div class="col-xl-6 col-lg-7 col-md-12 services-content">

                    <div class="d-block d-sm-none">
                        <div class="row">
                            <div class="col-12">
                                <div class="box">
                                    <feather type="layout"></feather> A successful application which led to EB-2 NIW green card by a business professional (one cover letter of 8 pages)
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Actual reference letters (three letters, two pages each)
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="message-circle"></feather> Instructions to arrange for high-quality reference letters and write successful applications
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="code"></feather> Exclusive <img src="../resources/discord-logo.svg" style="width: 90px; margin-left: 5px; margin-right: 5px"/> for users working on their EB-2 NIW
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="d-none d-sm-block">
                        <div class="row">
                            <div class="col-12">
                                <div class="box">
                                    <feather type="layout"></feather> A successful application which led to EB-2 NIW green card by a business professional (one cover letter of 8 pages)
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Actual reference letters (three letters, two pages each)
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="message-circle"></feather> Instructions to arrange for high-quality reference letters and write successful applications
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="code"></feather> Exclusive <img src="../resources/discord-logo.svg" style="width: 90px; margin-left: 5px; margin-right: 5px"/> for users working on their EB-2 NIW
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-title" style="margin-top: 8rem">
                <div class="bar"></div>
                <div class="paragraph">
                    <p style="font-weight: 600">Filing without a lawyer?</p>
                    <p>This is your #1 resource</p>
                </div>
                <div class="paragraph">
                    <p style="font-weight: 600">Filing with a lawyer?</p>
                    <p>You still need to prepare reference letters and possibly cover letter. Save money on legal fees by using the templates</p>
                </div>
            </div>

            <PriceOffer></PriceOffer>
            <CarouselGreenCard></CarouselGreenCard>

            <div class="shape3-services"><img src="../resources/shape3.svg" alt="i-140"></div>
            <div class="shape4-services"><img src="../resources/shape4.svg" alt="i-485"></div>

            <div class="website-example funfacts-area">
                <img src="../resources/map.png" class="map-bg" style="left: -20%" alt="i 140">
            </div>

        </div>
    </section>
    <!-- End Design & Development Services -->
</template>

<script>

import PriceOffer from "./PriceOffer.vue";
import CarouselGreenCard from "./CarouselGreenCard.vue";

    export default {
        name: 'ServicesAreaGreenCard',
        components: {
          PriceOffer,
          CarouselGreenCard,
        }
    }
</script>
