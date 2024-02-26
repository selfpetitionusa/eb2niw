<template>

    <section class="services-area ptb-80" style="background: white; margin-top: 50px; padding-bottom: 4rem">
        
        <b-modal ref="modal-zoom" :modal-class="modalZoom" :return-focus="this.$parent" size="lg" hide-footer>
            <template #modal-title>
               {{modalProperties[index].title}}
            </template>
            <div style="text-align: center;">
                <img :src="getImgUrl()" alt="eb2 niw diy" />
            </div>
        </b-modal>

        <div class="container">

            <div style="position: relative;">
                <img style="width: 100%; opacity: 100%;" src="../resources/banner.webp" alt="i140 templates">   
            
                <div class="section-title" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 0px 15px 5px">>
                    <h1 class="banner-title">EB-2 NIW Templates</h1>
                    <div class="bar"></div>

                    <div class="banner-subtitle">
                        <h3>Review below <span style="color: #008037">I-140</span> cover letters</h3>
                        <h3>for <span style="color: #008037">Advance Degree</span> category</h3>
                    </div>
                </div>
            </div>

            <div id="templates" class="row" style="margin-top: 7rem">
                <a class="col-lg-4 col-sm-6" @click="index = 0; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Banking & Finance</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/banking-finance-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/sample-banking.webp" alt="eb2 niw banking">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>

                <a class="col-lg-4 col-sm-6" @click="index = 1; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Software Engineer</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/software-engineer-it-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/sample-softwareEngineer.webp" alt="eb2 niw software engineer">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>

                <a class="col-lg-4 col-sm-6" @click="index = 2; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">IT</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/software-engineer-it-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/sample-it.webp" alt="eb2 niw it">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                
                <a class="col-lg-4 col-sm-6" @click="index = 3; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Data Scientist</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/data-scientist-analyst-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-dataScientist.webp" alt="eb2 niw data scientist">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                
                <a class="col-lg-4 col-sm-6" @click="index = 4; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Data Analyst</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/data-scientist-analyst-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/sample-dataAnalyst.webp" alt="eb2 niw data analyst">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                
                <a class="col-lg-4 col-sm-6" @click="index = 5; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Product & Project Manager</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/product-project-mgmt-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-productManager.webp" alt="eb2 niw product manager">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                
                <a class="col-lg-4 col-sm-6" @click="index = 6; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Network & Electrical Engineer</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/network-electrical-engineer-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-networkEngineer.webp" alt="eb2 niw network engineer">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                
                <a class="col-lg-4 col-sm-6" @click="index = 7; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Electro-mechanical Engineer</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/electro-mechanical-engineer-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/sample-electromechanicalEngineer.webp" alt="eb2 niw electromechanical engineer">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                
                <a class="col-lg-4 col-sm-6" @click="index = 8; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Chemical Engineer</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/chemical-engineer-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-chemicalEngineer.webp" alt="eb2 niw chemical engineer">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                
                <a class="col-lg-4 col-sm-6" @click="index = 9; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Marketing Professional</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/marketing-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-marketing.webp" alt="eb2 niw marketing">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                         
                <a class="col-lg-4 col-sm-6" @click="index = 10; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">HR & Recruiter</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/hr-recruiter-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-hrRecruiter.webp" alt="eb2 niw hr recruiter">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>     
                
                <a class="col-lg-4 col-sm-6" @click="index = 11; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Science Teacher</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/science-teacher-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-scienceTeacher.webp" alt="eb2 niw teacher">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                
                <a class="col-lg-4 col-sm-6" @click="index = 12; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Physician & Dentist</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/physician-dentist-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-dentist.webp" alt="eb2 niw dentist">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                     
                <a class="col-lg-4 col-sm-6" @click="index = 13; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Pilot</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/pilot-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-pilot.webp" alt="eb2 niw pilot">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
                     
                <a class="col-lg-4 col-sm-6" @click="index = 14; $refs['modal-zoom'].show()" style="cursor: pointer;">
                    <h5 style="text-align: center">Pilot & Aeronautical Engineer</h5>
                    <div style="display: flex; justify-content: center;">
                        <a href="https://www.selfpetitionusa.com/pilot-sample" class="btn-sample-redirect">Template details -></a>
                    </div>
                    <div class="single-works carousel-green-hover">                        
                        <img src="../resources/sample-aeronautical.webp" alt="eb2 niw pilot">
                        <a v-if="windowWidth > 767" class="icon"><vue-feather type="zoom-in"></vue-feather></a>
                    </div>
                </a>
            </div>

            <div class="website-example funfacts-area">
                <div class="shape3-services"><img src="../../../assets/img/shape3.svg" ></div>
            </div>
        </div>
    </section>
    <!-- End Design & Development Services -->
</template>

<script>
export default {
    name: 'Templates',
    data() {
        return {
            modalZoom: ['modal-zoom'],
            windowWidth: window.innerWidth,
            index: 0,
            modalProperties: [
                {
                    title : "Banking & Finance",
                    img: "./sample-banking.webp"
                },
                {
                   title : "Software Engineer",
                   img: "./sample-softwareEngineer.webp"
                },
                {
                    title : "IT",
                    img: "./sample-it.webp"
                },
                {
                    title : "Data Scientist",
                    img: "./sample-dataScientist.webp"
                },
                {
                    title : "Data Analyst",
                    img: "./sample-dataAnalyst.webp"
                },
                {
                    title : "Product & Project Manager",
                    img: "./sample-productManager.webp"
                },
                {
                    title : "Network & Electrical Engineer",
                    img: "./sample-networkEngineer.webp"
                },
                {
                    title : "Electro-mechanical Engineer",
                    img: "./sample-electromechanicalEngineer.webp"
                },
                {
                    title : "Chemical Engineer",
                    img: "./sample-chemicalEngineer.webp"
                },
                {
                    title : "Marketing Professional",
                    img: "./sample-marketing.webp"
                },
                {
                    title : "HR & Recruiter",
                    img: "./sample-hrRecruiter.webp"
                },
                {
                    title : "Science Teacher",
                    img: "./sample-scienceTeacher.webp"
                },
                                {
                    title : "Physician & Dentist",
                    img: "./sample-dentist.webp"
                },
                {
                    title : "Pilot",
                    img: "./sample-pilot.webp"
                },
                {
                    title : "Pilot & Aeronautical Engineer",
                    img: "./sample-aeronautical.webp"
                }
            ]
        }
    },
    methods: {
        getImgUrl() {
            var images = require.context('../resources/', false, /\.webp$/)
            return images(this.modalProperties[this.index].img)
        },
        closeBannerModal() {
        // Emit a custom event to notify the parent component (BannerGreenCard)
        this.$emit('close-banner-modal');
        }
    }
}
</script>
