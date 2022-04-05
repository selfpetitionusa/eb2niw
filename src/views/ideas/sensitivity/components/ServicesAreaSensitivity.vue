<template>
    <!-- Start Design & Development Services -->
    <section class="services-area ptb-80" style="background: white; padding-bottom: 40px;">
        <SectionThree id="solutions"/>
        <div class="container">
            <div class="section-title">
                <h2>Who is it for?</h2>
                <div class="bar"></div>

                <div class="paragraph">
                    <p>Excel-based sensitivity tables are great...</p>
                    <p>...until you try to deploy them anywhere outside of the spreadsheet</p>
                </div>
                <div class="paragraph">
                    <p>Senstable is your solution!</p>
                </div>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-lg-4 col-md-6 col-8 offset-lg-2 offset-1" style="margin-left: 0">
                    <img src="../resources/undraw-sensitivity-table.svg">
                </div>

                <div class="col-lg-6 col-md-12 services-content">

                    <div class="d-block d-sm-none">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather> Real Estate
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Architects & Geotech
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Engineering
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Mechanics
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="aperture"></feather> Finance & banking
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="bookmark"></feather> Insurance
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="search"></feather> Sales
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="box"></feather> Business Planning
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="clipboard"></feather> Marketing
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="columns"></feather> Consulting
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="d-none d-sm-block">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather> Real Estate
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Architects & Geotech
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Engineering
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Mechanics
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="aperture"></feather> Finance & banking
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="bookmark"></feather> Insurance
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="search"></feather> Sales
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="box"></feather> Business Planning
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="clipboard"></feather> Marketing
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="columns"></feather> Consulting
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
                            <a href="/sensitivity-application" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">TRY SENSITIVITY TABLES</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="website-example funfacts-area">
                <div class="section-title">
                    <h2 style="margin-top: 7rem">How does it work?</h2>
                </div>


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
    name: 'ServicesAreaSensitivity'
}
</script>
