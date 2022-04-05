<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-bottom: 3rem">
        <SectionOne id="home"/>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-xl-7 col-lg-7">
                            <div class="hero-content">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <h1>Sanctions screening for your business compliance</h1>
                                        <h5>API-first solution, fast and easy to integrate</h5>

                                        <div class="tick-section">
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">15+ sanctions lists</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">15+ sanctions lists</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">RESTful API</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">RESTful API</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Integrate with your CRM</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Integrate with your CRM</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-4 col-lg-4 col-md-7 video" style="margin-top: 2rem">
                            <div class="row" style="border: solid 1px #E5E5E5; border-radius: 5%; background-color: white; box-shadow: 2px 2px 4px #E5E5E5;">
                                <div class="col-sm-2 col-3" style="margin-left: 0">
                                    <ul style="list-style-type: none; padding-top: 1.5rem">
                                        <li style="font-size: 3rem">🇺🇸</li>
                                        <li style="font-size: 3rem">🇪🇺</li>
                                        <li style="font-size: 3rem">🇨🇦</li>
                                        <li style="font-size: 3rem">🇬🇧</li>
                                        <li style="font-size: 3rem">🇺🇳</li>
                                    </ul>
                                </div>

                                <div class="col-sm-10 col-9">
                                    <ul style="list-style-type: none; padding-top: 1.5rem">
                                        <li style="font-size: 1.6rem; color: #0e314c; padding-top: 1rem; padding-bottom: 1.1rem">OFAC</li>
                                        <li style="font-size: 1.6rem; color: #0e314c; padding-top: 1rem; padding-bottom: 1.1rem">CFSP</li>
                                        <li style="font-size: 1.6rem; color: #0e314c; padding-top: 1rem; padding-bottom: 1.1rem">CASL</li>
                                        <li style="font-size: 1.6rem; color: #0e314c; padding-top: 1rem; padding-bottom: 1.1rem">OFSI</li>
                                        <li style="font-size: 1.6rem; color: #0e314c; padding-top: 1rem; padding-bottom: 1.1rem">SC</li>
                                        <li style="font-size: 1.1rem; color: #0e314c; padding-top: 1rem; padding-bottom: 1.1rem">…and many more</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row banner-action-btns">
                        <div class="col-xl-7 col-lg-9">
                            <div class="row justify-content-center">
                                <div class="col-sm-8 col-10">
                                    <a href="/sanctions-application" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">Try our API for free</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-11">
                            <p class="bonus1">No payment or credit card is required</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="shape1"><img src="../../../../assets/img/shape1.png" ></div>
        <div class="shape3"><img src="../../../../assets/img/shape3.svg" ></div>
        <div class="shape4"><img src="../../../../assets/img/shape4.svg" ></div>
        <div class="shape5"><img src="../../../../assets/img/shape5.png" ></div>
        <div class="shape6 rotateme"><img src="../../../../assets/img/shape4.svg" ></div>
        <div class="shape7"><img src="../../../../assets/img/shape4.svg" ></div>
        <div class="shape8 rotateme"><img src="../../../../assets/img/shape2.svg" ></div>
    </div>
    <!-- End Main Banner -->
</template>



<script>

    export default {
        name: 'BannerSanctions',
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
