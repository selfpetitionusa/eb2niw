<template>
    <!-- Start Boxes Area -->
    <section class="boxes-area ptb-80 bg-f9fafb">
        <SectionTwo id="about"/>
        <div class="container">
            <div class="section-title">
                <h2>Why do I need a tutoring website?</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p>Your website is your new business card. It is what makes prospective students decide to reach out to you or to ignore you.</p>
                </div>
                <div class="paragraph">
                    <p>Share your tutoring website link -- with confidence!</p>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="single-box bg-eb6b3d">
                        <div class="icon">
                            <font-awesome-icon class="font-icon" icon="desktop" />
                        </div>
                        <h3>Transform your teaching into a professional business</h3>
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="single-box">
                        <div class="icon">
                            <font-awesome-icon class="font-icon" icon="search" />
                        </div>
                        <h3>Increase credibility in the eyes of prospective students</h3>
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="single-box bg-f78acb">
                        <div class="icon">
                            <font-awesome-icon class="font-icon" icon="lightbulb" />
                        </div>
                        <h3>Attract website visitors and convert them to happy customers</h3>
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="single-box bg-c679e3">
                        <div class="icon">
                            <font-awesome-icon class="font-icon" icon="users" />
                        </div>
                        <h3>Get a website optimized for how learners hire tutors & teachers</h3>
                    </div>
                </div>
            </div>

            <div class="boxes-action-btn row justify-content-center">
                <a href="/register" @click="$gtag.event('register')" class="btn btn-primary btn-register btn-profile">START FREE TRIAL</a>
            </div>
        </div>
    </section>
    <!-- End Boxes Area -->
</template>

<script>
export default {
    name: 'BoxesArea'
}
</script>
