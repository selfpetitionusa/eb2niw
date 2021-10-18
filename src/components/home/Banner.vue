<template>
    <!-- Start Main Banner -->
    <div class="main-banner">
        <SectionOne id="home"/>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-xl-6 col-lg-7">
                            <div class="hero-content">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <h1>Create a professional tutoring website in 11min</h1>

                                        <div class="d-block d-sm-none">
                                            <div class="tick-row">
                                                <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                <p class="tick-input">Looking to share information about your tutoring services, in a professional way?</p>
                                            </div>
                                        </div>

                                            <div class="d-none d-sm-block">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Looking to share information about your tutoring services, in a professional way?</p>
                                                </div>
                                            </div>

                                        <div class="d-block d-sm-none">
                                            <div class="tick-row">
                                                <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                <p class="tick-input">Tired of working for a school or platform, and want to own your earnings?</p>
                                            </div>
                                        </div>

                                            <div class="d-none d-sm-block">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Tired of working for a school or platform, and want to own your earnings?</p>
                                                </div>
                                            </div>

                                        <div class="d-block d-sm-none">
                                            <div class="tick-row">
                                                <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                <p class="tick-input">...or maybe your existing website is a disappointment?</p>
                                            </div>
                                        </div>

                                            <div class="d-none d-sm-block">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">...or maybe your existing website is a disappointment?</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-5 video">
                            <h6 class="intro-video">Does this sound like you?</h6>
                            <div class="row">

                                <div class="d-block d-lg-none">
                                    <vue-plyr ref="plyr">
                                        <video
                                                controls
                                                crossorigin
                                                playsinline>
                                            <source src="../../assets/img/Intro-video-Rena.mp4" type="video/mp4">
                                            Video how to create a tutoring website. Your browser does not support the video tag
                                        </video>
                                    </vue-plyr>
                                </div>

                                <div class="d-none d-lg-block">
                                    <vue-plyr ref="plyr">
                                        <video
                                                controls
                                                crossorigin
                                                playsinline>
                                            <source src="../../assets/img/Intro-video-Rena.mp4" type="video/mp4">
                                            Video how to create a tutoring website. Your browser does not support the video tag
                                        </video>
                                    </vue-plyr>
                                </div>
                            </div>
                        </div>


                        <div class="row banner-action-btns">
                            <div class="col-xl-7 col-lg-9">
                                <div class="row justify-content-center">
                                    <div class="col-sm-6 col-11">
                                        <a href="/website-needs-assessment" @click="$gtag.event('website-assessment')" class="btn btn-primary btn-assess btn-profile">FIND YOUR WEBSITE TYPE:<br>TAKE A QUIZ</a>
                                    </div>
                                    <div class="col-sm-6 col-11">
                                        <a href="/register" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">CREATE WEBSITE TODAY: <br>FREE TRIAL</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-11">
                                <p class="bonus1">No payment or credit card is required</p>
                                <p class="bonus2"><span>Bonus offer</span> when you create a FREE website in the next 48h</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="shape1"><img src="../../assets/img/shape1.png" alt="Tutomy best tutoring website"></div>
        <div class="shape2 rotateme"><img src="../../assets/img/shape2.svg" alt="Tutomy best tutoring website"></div>
        <div class="shape3"><img src="../../assets/img/shape3.svg" alt="Tutomy best tutoring website"></div>
        <div class="shape4"><img src="../../assets/img/shape4.svg" alt="Tutomy best tutoring website"></div>
        <div class="shape5"><img src="../../assets/img/shape5.png" alt="Tutomy best tutoring website"></div>
        <div class="shape6 rotateme"><img src="../../assets/img/shape4.svg" alt="Tutomy best tutoring website"></div>
        <div class="shape7"><img src="../../assets/img/shape4.svg" alt="Tutomy best tutoring website"></div>
        <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg" alt="Tutomy best tutoring website"></div>
    </div>
    <!-- End Main Banner -->
</template>



<script>

    export default {
        name: 'Banner',
        data() {
            return {
                fired: false
            }
        },
        mounted () {
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
