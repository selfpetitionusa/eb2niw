<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-bottom: 2rem; margin-top: 2rem">
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
                                        <h5>Connect with your audience far more closely and monetize this connection</h5>

                                        <div class="tick-section">
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Engage followers & subscribers with polls</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Engage followers & subscribers with polls</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Let them vote with money</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Let them vote with money</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Stream on:</p>
                                                </div>
                                                <div class="row" style="padding: 2rem 3rem 0rem">
                                                    <feather class="col-sm-2 col-3" type="twitch" style="margin: 0 5px; color: #6441a5; height: 100%"></feather>
                                                    <feather class="col-sm-2 col-3" type="youtube" style="margin: 0 8px; color: #ff0000; height: 100%"></feather>
                                                    <img class="col-sm-2 col-3" src="../resources/obs.svg" />
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Stream on:</p>
                                                    </div>
                                                    <div class="row" style="padding: 2rem 3rem 0rem">
                                                        <feather class="col-sm-2 col-3" type="twitch" style="margin: 0 5px; color: #6441a5; height: 100%"></feather>
                                                        <feather class="col-sm-2 col-3" type="youtube" style="margin: 0 8px; color: #ff0000; height: 100%"></feather>
                                                        <img class="col-sm-2 col-3" src="../resources/obs.svg" />
                                                    </div>
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

                    <div class="row banner-action-btns">
                        <div class="col-xl-7 col-lg-9">
                            <div class="row justify-content-center">
                                <div class="col-sm-8 col-10">
                                    <a href="/polls-application" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">Let followers vote with money</a>
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
                fired: false
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
