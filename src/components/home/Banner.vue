<template>
    <!-- Start Main Banner -->
    <div class="main-banner">
        <SectionOne id="home"/>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-lg-7">
                            <div class="hero-content">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <h1>Create a professional tutoring website in 11min</h1>
                                        <h4>Help students find you</h4>

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

                                <div class="row banner-action-btns">
                                    <div class="col-sm-6">
                                        <a href="/website-needs-assessment" class="btn btn-primary btn-assess">CHECK YOUR WEBSITE NEEDS</a>
                                    </div>
                                    <div class="col-sm-6">
                                        <a href="/register" class="btn btn-primary btn-register">CREATE FREE WEBSITE TODAY</a>
                                    </div>
                                </div>

                                <div class="banner-action-btns">
                                    <p>No payment or credit card is required</p>
                                </div>

                                <p class="bonus"><span>Bonus offer</span> when you create a FREE website in the next 48h</p>

                            </div>
                        </div>

                        <div class="col-lg-5">
                            <h6 class="intro-video">Does this sound like you?</h6>
                            <div class="row">
                                <video controls class="video col-12" id="video" preload="metadata" poster="../../assets/img/about1.jpg">
                                    <source src="../../assets/img/CmsRecording.mp4" type="video/mp4">
                                    Video how to create a tutoring website. Your browser does not support the video tag.
                                </video>
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
        name: 'Banner'
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
