<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-top: 5rem; margin-top: 2rem; padding-bottom: 3rem">

    <b-modal ref="modal-zoom" size="xl" hide-footer>
        <div class="row justify-content-center">
          <img class="col-sm-5 col-11" style="margin: 0.5rem 1rem; border: 1px solid #CECECE;" src="../resources/Sample.png" />
          <img class="col-sm-5 col-11" style="margin: 0.5rem 1rem; border: 1px solid #CECECE;" src="../resources/SampleEditable.png" />
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
                                        <h1>Self-petition green card</h1>
                                        <h3>EB-2 National Interest Waiver</h3>
                                        <h5>for professionals</h5>

                                        <div class="tick-section">
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Actionable editable templates</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Actionable editable templates</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input" style="color: #5457c1; font-weight: 600">Successful 8-page long cover letter</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input" style="color: #5457c1; font-weight: 600">Successful 8-page long cover letter</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input" style="color: #5457c1; font-weight: 600">Examples of 3 reference letters</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input" style="color: #5457c1; font-weight: 600">Examples of 3 reference letters</p>
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
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-5" style="margin-top: 2rem">
                            <div class="row single-works"  @click="$refs['modal-zoom'].show()" style="cursor: pointer">
                                <feather class="glass-zoom" style="position: absolute; z-index: 2; width: 12rem; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;" type="zoom-in"></feather>
                                <div class="col-6" style="padding: 0px; opacity: 0.4">
                                  <img src="../resources/Sample.png">
                                </div>
                                <div class="col-6" style="padding: 0px; opacity: 0.4">
                                  <img src="../resources/SampleEditable.png">
                                </div>
                            </div>
                        </div>
                    </div>
                    <PriceOffer></PriceOffer>

                </div>
            </div>
        </div>

        <div class="shape1"><img src="../resources/shape1.png" ></div>
        <div class="shape3"><img src="../resources/shape3.svg" ></div>
        <div class="shape4"><img src="../resources/shape4.svg" ></div>
        <div class="shape5" style="top: 55%"><img src="../resources/shape5.png" ></div>
        <div class="shape6 rotateme"><img src="../resources/shape4.svg" ></div>
        <div class="shape7"><img src="../resources/shape4.svg" ></div>
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
