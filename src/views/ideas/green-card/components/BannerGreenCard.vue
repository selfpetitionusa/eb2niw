<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-top: 5rem; margin-top: 2rem; padding-bottom: 3rem">

    <b-modal ref="modal-zoom" size="xl" hide-footer>
        <div class="row justify-content-center">
          <img class="col-sm-5 col-11" style="margin: 0.5rem 1rem; border: 1px solid #CECECE;" src="../resources/Sample.png" />
          <img class="col-sm-5 col-11" style="margin: 0.5rem 1rem; border: 1px solid #CECECE;" src="../resources/SampleEditable.png" />
        </div>
    </b-modal>

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

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-5" style="margin-top: 2rem">
                            <div class="row single-works"  @click="$refs['modal-zoom'].show()" style="cursor: pointer">
                                <feather class="feather-zoom" style="position: absolute; z-index: 2; width: 12rem; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;" type="zoom-in"></feather>
                                <div class="col-6" style="padding: 0px; opacity: 0.4">
                                  <img src="../resources/Sample.png">
                                </div>
                                <div class="col-6" style="padding: 0px; opacity: 0.4">
                                  <img src="../resources/SampleEditable.png">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-table col-md-6 col-11 offset-md-3" style="margin-top: 6rem; padding-top: 1.5rem">
                        <div class="price" style="margin-bottom: 0;">
                            <span style="color: #0b5345;"><sup>$</sup>89.99</span>
                        </div>
                        <div class="price" style="margin-bottom: 0.5rem;">
                            <sup style="color: #b30000; font-size: 15px;">$</sup><span style="color: #b30000; font-size: 20px; text-decoration: line-through">149.99</span>
                        </div>

                        <div class="row banner-action-btns" style="text-align: center; margin-top: 1rem">
                            <div class="col-xl-7 col-lg-9">
                                <a href="https://checkout.stripe.com/pay/cs_live_a1qNyGjaPCfAQFuj7MBooXupRt0n3gtqfiNtsv7K0zAGkoNEee0B1svkIn#fidkdWxOYHwnPyd1blppbHNgWjA0T290ckNBSGlgSWtqdWJTazBTbnJRPU1kdmBgRlBXVEsyYXQxdURCZlJ3XGlAZnFDdm00cmJgSzJXN21SZjxnT3ZUfGZqaHxmPHVCVXRNVFF1cDc1TmdLNTVgQ0I2QjVATCcpJ3VpbGtuQH11anZgYUxhJz8nMnZMMGtQNXV1NnJ1ZnNgY1xfJ3gl" @click="$gtag.event('register')" class="btn btn-primary">BUY EB-2 NIW STARTER KIT</a>
                            </div>
                        </div>
                        <div style="margin-top: 1rem; font-size: 12px">Valid for:</div>
                        <div style="font-size: 18px">
                            <span style="font-weight: 600">{{days}}</span> day<span v-if="days > 1">s</span>
                            <span style="font-weight: 600"> {{hours}}</span>h :
                            <span style="font-weight: 600">{{minutes}}</span>m :
                            <span style="font-weight: 600">{{seconds}}</span>s
                        </div>
                        <p style="margin-top: 1rem; line-height: 18px; font-size: 12px">You will receive an email with documents. Please check your spam folder. <br>Templates are provided in electronic form only (pdf and doc files).</p>
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
    </div>
    <!-- End Main Banner -->
</template>



<script>

    export default {
        name: 'BannerGreenCard',
        data() {
            return {
                days: this.days,
                hours: this.hours,
                minutes: this.minutes,
                seconds: this.seconds
            }
        },
        methods: {
            test() {
                // Set the date we're counting down to
                var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

                // Update the count down every 1 second
                var x = setInterval(function() {

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

                // If the count down is finished, write some text
                if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
                }
                }, 1000);
            }
        }
    }

</script>
