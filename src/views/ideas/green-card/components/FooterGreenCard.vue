<template>
    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="/">
                                <img width="130px" src="../resources/selfpetitionusa-logo.svg" />
                            </a>
                        </div>
                        <p style="font-weight: 600">Self-petition green card for professionals</p>
                        <p>Take matters into your own hands!</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Company</h3>
                        <ul class="list">
                            <li><a href="/"  v-scroll-to="'#solutions'">Solutions</a></li>
                            <li><a href="/"  v-scroll-to="'#pricing'">Pricing</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>
                        <ul class="list">
                            <li><a href="/Greencard_Terms_of_Service.pdf">Terms of Service</a></li>
                            <li><a href="/Greencard_Privacy_Policy.pdf">Privacy Policy</a></li>
                            <li><a href="/Greencard_Website_Terms_and_Conditions.pdf">Terms and Conditions</a></li>

                            <li><a href="/" v-scroll-to="'#contact'" >Contact Us</a></li>
                        </ul>
                    </div>
                </div>



                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>Copyright &copy;2022 Self Petition USA. All Rights Reserved</p>
                        <p style="font-size: 10px">All statements are subject to certain conditions, subject to change, may be outdated when applying, may not apply to your personal situation and may be limited in timespan, and are not legally or fiscally binding. Pricing may vary based on your personal situation. Only a lawyer can advise you, for example the lawyer we connect you with, on how you can proceed in your unique personal situation. Due to the nature of the work, fees you pay are non-refundable.</p>
                    </div>
                </div>
            </div>
        </div>

        <img src="../resources/map.png" class="map" >
        <div class="shape1"><img src="../resources/shape1.png" ></div>
        <div class="shape8 rotateme"><img src="../resources/shape2.svg" ></div>
        <!-- <div class="go-top"><feather type="arrow-up"></feather></div> -->

        <back-to-top bottom="50px" right="50px">
            <div class="go-top"><feather type="arrow-up"></feather></div>
        </back-to-top>
    </footer>
    <!-- End Footer Area -->
</template>

<script>
import BackToTop from 'vue-backtotop'
export default {
    name: 'FooterGreenCard',
    components: { BackToTop }
}
</script>
