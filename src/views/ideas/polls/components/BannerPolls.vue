<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-bottom: 0rem; padding-top: 0rem; margin-top: 7rem">
        <SectionOne id="home"/>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-xl-6 col-lg-7">
                            <div class="hero-content">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <h1>$$ voting for influencers</h1>

                                        <div class="tick-section">
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Engage audience with polls, where fans vote using their money</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Engage audience using polls, where fans vote with their money</p>
                                                    </div>
                                                </div>
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Set rules: every vote vs. only winning vote pays</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Set rules: every vote vs. only winning vote pays</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Get fast payouts</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Get fast payouts</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="row" style="padding: 2rem 0rem 0rem">
                                                    <img class="col-sm-3 col-2" src="../resources/tiktok.svg" />
                                                    <feather class="col-sm-2 col-2" type="twitch" style="margin: 0 5px; color: #6441a5; height: 100%; padding-top: 3px"></feather>
                                                    <feather class="col-sm-2 col-2" type="youtube" style="margin: 0 8px; color: #ff0000; height: 100%; padding-top: 3px"></feather>
                                                    <feather class="col-sm-2 col-2" type="instagram" style="margin: 0 8px; color: #C13584; height: 100%; padding-top: 3px"></feather>
                                                    <img class="col-sm-2 col-2" style="margin-top: 3px" src="../resources/obs.svg" />
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="row" style="padding: 2rem 0rem 0rem">
                                                        <img class="col-sm-3 col-2" src="../resources/tiktok.svg" />
                                                        <feather class="col-sm-2 col-2" type="twitch" style="margin: 0 5px; color: #6441a5; height: 100%; padding-top: 3px"></feather>
                                                        <feather class="col-sm-2 col-2" type="youtube" style="margin: 0 8px; color: #ff0000; height: 100%; padding-top: 3px"></feather>
                                                        <feather class="col-sm-2 col-2" type="instagram" style="margin: 0 8px; color: #C13584; height: 100%; padding-top: 3px"></feather>
                                                        <img class="col-sm-2 col-2" style="margin-top: 3px" src="../resources/obs.svg" />
                                                    </div>
                                                </div>
                                        </div>

                                        <div style="margin-top: 3rem">
                                            <div v-if="show_contact && contact_notice != ''" class="alert alert-warning">
                                                There was a problem submitting your message. {{ contact_notice }}
                                            </div>

                                            <form v-if="show_contact" id="sign" @submit.prevent="addEmail(email)" class="mt-4">
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <input type="email"  name="greencard-lead" id="greencard-lead" class="form-control"  v-model="email" required data-error="Please enter your email" placeholder="Enter your email address">
                                                        <p class="tick-input" style="font-size: 10px; color:#495057">Try polls for FREE</p>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div>
                                                            <button type="submit" class="btn btn-primary">Submit</button>
                                                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                                                            <div class="clearfix"></div>
                                                          </div>
                                                    </div>
                                                </div>
                                            </form>

                                            <div v-else>
                                                <h4>Email submitted successfully!</h4>
                                                <p>We will contact you within 48h</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-5 video" style="margin-top: 3rem">
                            <div class="row">
                                <div class="col-sm-10 col-12 offset-sm-1">
                                    <img src="../resources/poll-iphone.svg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="margin: 5rem 25px 4rem">
                        <div class="row">
                            <div class="col-lg-6 col-sm-8 col-10 offset-lg-3 offset-sm-2 offset-1">
                                <img src="../resources/123.svg" style="margin-bottom: 1rem"/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                                <div class="row">
                                    <div class="col-4" style="text-align: center; padding: 0">Ask a questions <br>to your fans</div>
                                    <div class="col-4" style="text-align: center; padding: 0 10px">Your fans <br>vote with money</div>
                                    <div class="col-4" style="text-align: center; padding: 0">Fans are happy <br>and you made money!</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row banner-action-btns" style="text-align: center">
                        <div class="col-xl-7 col-lg-9">
                            <div class="row justify-content-center">
                                <div class="col-sm-8 col-10">
                                    <a href="/polls-application" @click="$gtag.event('register')" class="btn btn-primary">Try polls for FREE</a>
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
        name: 'BannerPolls',
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
                        body: JSON.stringify({ email: this.email, idea: 'polls' })
                    };
                    fetch(url, requestOptions).then(this.show_contact = false)
                }
            },
            validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(String(email).toLowerCase());
            }
        }
    }

</script>
