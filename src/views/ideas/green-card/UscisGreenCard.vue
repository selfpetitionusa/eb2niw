<template>

    <div>
        <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
            <div class="startp-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <router-link class="navbar-brand" to="/">
                            <img width="150px" src="./resources/selfpetitionusa-logo.svg" alt="Self Petition USA"/>
                        </router-link>

                        <ul class="nav ml-auto">

                            <li class="nav-item">
                                <a href="/" class="nav-link uscis-menu">Home</a>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header>


        <section class="feedback-area ptb-80 bg-f9fafb" style="margin-top: 3rem">
          <div id="testimonials">
            <div class="container">
                <div class="section-title" style="background-color: white; padding: 1rem; text-align: left">
                    <h2>EB-2 Eligibility Criteria</h2>
                    <div class="bar" style="margin-left: 0"></div>
                    <div style="margin: 1rem; margin-top: 2rem; max-width: 1000px">You may be eligible for EB-2 visa if you satisfy one of the two requirements:
                        <div style="margin-top: 1rem"><span style="font-weight: 500">Advanced degree: </span>Need to possess advanced degree (Master's, PhD etc) or its foreign equivalent. Alternatively a baccalaureate or foreign equivalent plus 5 years of post-baccalaureate, progressive work experience in the field.</div>
                        <div style="margin-top: 1rem"><span style="font-weight: 500">Exceptional Ability: </span>must be able to show exceptional ability in the sciences, arts, or business. Exceptional ability “means a degree of expertise significantly above that ordinarily encountered in the sciences, arts, or business.”. You must meet at least three of the criteria below:</div>

                      <ul style="margin-top: 1rem">
                        <li style="margin-left: 0rem">Official academic record showing that you have a degree, diploma, certificate, or similar award from a college, university, school, or other institution of learning relating to your area of exceptional ability.</li>
                        <li style="margin-left: 0rem">Letters from current or former employers documenting at least 10 years of full-time experience in your occupation.</li>
                        <li style="margin-left: 0rem">A license to practice your profession or certification for your profession or occupation.</li>
                        <li style="margin-left: 0rem">Evidence that you have commanded a salary or other remuneration for services that demonstrates your exceptional ability.</li>
                        <li style="margin-left: 0rem">Membership in a professional association(s).</li>
                        <li style="margin-left: 0rem">Recognition for your achievements and significant contributions to your industry or field by your peers, government entities, professional or business organizations.</li>
                        <li style="margin-left: 0rem">Other comparable evidence of eligibility is also acceptable.</li>
                      </ul>
                    </div>
                    <a style="margin-left: 1rem; max-width: 1000px; text-decoration: underline" target="_blank" href="https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2">Read more on USCIS website</a>
                </div>

                <PriceOffer style="margin-bottom: 3rem; margin-top: 0rem"></PriceOffer>

                <div class="section-title" style="background-color: white; padding: 1rem; text-align: left">
                    <h2>National Interest Waiver</h2>
                    <div class="bar" style="margin-left: 0"></div>
                    <div style="margin: 1rem; margin-top: 2rem; max-width: 1000px">Those seeking a national interest waiver are requesting that the job offer, and thus the labor certification, be waived because it is in the interest of the United States. This is called self-petition, so you do not need an employer to sponsor your green card.</div>
                    <div style="margin: 1rem; max-width: 1000px">In other words you can apply for EB-2 National Interest Waiver (NIW) without permanent job offer from U.S. employer. It is very fast process because NIW waives lengthy Labor Certification. EB-2 NIW green card is not linked to the employer so you could change your job as long as your case story remains valid.</div>
                    <div style="margin: 1rem; max-width: 1000px">For NIW you must satisfy all 3 elements (Matter of Dhanasar):
                      <ul>
                        <li style="margin-left: 0rem">The proposed endeavor has both substantial merit and national importance.</li>
                        <li style="margin-left: 0rem">You are well positioned to advance the proposed endeavor.</li>
                        <li style="margin-left: 0rem">On balance, it would be beneficial to the United States to waive the requirements of a job offer, and thus the labor certification.</li>
                      </ul>
                    </div>
                    <a style="margin-left: 1rem; max-width: 1000px; text-decoration: underline" target="_blank" href="https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2">Read more on USCIS website</a>
                </div>

                <div class="section-title" style="background-color: white; padding: 1rem; text-align: left">
                    <h2>What nationalities can currently file?</h2>
                    <div class="bar" style="margin-left: 0"></div>
                    <div style="margin: 1rem; margin-top: 2rem; max-width: 1000px">Individuals seeking to file applications for adjustment of status need to make sure that priority date for their nationality is current (country of birth if you have multiple nationalities). Currently there is backlog of cases for example for Chinese or Indian citizens.</div>
                    <div style="margin: 1rem; max-width: 1000px">Priority dates change every month and USCIS works hard to resolve existing backlog. Review current and upcoming bulletin in the link below:</div>
                    <a style="margin-left: 1rem; max-width: 1000px; text-decoration: underline" target="_blank" href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html">Check priority date in Visa Bulletin</a>
                    <div style="margin: 1rem; margin-top: 0.5rem; max-width: 1000px; color: #6084a4">>>> In the bulletin look for 2nd under category Employment-based</div>
                </div>

                <div class="row service-action-btns" style="margin-top: 0rem; margin-bottom: 4rem">
                    <div class="col-xl-7 col-lg-9">
                        <div class="row justify-content-center">
                            <div class="col-sm-8 col-10">
                                <a href="/green-card-evaluation" @click="$gtag.event('register')" class="btn btn-primary btn-assess">Check EB-2 NIW eligibility</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section-title" style="background-color: white; padding: 1rem; text-align: left">
                    <h2>How much does it cost?</h2>
                    <div class="bar" style="margin-left: 0"></div>
                    <div style="margin: 1rem; margin-top: 2rem; max-width: 1000px">You can self-petition with or without a lawyer.</div>
                    <div style="margin: 1rem; max-width: 1000px">Filing fees are around $2k per applicant. If you decide to file with a lawyer, typical legal fees are around $8k for the main applicant (dependents, like children & spouses, usually at ~50% discount). The exact figure might depend on the complexity of your case and the lawyer that you decided to work with.</div>
                    <div style="margin: 1rem; max-width: 1000px">Check our self-apply starter kit.<br> Even if you apply with a lawyer, you will still need to prepare reference letters and possibly also a cover letter.</div>
                    <a style="margin-left: 1rem; max-width: 1000px; text-decoration: underline" target="_blank" href="https://checkout.stripe.com/pay/cs_live_a1qNyGjaPCfAQFuj7MBooXupRt0n3gtqfiNtsv7K0zAGkoNEee0B1svkIn#fidkdWxOYHwnPyd1blppbHNgWjA0T290ckNBSGlgSWtqdWJTazBTbnJRPU1kdmBgRlBXVEsyYXQxdURCZlJ3XGlAZnFDdm00cmJgSzJXN21SZjxnT3ZUfGZqaHxmPHVCVXRNVFF1cDc1TmdLNTVgQ0I2QjVATCcpJ3VpbGtuQH11anZgYUxhJz8nMnZMMGtQNXV1NnJ1ZnNgY1xfJ3gl">Purchase our EB-2 NIW templates</a>
                </div>

                <div class="section-title" style="background-color: white; padding: 1rem; text-align: left">
                    <h2>Shall I choose concurrent or separate filing?</h2>
                    <div class="bar" style="margin-left: 0"></div>
                    <div style="margin: 1rem; margin-top: 2rem; max-width: 1000px">To obtain an NIW Green Card, you must file I-140 Immigrant Petition and an I-485 Adjustment of Status Application. These could be filed concurrently or separately.
                        <ul>
                          <li style="margin-top: 0.5rem; margin-left: 0rem"><span style="font-weight: 500">Concurrent Filing: </span> Has benefits of faster process with chances of receiving work permit (EAD) and travel authorization (Advance Parole) sooner. Could be considered if you have a strong NIW profile. Priority date must be current to file I-485 Adjustment of Status Application together with NIW I-140.</li>
                          <li style="margin-top: 0.5rem; margin-left: 0rem"><span style="font-weight: 500">Separate Filing: </span>In case I-140 is denied you could save money on second stage, ie. I-485.</li>
                        </ul>
                    </div>
                </div>

                <div class="row service-action-btns" style="margin-top: 0rem; margin-bottom: 4rem">
                    <div class="col-xl-7 col-lg-9">
                        <div class="row justify-content-center">
                            <div class="col-sm-8 col-10">
                                <a href="/green-card-evaluation" @click="$gtag.event('register')" class="btn btn-primary btn-assess">Check EB-2 NIW eligibility</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </section>


        <footer class="footer-area bg-f7fafd">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <div class="logo">
                                <a href="/">
                                    <img width="130px" src="./resources/selfpetitionusa-logo.svg" alt="contact Self Petition USA"/>
                                </a>
                            </div>
                            <p style="font-weight: 600">Self-petition green card for professionals</p>
                            <p>Take matters into your own hands!</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Support</h3>
                            <ul class="list">
                                <li><a href="/Greencard_Terms_of_Service.pdf">Terms of Service</a></li>
                                <li><a href="/Greencard_Privacy_Policy.pdf">Privacy Policy</a></li>
                                <li><a href="/Greencard_Website_Terms_and_Conditions.pdf">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>



                    <div class="col-lg-12 col-md-12">
                        <div class="copyright-area">
                            <p>Copyright &copy;2022 Self Petition USA. All Rights Reserved</p>
                            <p style="font-size: 10px">All statements are subject to certain conditions, subject to change, may be outdated when applying, may not apply to your personal situation and may be limited in timespan, and are not legally or fiscally binding. Pricing may vary based on your personal situation. Only a lawyer can advise you, for example the lawyer we connect you with, on how you can proceed in your unique personal situation. Due to the nature of the work, fees you pay are non-refundable.</p>
                            <p style="font-size: 10px">Self Petition USA does not warrant the accuracy or validity of the information, and hereby disclaims any liability to any person for any loss or damage caused by errors or omissions in this directory. Self Petition USA also is not responsible for any material or information contained in the sites provided by partnering lawyers or by partners directly. The information presented at this site should not be construed to be formal legal advice or the formation of a lawyer/client relationship.</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="./resources/map.png" class="map" alt="eb2 niw green card">
            <div class="shape1"><img src="./resources/shape1.png" alt="national interest waiver"></div>
            <div class="shape8 rotateme"><img src="./resources/shape2.svg" alt="self apply for a green card"></div>
            <!-- <div class="go-top"><feather type="arrow-up"></feather></div> -->

            <back-to-top bottom="50px" right="50px">
                <div class="go-top"><feather type="arrow-up"></feather></div>
            </back-to-top>
        </footer>
    </div>
</template>


<script>

import BackToTop from 'vue-backtotop';
import PriceOffer from "./components/PriceOffer.vue";


    export default {
        name: 'Uscis',
        data(){
            return {
                isSticky: false
            }
        },
        components: {
            BackToTop,
            PriceOffer
            },
        mounted() {
            const that = this;
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY;
                // eslint-disable-next-line no-console
                if(scrollPos >= 100){
                    that.isSticky = true;
                } else {
                    that.isSticky = false;
                }
            })
        }
    }

</script>
