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
                                    <div class="col-lg-9">
                                        <h1>Website for your tutoring business</h1>
                                        <h4>Set it up in 12min</h4>
                                        <p>Thinking of building a tutoring website, but tools you know are hard to use or pricey?</p>

                                        <div class="d-block d-sm-none">
                                            <p>...we make it as easy as creating a Facebook or LinkedIn profile</p>
                                        </div>
                                        <div class="d-none d-sm-block"> <p>...we make it as easy as creating a Facebook or LinkedIn profile</p></div>


                                        <p>Sign up for FREE</p>
                                    </div>
                                </div>
                                <form id="sign" @submit.prevent="addEmail(email)" class="mt-4">
                                    <div class="row">

                                        <div class="col-lg-8">
                                            <input type="email"  name="name" id="name" class="form-control"  v-model="email" placeholder="Enter your email address">
                                            <p style="font-size: 10px; color:#495057">No payment or credit card is required</p>
                                            <div class="mt-4">
                                                <p class="m-0">{{ message }}</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div>
                                                <button type="submit" class="btn btn-primary">Submit</button>


                                                <b-modal ref="modal-1"  style="border-radius: 30px" :return-focus="this.$parent" hide-footer hide-header >
                                                    <div class="mt-2">

                                                        <p style="color: #0e314c; font-size: medium;font-weight: bold">How about VIP access for free?</p>
                                                        <div class="d-none d-sm-block">
                                                            <div class="row">
                                                                <div class="col-8">
                                                                  <p style="color: #6084a4; font-size: 13px">We are <span style="font-weight: bold; text-decoration: underline;">looking for 20 tutors</span> to test our new website dashboard.</p>
                                                                  <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Get FREE website for 3 months.</p>
                                                                  <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Contact us for details.</p>
                                                                  <a href="mailto:ceo@tutomy.com?subject=Testing website dashboard" class="btn btn-primary mt-5 d-block mx-auto" style="text-transform:none;">Claim VIP Access</a>
                                                                </div>
                                                                <div class="col-4">
                                                                    <img src="../../assets/img/survey.svg" alt="video-pic">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-block d-sm-none">
                                                          <p style="color: #6084a4; font-size: 13px">We are <span style="font-weight: bold; text-decoration: underline;">looking for 20 tutors</span> to test our new website dashboard.</p>
                                                          <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Get FREE website for 3 months.</p>
                                                          <p style="color: #6084a4; font-size: 13px; margin-bottom: 0px;">Contact us for details.</p>
                                                            <div class="row">
                                                                <div class="col-8 align-self-end">
                                                                      <a href="mailto:ceo@tutomy.com?subject=Testing website dashboard" class="btn btn-primary mt-5 d-block mx-auto" style="text-transform:none;">Claim VIP Access</a>
                                                                </div>
                                                                <div class="col-4">
                                                                    <img src="../../assets/img/survey.svg" alt="video-pic">
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>

                                                </b-modal>
                                            </div>


                                        </div>

                                    </div>
                                </form>


                            </div>
                        </div>

                        <div class="col-lg-6">
                            <img src="../../assets/img/video.svg" alt="video-pic">
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
    name: 'Banner',
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
                     this.$store.commit('setSeen');
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
</script>
