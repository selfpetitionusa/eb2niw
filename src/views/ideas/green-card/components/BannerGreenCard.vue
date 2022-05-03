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
                                        <h1>Self-petition green card for professionals</h1>
                                        <h5>Take matters into your own hands!</h5>

                                        <div class="tick-section">
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">No employer sponsorship</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">No employer sponsorship</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Lawyer who specializes in your profession</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Lawyer who specializes in your profession</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">EAD (work permit) within 3 months of application</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">EAD (work permit) within 3 months of application</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-5">
                            <h6 class="intro-video">Who is eligible to self-petition?</h6>

                            <div class="row">
                                <div class="col-4" style="padding: 0px 5px">
                                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                                        <img src="../resources/Stem.svg">
                                    </a>
                                </div>
                                <div class="col-4" style="padding: 0px 5px">
                                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                                        <img src="../resources/Entrepreneurs.svg">
                                    </a>
                                </div>
                                <div class="col-4" style="padding: 0px 5px">
                                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                                        <img src="../resources/Finance.svg">
                                    </a>
                                </div>
                            </div>

                            <div class="row" style="margin-top: 1.5rem">
                                <div class="col-4" style="padding: 0px 5px">
                                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                                        <img src="../resources/Sciences.svg">
                                    </a>
                                </div>
                                <div class="col-4" style="padding: 0px 5px">
                                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                                        <img src="../resources/Business.svg">
                                    </a>
                                </div>
                                <div class="col-4" style="padding: 0px 5px">
                                    <a href="/green-card-evaluation" @click="$gtag.event('register')">
                                        <img src="../resources/Other.svg">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="margin: 6rem 25px 3rem">
                        <div class="row">
                            <div class="col-lg-6 col-sm-8 col-10 offset-lg-3 offset-sm-2 offset-1">
                                <img src="../resources/123.svg" style="margin-bottom: 1rem"/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                                <div class="row">
                                    <div class="col-4" style="text-align: center; padding: 0">Upload your resume <br>for free assessment</div>
                                    <div class="col-4" style="text-align: center; padding: 0 10px">Schedule a live <br>consultation with a lawyer</div>
                                    <div class="col-4" style="text-align: center; padding: 0">Submit application <br>with a lawyer</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row banner-action-btns" style="margin-top: 3rem">
                        <div class="col-xl-7 col-lg-9">
                            <div class="row justify-content-center">
                                <div class="col-sm-8 col-10">
                                    <a href="/green-card-evaluation" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">Check your eligibility</a>
                                </div>
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
                fired: false
            }
        }
    }


/* JS FOR SIGNUP
    data() {
        return {
            email: '',
            message: ''
        }
    },
    methods: {
         addEmail(email) {
            if (!email) return;
            var noticeMessage = "🎉 Your account has been saved  🎉";
             const url = `/api/lead`;
             const requestOptions = {
                 method: "POST",
                 headers: {"Content-Type" : "application/json"},
                 body: JSON.stringify({ email: email })
             };
             fetch(url, requestOptions).then(async response => {
                 if (response.ok) {
                     this.$refs['modal-1'].show();
                     this.$store.commit('popup/setSeen');
                 } else {
                     noticeMessage = "This email address is already registered";
                 }
                 this.message = noticeMessage;
                 this.email = '';
             });
        },
        randomPassword(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }
}
*/

</script>
