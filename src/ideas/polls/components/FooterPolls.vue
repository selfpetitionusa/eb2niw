<template>
    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="/">
                                <img width="55px" src="../resources/vipvote-logo.svg" style="border-radius: 50%" />
                            </a>
                        </div>
                        <p style="font-weight: 600">Dollar voting for influencers</p>
                        <p>Connect with your audience far more closely and monetize this connection</p>
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
                            <li><a href="/Polls_Terms_of_Service.pdf">Terms of Service</a></li>
                            <li><a href="/Polls_Privacy_Policy.pdf">Privacy Policy</a></li>
                            <li><a href="/Polls_Website_Terms_and_Conditions.pdf">Terms and Conditions</a></li>

                            <li><a href="/" v-scroll-to="'#contact'" >Contact Us</a></li>
                        </ul>
                    </div>
                </div>



                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>Copyright &copy;2022 VIP VOTe. All Rights Reserved</p>
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
    name: 'FooterPolls',
    components: { BackToTop }
}
</script>
