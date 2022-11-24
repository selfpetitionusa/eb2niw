<template>
    <!-- Start Design & Development Services -->
    <section class="services-area ptb-80" style="background: white; padding-bottom: 40px;">
        <SectionThree id="solutions"/>
        <div class="container">
            <div class="section-title">
                <h2>What is PicMeme?</h2>
                <div class="bar"></div>

                <div class="paragraph">
                    <p>Personalize meme with your friends faces.</p>
                    <p>It takes one funny meme to brighten your interactions <br>with colleagues at work or friends after hours.</p>
                </div>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-lg-5 col-md-12">
                    <img src="../resources/aggregate.png">
                </div>

                <div class="col-lg-7 col-md-12 services-content" style="padding-right: 0">

                    <h6 style="margin-top: 1rem">Who uses PicMeme:</h6>

                    <div class="d-block d-sm-none">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="code"></feather> Agencies for meme marketing
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="layout"></feather> Product managers to motivate team
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Social media influencers for posts
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box">
                                    <feather type="message-circle"></feather> Anybody to put a smile on your face
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="d-none d-sm-block">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box" style="padding-right: 5px; padding-left: 5px">
                                    <feather type="code"></feather>  Agencies for meme marketing
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box" style="padding-right: 5px; padding-left: 5px">
                                    <feather type="layout"></feather> Product managers to motivate team
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box" style="padding-right: 5px; padding-left: 5px">
                                    <feather type="pen-tool"></feather> Social media influencers for posts
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="box" style="padding-right: 5px; padding-left: 5px">
                                    <feather type="message-circle"></feather> Anybody to put a smile on your face
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row service-action-btns" style="margin-top: 5rem">
                <div class="col-xl-7 col-lg-9">
                    <div class="row justify-content-center">
                        <div class="col-sm-8 col-10">
                            <a href="/register" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">CREATE A MEME</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="website-example funfacts-area">

                <img src="../../../assets/img/map.png" class="map-bg" style="left: -50%">
                <div class="shape2-services rotateme"><img src="../../../assets/img/shape2.svg"></div>
                <div class="shape3-services"><img src="../../../assets/img/shape3.svg" ></div>
                <div class="shape4-services"><img src="../../../assets/img/shape4.svg" ></div>
                <div class="shape5-services"><img src="../../../assets/img/shape5.png" ></div>
            </div>
        </div>
    </section>
    <!-- End Design & Development Services -->
</template>

<script>
export default {
    name: 'ServicesMemes'
}
</script>
