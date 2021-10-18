<template>
    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="/">
                                <img width="120px" src="../../assets/img/logo2.png" alt="Tutomy tutoring website logo" />
                            </a>
                        </div>
                        <p>Empowering private tutors and freelance teachers to find students and run a professional business</p>
                        <p>Online tutoring website, advice, and support of like-minded educators</p>
                        <p>Everything you need in one place</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Company</h3>
                        <ul class="list">

                            <li><a href="/"  v-scroll-to="'#about'">About</a></li>
                            <li><a href="/"  v-scroll-to="'#solutions'">Solutions</a></li>
                            <li><a href="/"  v-scroll-to="'#pricing'">Pricing</a></li>
                            <li><a href="/"  v-scroll-to="'#testimonials'">Testimonials</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>
                        <ul class="list">
                            <li><a href="/Terms_of_Service.pdf">Terms of Service</a></li>
                            <li><a href="/Privacy_Policy.pdf">Privacy Policy</a></li>
                            <li><a href="/Website_Terms_and_Conditions.pdf">Website Terms and Conditions</a></li>

                            <li><a href="/" v-scroll-to="'#contact'" >Contact Us</a></li>
                        </ul>
                    </div>
                </div>



                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>Copyright &copy;2021 Tutomy. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>

        <img src="../../assets/img/map.png" class="map" alt="Online tutoring website template - map">
        <div class="shape1"><img src="../../assets/img/shape1.png" alt="Online tutoring website template"></div>
        <div class="shape8 rotateme"><img src="../../assets/img/shape2.svg" alt="Online tutoring website template"></div>
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
    name: 'Footer',
    components: { BackToTop }
}
</script>
