<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-top: 5rem; margin-top: 2rem; padding-bottom: 3rem">
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

<!-- Comment                            <div style="margin-top: 3rem">
                                            <div v-if="show_contact && contact_notice != ''" class="alert alert-warning">
                                                There was a problem submitting your message. {{ contact_notice }}
                                            </div>

                                            <form v-if="show_contact" id="sign" @submit.prevent="addEmail(email)" class="mt-4">
                                                <div class="row">
                                                    <div class="col-sm-7">
                                                        <input type="email"  name="greencard-lead" id="greencard-lead" class="form-control"  v-model="email" required data-error="Please enter your email" placeholder="Enter your email address">
                                                        <p class="tick-input" style="font-size: 10px; color:#495057">Discuss your case with us</p>
                                                    </div>
                                                    <div class="col-sm-5">
                                                        <div>
                                                            <button type="submit" @click="goToEligibility()" class="btn btn-primary">FIND A LAWYER</button>
                                                          </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>        -->

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-5" style="margin-top: 2rem">
                            <div class="row">
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


<!-- Comment

<script>

    export default {
        name: 'BannerGreenCard',
        data() {
            return {
                fired: false,
                email: '',
                show_contact: true,
                contact_notice: ''
            }
        },
        mounted () {
            this.$refs.plyr.player.volume = 0.5;
            this.$refs.plyr.player.on('playing', () => {
                if(!this.fired) {
                    this.$gtag.event('video')
                }
                this.fired = true;

            })
        },
        methods: {
            async addEmail() {
                if(!this.validateEmail(this.email)) {
                    this.contact_notice = "The email address is badly formatted.";
                } else {
                    const url = `/api/contact/apply`;
                    const requestOptions = {
                        method: "POST",
                        headers: {"Content-Type" : "application/json"},
                        body: JSON.stringify({ email: this.email, idea: 'greencard' })
                    };
                    fetch(url, requestOptions).then(this.show_contact = false)
                }
            },
            validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(String(email).toLowerCase());
            },
            goToEligibility() {
                if(this.validateEmail(this.email)) {
                    this.$router.push({ name: 'eligibility', params: { email: this.email } });
                }
            }
        }
    }

</script>  -->
