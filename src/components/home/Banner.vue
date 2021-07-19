<template>
    <!-- Start Main Banner -->
    <div class="main-banner">
        <SectionOne id="home"/>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-lg-6">
                            <div class="hero-content">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <h1>Create a professional tutoring website in 11min</h1>
                                        <h4 style="margin-bottom: 1.5rem">Let students find you on the Internet</h4>

                                        <div class="d-block d-sm-none">
                                            <div class="tick-row">
                                                <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                <p class="tick-input">Looking to display information about your tutoring business professionally?</p>
                                            </div>
                                        </div>

                                            <div class="d-none d-sm-block">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Looking to display information about your tutoring business professionally?</p>
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
                                                    <p class="tick-input">...or maybe the existing website disappoints you?</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">...or maybe the existing website disappoints you?</p>
                                                    </div>
                                                </div>

                                        <p><span class="bonus">Check bonus</span> - create a FREE tutoring website in the next 48h</p>
                                    </div>
                                </div>

                                <div class="row banner-action-btns">
                                    <div class="col-6">
                                        <a href="/register" class="btn btn-primary btn-assess">ASSESS YOUR WEBSITE NEEDS</a>
                                    </div>
                                    <div class="col-6">
                                        <a href="/register" class="btn btn-primary btn-register">CREATE A WEBSITE TODAY - FREE</a>
                                    </div>
                                </div>

                                <div class="banner-action-btns">
                                    <p>No payment or credit card is required</p>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-6">
                            <h6 class="intro-video">Does this sound like you?</h6>
                            <div class="row">
                                <video controls class="video col-12" id="video" preload="metadata" poster="../../assets/img/about1.jpg">
                                    <source src="../../assets/img/CmsRecording.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="shape1"><img src="../../assets/img/shape1.png" alt="shape"></div>
        <div class="shape2 rotateme"><img src="../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape3"><img src="../../assets/img/shape3.svg" alt="shape"></div>
        <div class="shape4"><img src="../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape5"><img src="../../assets/img/shape5.png" alt="shape"></div>
        <div class="shape6 rotateme"><img src="../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape7"><img src="../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg" alt="shape"></div>
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
