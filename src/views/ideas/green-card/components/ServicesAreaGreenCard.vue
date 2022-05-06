<template>
    <!-- Start Design & Development Services -->
    <section class="services-area ptb-80" style="background: white; padding-bottom: 40px; margin-top: 1rem">
        <SectionThree id="solutions"/>
        <div class="container">
            <div class="section-title">
                <h2>How does self-petition work?</h2>
                <div class="bar"></div>

                <div class="paragraph">
                    <p style="font-weight: 600">Self-petition green card</p>
                    <p>An application where you self-petition, ie. apply by yourself, without employer sponsorship. There are two options available: the EB-1A and EB-2 National Interest Waiver (NIW) visas</p>
                </div>

                <div class="paragraph">
                    <p style="font-weight: 600">EB-1A</p>
                    <p>Requires to demonstrate that you have extraordinary ability in the sciences, arts, education, business, or athletics</p>
                </div>
                <div class="paragraph">
                    <p style="font-weight: 600">EB-2 NIW</p>
                    <p>Designated for people with advanced degrees (e.g. Masters, PhD, etc.) or those with exceptional ability in their fields</p>
                </div>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-lg-4 col-md-4 col-6">
                    <img src="../resources/Green-stamp-pure.svg">
                </div>

                <div class="col-lg-6 col-md-12 services-content">

                    <div class="d-block d-sm-none">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather> Employer sponsorship is NOT required
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Offer of employment is NOT required
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Faster process by filing I-140 and I-485 concurrently
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Early work authorization before green card is approved
                                </div>
                            </div>
                                <div class="col-xl-10 col-lg-12 col-md-8 col-sm-12 offset-xl-1 offset-lg-0 offset-md-2" style="padding: 0 8px">
                                <div class="box">
                                    <feather type="search"></feather> PERM Labor Certification process to show a shortage of U.S. workers in the labor market is NOT required
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="d-none d-sm-block">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather> Employer sponsorship is NOT required
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Offer of employment is NOT required
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Faster process by filing I-140 and I-485 concurrently
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Early work authorization before green card is approved
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-12 col-md-8 col-sm-12 offset-xl-1 offset-lg-0 offset-md-2" style="padding: 0 8px">
                                <div class="box">
                                    <feather type="search"></feather> PERM Labor Certification process to show a shortage of U.S. workers in the labor market is NOT required
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row service-action-btns" style="margin-top: 4rem; margin-bottom: 4rem">
                <div class="col-xl-7 col-lg-9">
                    <div class="row justify-content-center">
                        <div class="col-sm-8 col-10">
                            <a href="/green-card-evaluation" @click="$gtag.event('register')" class="btn btn-primary">Check eligibility</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="website-example funfacts-area">

                <img src="../resources/map.png" class="map-bg" style="left: -50%">
                <div class="shape2-services rotateme"><img src="../resources/shape2.svg"></div>
                <div class="shape3-services"><img src="../resources/shape3.svg" ></div>
                <div class="shape4-services"><img src="../resources/shape4.svg" ></div>
                <div class="shape5-services"><img src="../resources/shape5.png" ></div>
            </div>

        </div>
    </section>
    <!-- End Design & Development Services -->
</template>

<script>
export default {
    name: 'ServicesAreaGreenCard'
}
</script>
