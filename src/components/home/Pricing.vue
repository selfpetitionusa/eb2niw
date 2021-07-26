<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80 bg-f9f6f6" style="background: linear-gradient(to left bottom, #fffcff, #fbfaff, #effbff);">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p><strong>100% Money-Back Guarantee</strong></p>
                    <p>Cancel monthly subscription anytime, no questions asked.</p>
                </div>
                <div class="paragraph">
                    <p>We want happy customers who benefit from the opportunities created by having a professional tutoring website. If you are dissatisfied after buying our package, e-mail us within 7 days from your purchase and we will refund your money.</p>
                </div>
            </div>

            <p><a href="https://www.tutomy.com/register" style="display: flex; justify-content: center; font-size: 1rem; font-weight: 600; text-decoration: underline; margin-bottom: 3rem">FREE TRIAL</a></p>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>Basic Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>9<span>/Month</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Intuitive tutoring website template</li>
                                <li class="active">FREE subdomain on our server: <span style="color: #a7a7a7">tutomy.com</span></li>
                                <li class="active">Search Engine Optimization on autopilot</li>
                                <li class="active">24/7 support from our experts</li>
                            </ul>
                            <ul style="margin-top: 2rem; padding: 7px 0px; background: linear-gradient(to left bottom, #fffcff, #fbfaff, #effbff, #e0fdff, #d5fefd)">
                                <li class="active" style="font-weight: 700">** BONUS OFFER: create a website in the next 48h **</li>
                                <li class="active">Your website review by an expert</li>
                                <li class="active">1-on-1 advice on how to promote website</li>
                                <li class="active">Progress check-up</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <button type="submit" class="btn btn-primary">Select Plan</button>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Premium Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>9<span>/Month</span> + Domain cost</span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">Intuitive tutoring website template</li>
                                <li class="active">Your own domain: <span style="color: #a7a7a7">yourname.com</span></li>
                                <li class="active">Search Engine Optimization on autopilot</li>
                                <li class="active">24/7 support from our experts</li>
                            </ul>
                            <ul style="margin-top: 2rem; padding: 7px 0px; background: linear-gradient(to right bottom, #fffcff, #fbfaff, #effbff, #e0fdff, #d5fefd)">
                                <li class="active" style="font-weight: 700">** BONUS OFFER: create a website in the next 48h **</li>
                                <li class="active">Your website review by an expert</li>
                                <li class="active">1-on-1 advice on how to promote website</li>
                                <li class="active">Progress check-up</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <button type="submit" v-b-modal.modal-2  @click="logEvent('domain')" class="btn btn-primary">Select Plan</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" style="display: flex; justify-content: center; margin-top: 2rem">
                <div class="col-lg-7 col-md-7 col-sm-7">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>School plan</h3>
                        </div>

                        <div class="price">
                            <span><sup>$</sup>  ?  <span>/Month</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul style="padding: 5px">
                                <li class="active">Do you hire tutors and need website profiles for each of them?</li>
                                <li class="active">Are you looking to create a website for your school?</li>
                            </ul>
                        </div>

                        <div class="pricing-footer row" style="display: flex; justify-content: center">
                            <div class="col-6"><a href="mailto:ceo@tutomy.com?subject=School Plan" class="btn btn-primary d-block mx-auto" style="text-transform:none">CONTACT US FOR DETAILS</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-modal id="modal-2"  style="border-radius: 30px" :return-focus="this.$parent" hide-footer title="Join our waitlit" >
            <div class="mt-3" style="margin-bottom: 1rem">
                <div style="color: #0e314c">Leave your e-mail and get notified to set up own domain</div>

                <form id="sign" @submit.prevent="addEmail(email)" class="mt-2">
                    <div class="row">
                        <div class="col-12">
                            <input type="email"  name="name" id="name" class="form-control"  v-model="email" placeholder="Enter your email address">
                            <div class="mt-2">
                                <p class="m-0">{{ message }}</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <button style="width: 66%; margin: 0" type="submit" class="btn btn-primary btn-assess">Join waitlist</button>
                        </div>
                    </div>
                </form>

                <div style="color: #0e314c; margin-top: 2.5rem">In the meantime:</div>
                <ul class="bonus-offer">
                  <li style="line-height: 2"><span style="font-weight: 700">Create a website for FREE</span> and enjoy it on Tutomy domain</li>
                  <li style="line-height: 2">Later we will transfer this website to your own domain</li>
                </ul>

                <div class="row">
                    <div class="col-12">
                        <button style="width: 66%" type="submit" class="btn btn-primary"><a href="https://www.tutomy.com/register" style="color: white">CREATE A FREE WEBSITE TODAY</a></button>
                    </div>
                </div>
            </div>

        </b-modal>

        <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg" alt="Price for private tutor website template"></div>
        <div class="shape2 rotateme"><img src="../../assets/img/shape2.svg" alt="Price for private tutor website template"></div>
        <div class="shape7"><img src="../../assets/img/shape4.svg" alt="Price for private tutor website template"></div>
        <div class="shape4"><img src="../../assets/img/shape4.svg" alt="Price for private tutor website template"></div>
    </section>
    <!-- End Pricing Area -->
</template>

<script>



export default {
    name: 'Pricing',
    data() {
        return {
            email: '',
            message: ''
        }
    },
    methods: {
        logEvent() {
            this.$store.commit('popup/setSeen');
        },
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
       }
   }
}
</script>
