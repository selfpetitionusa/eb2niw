<template>
    <!-- Start Design & Development Services -->
    <section class="services-area ptb-80" style="background: white; padding-bottom: 40px;">
        <SectionThree id="solutions"/>
        <div class="container">
            <div class="section-title">
                <h2>Why Sanctions Hub?</h2>
                <div class="bar"></div>

                <div class="paragraph">
                    <p>Existing business environment makes sanctions compliance a must</p>
                </div>
                <div class="paragraph">
                    <p>Get high-quality data, with a simple and reliable technology</p>
                </div>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-lg-4 col-md-8">
                    <img src="../resources/globe_undraw.svg"/>
                </div>

                <div class="col-lg-6 col-md-12 services-content">

                    <div class="d-block d-sm-none">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather> Data from 50 global and regional Sanctions Lists
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Sanction Lists updates every 15 minutes
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Simple screening API and integrations
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Start-Up and small business friendly
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="d-none d-sm-block">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather> Data from 50 global and regional Sanctions Lists
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Sanction Lists updates every 15 minutes
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Simple screening API and integrations
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Start-Up and small business friendly
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
                            <a href="/sanctions-application" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">Try our API for free</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="website-example funfacts-area">
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
    name: 'ServicesAreaSanctions'
}
</script>
