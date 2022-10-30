<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-top: 5rem; margin-top: 2rem; padding-bottom: 3rem">

    <b-modal ref="modal-zoom" size="xl" hide-footer>
        <div class="row justify-content-center" style="z-index: 2;">
          <img class="col-lg-11 col-xl-5" style="margin: 0.5rem 1rem; border: 1px solid #CECECE;" src="../resources/Sample.png" alt="eb2 niw"/>
          <img class="col-lg-11 col-xl-5" style="margin: 0.5rem 1rem; border: 1px solid #CECECE;" src="../resources/SampleEditable.png" alt="eb2"/>
        </div>
    </b-modal>

        <SectionOne id="home"/>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-xl-6 col-lg-7">
                            <div class="hero-content">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <h1>Starter Kit for <span style="color: #5457c1">EB-2 NIW</span></h1>
                                        <h5 style="margin-top: 2rem">Self-petition green card templates</h5>
                                        <h3>for professionals</h3>

                                        <div class="tick-section">
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Successful 8-page long cover letter</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Successful 8-page long cover letter</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Examples of 3 reference letters</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Examples of 3 reference letters</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Tips to request and prepare reference letters</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Tips to request and prepare reference letters</p>
                                                    </div>
                                                </div>
                                            
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">User community<img src="../resources/discord-logo.svg" style="width: 120px; margin-left: 10px" /></p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">User community<img src="../resources/discord-logo.svg" style="width: 120px; margin-left: 10px" /></p>
                                                    </div>
                                                </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-5" style="margin-top: 2rem">
                            <div class="row single-works"  @click="$refs['modal-zoom'].show()" style="cursor: pointer">
                                <div class="glass-sample">SAMPLE</div>
                                <feather class="glass-zoom" type="zoom-in"></feather>

                                <div class="col-6" style="padding: 0px; opacity: 0.4">
                                  <img src="../resources/Sample.png" alt="eb2 niw">
                                </div>
                                <div class="col-6" style="padding: 0px; opacity: 0.4">
                                  <img src="../resources/SampleEditable.png" alt="eb2">
                                </div>
                            </div>
                        </div>
                    </div>
                    <PriceOffer></PriceOffer>

                </div>
            </div>
        </div>

        <div class="shape1"><img src="../resources/shape1.png" alt="eb2 niw green card"></div>
        <div class="shape3"><img src="../resources/shape3.svg" alt="eb2 visa"></div>
        <div class="shape4"><img src="../resources/shape4.svg" alt="eb-2 niw"></div>
        <div class="shape5" style="top: 55%"><img src="../resources/shape5.png" alt="eb-2 visa"></div>
        <div class="shape6 rotateme"><img src="../resources/shape4.svg" alt="eb-2 niw green card"></div>
        <div class="shape7"><img src="../resources/shape4.svg" alt="eb-2"></div>
    </div>
    <!-- End Main Banner -->
</template>



<script>

import PriceOffer from "./PriceOffer.vue";


    export default {
        name: 'BannerGreenCard',
        components: {
          PriceOffer
        }
    }

</script>
