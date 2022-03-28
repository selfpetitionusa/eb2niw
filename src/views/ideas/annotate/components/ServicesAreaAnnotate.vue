<template>
    <!-- Start Design & Development Services -->
    <section class="services-area ptb-80" style="background: white; padding-bottom: 40px;">
        <SectionThree id="solutions"/>
        <div class="container">
            <div class="section-title">
                <h2>What is Blend Feedback?</h2>
                <div class="bar"></div>

                <div class="paragraph">
                    <p>Let anyone express what they think and feel about the website.</p>
                    <p>Aggregate feedback to resolve unclear or conflicting opinions.</p>
                </div>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-lg-3 col-md-12" style="margin: 0 7rem">
                    <img src="../resources/annotate-undraw.svg">
                </div>

                <div class="col-lg-6 col-md-12 services-content">

                    <div style="font-weight: 500; margin-bottom: 1rem">Who uses BLEND Feedback:</div>

                    <div class="d-block d-sm-none">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather> Marketing agencies
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Web development agencies
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> In-house teams
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Customer feedback
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="d-none d-sm-block">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather>  Marketing agencies
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Web development
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> In-house teams
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Customer feedback
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row service-action-btns">
                <div class="col-xl-7 col-lg-9">
                    <div class="row justify-content-center">
                        <div class="col-sm-8 col-10">
                            <a href="/annotate-application" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">GET STARTED FOR FREE</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="website-example funfacts-area">
                <h6>How does it work?</h6>


                <img src="../../../../assets/img/map.png" class="map-bg" style="left: -50%">
                <div class="shape2-services rotateme"><img src="../../../../assets/img/shape2.svg"></div>
                <div class="shape3-services"><img src="../../../../assets/img/shape3.svg" ></div>
                <div class="shape4-services"><img src="../../../../assets/img/shape4.svg" ></div>
                <div class="shape5-services"><img src="../../../../assets/img/shape5.png" ></div>
            </div>
        </div>
    </section>
    <!-- End Design & Development Services -->
</template>

<script>
export default {
    name: 'ServicesAreaAnnotate'
}
</script>
