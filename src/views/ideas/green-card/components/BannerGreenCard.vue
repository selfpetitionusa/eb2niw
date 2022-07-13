<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-top: 5rem; margin-top: 2rem; padding-bottom: 3rem">

    <b-modal ref="modal-zoom" :modal-class="modalZoom" size="lg" hide-footer>
        <div class="row">
          <img class="col-6" src="../resources/Sample.png" />
          <img class="col-6" src="../resources/SampleEditable.png" />
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
                            <div class="row"  @click="$refs['modal-zoom'].show()" style="cursor: pointer">
                                <div class="col-6 sample" style="padding: 0px 5px; height: 20rem">
                                </div>
                                <div class="col-6 sample-edit" style="padding: 0px 5px; height: 20rem">
                                    <feather style="color: #5457c1; width: 16rem; margin-left: -10rem; margin-top: 2rem" type="zoom-in"></feather>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row banner-action-btns" style="margin-top: 3rem; text-align: center;">
                        <div class="col-xl-7 col-lg-9">
                            <div class="row justify-content-center">
                                <div class="col-sm-8 col-10">
                                    <a href="/green-card-evaluation" @click="$gtag.event('register')" class="btn btn-primary">Find a lawyer</a>
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

                </div>
            </div>
        </div>

        <div class="shape1"><img src="../resources/shape1.png" ></div>
        <div class="shape3"><img src="../resources/shape3.svg" ></div>
        <div class="shape4"><img src="../resources/shape4.svg" ></div>
        <div class="shape5"><img src="../resources/shape5.png" ></div>
        <div class="shape6 rotateme"><img src="../resources/shape4.svg" ></div>
        <div class="shape7"><img src="../resources/shape4.svg" ></div>
        <div class="shape8 rotateme"><img src="../resources/shape2.svg" ></div>
    </div>
    <!-- End Main Banner -->
</template>



<script>

    export default {
        name: 'BannerGreenCard',
        data() {
            return {
                modalZoom: ['modal-zoom'],
            }
        }
    }

</script>
