<template>

    <div class="dflex">
        <div :id="response.profile.token" v-if="response.profile.token" v-show="false"></div>

<!-- HAMBURGER MENU - MAIN VIEW -->

    <div class="hamburger-nav">
        <div id="myLinks">
            <a v-if="(!(response.profile.headline === null && response.schools.length === 0 && response.certificates.length === 0 && response.profile.bio === null) || cmsToggle)" href="#section-about-me" v-on:click="actionHamburgerMenu">About me</a>
            <a v-if="(!(response.categories.length === 0 && response.profile.studentsProfile === null) || cmsToggle)" href="#section-subjects" v-on:click="actionHamburgerMenu">Subjects</a>
            <a href="#section-rates" v-on:click="actionHamburgerMenu">Rates</a>
            <a v-if="(!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0) || cmsToggle)" href="#section-expertise" v-on:click="actionHamburgerMenu">Expertise</a>
        </div>

        <a v-on:click="actionHamburgerMenu" class="icon">
            <i class="fa fa-bars"></i>
        </a>
    </div>


<!-- PROFILE TEMPLATE -->

    <div class="background-rectangular"></div>
    <div id="tu-container" class="tu-container">
    <div class="row website-split">


<!-- HAMBURGER MENU - MENU LIST -->

        <div class="hamburger-nav">
            <a v-on:click="actionHamburgerMenu" class="icon">
                <i class="fa fa-bars"></i>
            </a>
        </div>


<!-- LEFT SECTION -->

        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="left-section">

                <div>
                    <img class="photo" :src="response.profile.photo" />
                    <img v-if="!response.profile.photo && response.profile.sex !== 'Male'" class="photo" src="/avatar_female_cropped.png" />
                    <img v-if="!response.profile.photo && response.profile.sex === 'Male'" class="photo" src="/avatar_male_cropped.png" />
                    <div v-if="cmsToggle" class="pic-edit">
                        <PhotoPopup v-bind:profileProp="response" ></PhotoPopup>
                        <a href="#" v-b-modal.photo-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>
                </div>

                <div :class="[cmsToggle && 'cms-frame']">
                    <div v-if="cmsToggle">
                        <NamePopup v-bind:profileProp="response"></NamePopup>
                        <a href="#" v-b-modal.name-modal class="edit outer">
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>

                    <div class="name-input">
                        <h2>{{response.profile.firstName}}</h2>
                          <h2 v-if="!response.profile.firstName && cmsToggle">Your</h2>
                        <h2 class="lastname">{{response.profile.lastName}}</h2>
                    </div>

                    <div class="subject-categories">{{response.categories.map(cat => cat.categoryName).join(' | ')}}</div>
                      <div v-if="!response.categories.length && cmsToggle" class="subject-categories">Subject 1</div>

                    <div v-if="!response.profile.shortBio" class="short-bio">
                        <p v-if="response.profile.firstName" class="line-short-bio">Hi, my name is {{response.profile.firstName}}.</p>
                          <p v-if="!response.profile.firstName && cmsToggle" class="line-short-bio">Hi, my name is &lt; Name &gt;.</p>
                        <p v-if="response.categories.length" class="line-short-bio">I tutor {{formatArray(response.categories.map(cat => cat.categoryName))}}.</p>
                          <p v-if="!response.categories.length && cmsToggle" class="line-short-bio">I tutor &lt; Subject 1 &gt;.</p>
                        <p class="line-short-bio" >Welcome to my website!</p>
                    </div>

                      <div v-else class="short-bio">
                          <div v-if="response.profile.shortBio">
                              <p class="line-short-bio" v-for="bio in response.profile.shortBio.split(/\r?\n/)" :key="bio">{{bio}}</p>
                          </div>
                      </div>


<!-- SOCIAL MEDIA -->

                    <div class="social-links" :class="[cmsToggle && 'cms-frame inner-frame']">
                        <div v-if="cmsToggle">
                            <LinksPopup v-bind:profileProp="response" ></LinksPopup>
                            <a href="#" class="edit" v-b-modal.links-modal>
                                <font-awesome-icon icon="edit" />
                            </a>
                        </div>
                        <ul>
                            <li v-if="response.profile.links.facebookLink"><a :href="response.profile.links.facebookLink" class="facebook"><feather type="facebook"></feather></a></li>
                            <li v-if="response.profile.links.youtubeLink"><a :href="response.profile.links.youtubeLink" class="youtube"><feather type="youtube"></feather></a></li>
                            <li v-if="response.profile.links.instagramLink"><a :href="response.profile.links.instagramLink" class="instagram"><feather type="instagram"></feather></a></li>
                            <li v-if="response.profile.links.linkedInLink"><a :href="response.profile.links.linkedInLink" class="linkedin"><feather type="linkedin"></feather></a></li>
                            <li v-if="cmsToggle && !response.profile.links.facebookLink && !response.profile.links.youtubeLink && !response.profile.links.instagramLink && !response.profile.links.linkedInLink" class="cms-media">Your social media</li>
                        </ul>
                    </div>

                    <hr>


<!-- ACTION BUTTON -->

                    <div class="btn-profile"  :class="[cmsToggle && 'cms-frame inner-frame']" >
                        <div v-if="cmsToggle" style="margin-bottom: 30px;">
                            <PaymentBookingPopup v-bind:profileProp="response" ></PaymentBookingPopup>
                            <a href="#" class="edit" v-b-modal.payment-booking-modal>
                                <font-awesome-icon icon="edit" />
                            </a>
                        </div>
                        <ContactPopup v-bind:email="response.profile.email" v-bind:cmsToggle="cmsToggle"></ContactPopup>
                        <a v-if="response.profile.firstName && response.profile.email" href="#" v-b-modal.contact-modal class="btn btn-primary inner" role="button">Contact {{response.profile.firstName}}</a>


                        <a v-if="!response.profile.firstName && !response.profile.email && cmsToggle"  href="#" v-b-modal.contact-modal  class="btn btn-primary inner-booking" role="button">Contact &lt; Name &gt;</a>

                        <a v-if="cmsToggle" href="#" class="btn btn-primary btn-border inner-booking" style="margin-bottom: 0px" v-on:click="clickPaymentsButtonEditMode()">Book</a>
                        <a v-if="cmsToggle" href="#" class="btn btn-primary btn-border inner-booking" v-on:click="clickPaymentsButtonEditMode()">Pay</a>
                            <div v-if="paymentsButtonInfo" class="alert alert-warning" style="margin: 3px;">
                                <div style="font-weight: 600; margin-bottom: 2px;">Disabled in edit mode:</div>
                                <div style="font-size: 12px"> -> Click edit icon to add link</div>
                                <div style="font-size: 12px"> -> Check result in PREVIEW</div>
                            </div>
                        <a v-if="!cmsToggle && response.profile.bookingLink" :href="response.profile.bookingLink" class="btn btn-primary btn-border inner-booking">Book</a>
                        <a v-if="!cmsToggle && response.profile.paymentLink === 'Payment'" :href="response.profile.paymentLink" class="btn btn-primary btn-border inner-booking">Pay</a>
                    </div>
                </div>
            </div>
        </div>


<!-- MENU -->

    <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 right-section">
        <div class="tu-card-and-menu-container">
            <div class="d-none d-lg-block menu">
                <ul class="px-xl-5 px-1">
                    <li v-if="(!(response.profile.headline === null && response.schools.length === 0 && response.certificates.length === 0 && response.profile.bio === null) || cmsToggle)"><a href="#section-about-me">about me</a></li>
                    <li v-if="(!(response.categories.length === 0 && response.profile.studentsProfile === null) || cmsToggle)"><a href="#section-subjects">subjects</a></li>
                    <li><a href="#section-rates">rates</a></li>
                    <li v-if="(!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0) || cmsToggle)"><a href="#section-expertise">expertise</a></li>
                </ul>
            </div>


<!-- ABOUT ME SECTION -->

        <div class="tu-card-container">
            <div v-if="(!(response.profile.headline === null && response.schools.length === 0 && response.certificates.length === 0 && response.profile.bio === null) || cmsToggle)" id="section-about-me" class="tu-card">
                <div :class="[cmsToggle && 'cms-frame tu-card-frame']">
                    <div v-if="cmsToggle">
                        <EducationPopup v-bind:profileProp="response"></EducationPopup>
                        <a href="#" class="edit" v-b-modal.education-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>

<!-- HEADLINE -->

                    <div class="section-container header">
                        <h2>{{response.profile.headline}}</h2>
                        <h2 v-if="!response.profile.headline && cmsToggle">Your Headline</h2>
                    </div>


<!-- SCHOOLS -->

                    <div class="row education-container">
                        <div class="col-xl-8 col-lg-9 col-md-8 col-sm-12 col-12 items-all">
                            <div class="row items" v-for="school in response.schools" :key="school.value">
                                <div class="col-2 icons-column">
                                    <div class="icon-container">
                                        <font-awesome-icon class="icon" icon="graduation-cap" />
                                    </div>
                                </div>
                                <div class="col-10 education-input">
                                    <p class="school label">{{school.label}}</p>
                                    <p class="school value">{{school.value}}</p>
                                </div>
                            </div>

                            <School v-if="!response.schools.length && cmsToggle"></School>


<!-- CERTIFICATES -->

                            <div class="row items" v-for="certificate in response.certificates" :key="certificate.value">
                                <div class="col-2 icons-column">
                                    <div class="icon-container">
                                        <font-awesome-icon class="icon" icon="star-of-life" />
                                    </div>
                                </div>
                                <div class="col-10 education-input">
                                    <p class="certificate label">{{certificate.label}}</p>
                                    <p class="certificate value">{{certificate.value}}</p>
                                </div>
                            </div>


                            <Certificate v-if="!response.certificates.length && cmsToggle"></Certificate>
                        </div>

                        <div class="col graphic-bio">
                            <img src="../../assets/img/Graphic_bio_pink.svg">
                        </div>

                    </div>
                </div>


<!-- BIO -->

                <div class="bio" :class="[cmsToggle && 'cms-frame tu-card-frame']">
                    <div v-if="cmsToggle">
                        <BioPopup v-bind:profileProp="response" ></BioPopup>
                        <a href="#" class="edit" v-b-modal.bio-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>
                    <div v-if="response.profile.bio">
                        <p v-for="bio in response.profile.bio.split(/\r?\n/)" :key="bio">{{bio}}</p>
                    </div>
                    <p v-if="!response.profile.bio && cmsToggle" class="cms">Your bio</p>
                </div>

            </div>


<!-- SUBJECTS SECTION -->

            <div v-if="(!(response.categories.length === 0 && response.profile.studentsProfile === null) || cmsToggle)" id="section-subjects" class="tu-card">

                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Subjects</h2></div>
                </div>

                <div :class="[cmsToggle && 'cms-frame tu-card-frame margin-frame']">
                    <div v-if="cmsToggle">
                        <SubjectsPopup v-bind:profileProp="response"></SubjectsPopup>
                        <a href="#" class="edit" v-b-modal.subjects-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>

                    <div v-if="response.categories.length" class="row subjects-container">
                        <div class="col-md-6 subject-cards" v-for="(category, index) in response.categories" :key="category.id">
                            <div class="subjects" :class="[index % 2 === 0 ? 'border1' : 'border2']">
                                <p>{{category.categoryName}}</p>
                                <hr>
                                <div class="subject-subcategories">
                                    <ul>
                                        <li v-if="category.subcategoryName1">{{category.subcategoryName1}}</li>
                                        <li v-if="category.subcategoryName2">{{category.subcategoryName2}}</li>
                                        <li v-if="category.subcategoryName3">{{category.subcategoryName3}}</li>
                                        <li v-if="category.subcategoryName4">{{category.subcategoryName4}}</li>
                                        <li v-if="category.subcategoryName5">{{category.subcategoryName5}}</li>
                                        <li v-if="category.subcategoryName6">{{category.subcategoryName6}}</li>
                                        <li v-if="category.subcategoryName7">{{category.subcategoryName7}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Subject v-if="!response.categories.length && cmsToggle"></Subject>


<!-- MY STUDENTS -->

                    <div class="my-students">
                        <font-awesome-icon class="icon" icon="users" />
                        <div class="label">My students are</div>
                        <div v-if="response.profile.studentsProfile"  class="value">{{response.profile.studentsProfile.toLowerCase()}}</div>
                          <div v-if="!response.profile.studentsProfile && cmsToggle" class="value">&lt; your selection &gt;</div>
                    </div>

                </div>
            </div>

<!-- TESTIMONIALS SECTION -->

            <div id="section-testimonials" class="tu-card">

                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Testimonials</h2></div>
                </div>

                <div :class="[cmsToggle && 'cms-frame tu-card-frame margin-frame']">
                    <div v-if="cmsToggle">
                        <ReviewsPopup v-bind:profileProp="response"></ReviewsPopup>
                        <a href="#" class="edit" v-b-modal.reviews-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>


                    <div class="feedback-slides">
                        <div class="client-feedback">
                            <div>
                                <slick
                                    ref="slick3"
                                    :options="slickOptions">


                                        <div class="item" v-for="testimonial in response.testimonials" :key="testimonial.id" >

                                            <div class="tutor-testimonial single-feedback" style="margin-bottom: 0px; padding-left: 0px">
                                                <h6>{{'⭐'.repeat(Math.min(testimonial.stars,5))}}</h6>
                                                <div class="reviewer">{{testimonial.reviewerName}}</div>
                                                <div>{{testimonial.reviewerDescription}}</div>
                                                <a :href="testimonial.url" class="source">Review link</a>
                                                <div class="testimonial">{{testimonial.testimonial}}</div>
                                            </div>
                                        </div>

                                </slick>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

<!-- RATES SECTION -->

            <div id="section-rates" class="tu-card">

                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Rates</h2></div>
                </div>

                <div class="row rates-container">
                    <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 col-12 items-all" :class="[cmsToggle && 'cms-frame frame-rates']">
                        <div v-if="cmsToggle">
                            <RatesPopup v-bind:profileProp="response" ></RatesPopup>
                            <a href="#" class="edit" v-b-modal.rates-modal>
                                <font-awesome-icon icon="edit" />
                            </a>
                        </div>

                        <div class="row item" v-for="rate in response.rates" :key="rate.id">
                            <div class="col-xl-4 col-lg-4 col-md-3 col-sm-3 col-3 rate-box">
                                <div class="inner">{{rate.currency}}{{rate.amount}}</div>
                            </div>
                            <div class="col-xl-8 col-lg-8 col-md-9 col-sm-9 col-9 rate-comment">
                                <div class="row">
                                    <p class="col top">{{rate.commentTop}}</p>
                                    <div class="w-100"></div>
                                    <p class="col bottom" v-if="rate.commentBottom">{{rate.commentBottom}}</p>
                                    <p class="col bottom" v-if="rate.commentBottom === null && response.rates.length === 1">Standard rate</p>
                                </div>
                            </div>
                        </div>

                        <Rate v-if="!response.rates && cmsToggle"></Rate>


                        <div class="rates-additional-comment">{{lessonLength}}{{response.profile.rateInfo.rateSectionComment}}</div>
                          <div v-if="!response.profile.rateInfo.rateSectionComment" class="rates-additional-comment">Details available upon request.</div>

                    </div>

                    <div class="col-xl-6 col-lg-5 col-md-5 col-sm-4 col-0 graphic-rates">
                        <img src="../../assets/img/Rates_graphic_purple.svg" />
                    </div>

                </div>


<!-- TERMS -->

                <div class="terms-container">
                    <div class="terms">
                        <div v-if="cmsToggle">
                            <TermsPopup v-bind:profileProp="response"></TermsPopup>
                            <a href="#" class="edit edit-terms" v-b-modal.terms-modal>
                                <font-awesome-icon icon="edit" />
                            </a>
                        </div>
                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="globe" /></div>
                            <div class="col-11 text">
                                <div class="label">Online lessons:
                                    <div class="value">
                                        <div v-if="response.profile.rateInfo.online" class="input">{{!response.profile.rateInfo.onlineComment ? 'Yes' : response.profile.rateInfo.onlineComment}}</div>
                                        <div v-else class="input">No</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="home" /></div>
                            <div class="col-11 text">
                                <div class="label">In-person lessons:
                                    <div class="value">
                                        <div v-if="response.profile.rateInfo.inPerson" class="input">{{!response.profile.rateInfo.inPersonComment ? 'Yes' : response.profile.rateInfo.inPersonComment}}</div>
                                        <div v-else class="input">No</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="tag" /></div>
                            <div class="col-11 text">
                                <div class="label">Free consultation:
                                    <div class="value">
                                        <div v-if="response.profile.rateInfo.freeConsultation" class="input">{{!response.profile.rateInfo.freeConsultationComment ? 'Yes' : response.profile.rateInfo.freeConsultationComment}}</div>
                                        <div v-else class="input">No</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="calendar-alt" /></div>
                            <div class="col-11 text">
                                <div class="label">Cancelation policy:
                                    <div class="value">
                                        <div v-if="response.profile.rateInfo.cancellationPolicy" class="input">{{!response.profile.rateInfo.cancellationPolicyComment ? '24h notice' : response.profile.rateInfo.cancellationPolicyComment}}</div>
                                        <div v-else class="input">No refunds</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


<!-- LOGO IF NO EXPERTISE SECTION -->

                <div v-if="(response.profile.youtubeIntroLink === null && response.problemCards.length === 0 && !cmsToggle)" class="tutomy-logo">
                  <p>Powered by</p>
                    <a href="/www.tutomy.com" target="_blank"><img src="../../assets/img/logo2.png"></a>
                </div>

            </div>


<!-- EXPERTISE SECTION -->

            <div id="section-expertise" class="tu-card" v-if="!(!response.profile.youtubeIntroLink && response.problemCards.length === 0) || cmsToggle">

                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Expertise</h2></div>
                </div>


<!-- YOUTUBE -->

                <div :class="[cmsToggle && 'cms-frame tu-card-frame margin-frame']">
                    <div v-if="response.profile.youtubeIntroLink && cmsToggle">
                        <YouTubePopup v-bind:profileProp="response"></YouTubePopup>
                        <a href="#" class="edit" v-b-modal.youtube-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>

                    <div v-if="response.profile.youtubeIntroLink" class="youtube-display">
                        <iframe width="560" height="315" :src="response.profile.youtubeIntroLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <div v-if="!response.profile.youtubeIntroLink && cmsToggle" class="YT-cms">
                            <YouTubePopup v-bind:profileProp="response"></YouTubePopup>
                            <a href="#" v-b-modal.youtube-modal>
                                <font-awesome-icon class="fas fa-plus-circle fa-3x" icon="plus-circle" />
                            </a>
                            <p>Do you have a YouTube video?</p>
                            <p>Show parents and students your value and tutoring style</p>
                            <p><a class="yt-tutorial" href="https://youtu.be/ETkQS5CyTFs" target="_blank">HERE</a> how to get video to display properly</p>
                        </div>
                    </div>
                </div>


<!-- CAROUSEL -->

                <div :class="[cmsToggle && 'cms-frame tu-card-frame margin-frame']">
                    <div v-if="cmsToggle">
                        <ProblemCardsPopup v-bind:profileProp="response"></ProblemCardsPopup>
                        <a href="#" class="edit" v-b-modal.problem-cards-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>

                    <div class="expertise-arrows">
                        <div v-on:click="scroll('left')" class="left-arrow">
                            <img v-if="offset !== 0" src="../../assets/img/arrow_left.svg">
                        </div>

                        <div id="problems" class="my-carousel" v-on:scroll.passive='handleScroll'>
                            <div class="carousel-container">

                                <div :id="'problem-card'+ index" class="problem-card" v-for="(problemCard, index) in response.problemCards" :key="problemCard.id">
                                    <div class="icon"><img :src="getImgUrl(index)"></div>
                                    <div class="input">
                                        <p class="question">{{problemCard.question}}</p>
                                        <p class="answer">{{problemCard.answer}}</p>
                                    </div>
                                </div>

                                <ProblemCard v-if="!response.problemCards.length && cmsToggle"></ProblemCard>

                            </div>
                        </div>

                        <div v-on:click="scroll('right')" class="right-arrow">
                            <img v-if="offset + offsetWidth < scrollWidth" src="../../assets/img/arrow_right.svg">
                        </div>

                    </div>
                </div>


<!-- LOGO -->

                <div class="tutomy-logo">
                  <p>Powered by</p>
                    <a href="/www.tutomy.com" target="_blank"><img src="../../assets/img/logo2.png"></a>
                </div>

            </div>


        </div>      <!-- tu-card-container -->
        </div>      <!-- tu-card-and-menu-container -->
    </div>       <!-- right-section -->
    </div>       <!-- right-left-section-split -->
    </div>       <!-- tu-container -->
    </div>       <!-- dflex -->

</template>




<script>
    import Slick from 'vue-slick';
    import 'slick-carousel/slick/slick.css';

    import School from './section/School';
    import Certificate from './section/Certificate';
    import Subject from './section/Subject';
    import Rate from './section/Rate';
    import ProblemCard from './section/ProblemCard';

    import PhotoPopup from '../profile/popups/PhotoPopup';
    import NamePopup from '../profile/popups/NamePopup';
    import LinksPopup from '../profile/popups/LinksPopup';
    import EducationPopup from '../profile/popups/EducationPopup';
    import BioPopup from '../profile/popups/BioPopup';
    import SubjectsPopup from '../profile/popups/SubjectsPopup';
    import ReviewsPopup from '../profile/popups/ReviewsPopup';
    import RatesPopup from '../profile/popups/RatesPopup';
    import TermsPopup from '../profile/popups/TermsPopup';
    import YouTubePopup from '../profile/popups/YouTubePopup';
    import ProblemCardsPopup from '../profile/popups/ProblemCardsPopup';
    import ContactPopup from "./popups/ContactPopup";
    import PaymentBookingPopup from "./popups/PaymentBookingPopup";


  export default {
    name: 'Profile',
    components: {
      ContactPopup,
      School,
      Certificate,
      Subject,
      Rate,
      // YouTube,
      ProblemCard,
      PhotoPopup,
      NamePopup,
      LinksPopup,
      EducationPopup,
      BioPopup,
      SubjectsPopup,
      ReviewsPopup,
      RatesPopup,
      TermsPopup,
      YouTubePopup,
      ProblemCardsPopup,
      PaymentBookingPopup,
      Slick,
    },
    props: ['cmsToggleProp',  'profileProp'],
    computed: {
        response: function () {
            return this.profileProp;
        },
        lessonLength: function () {
            if(this.response.profile.rateInfo.lessonLength)
                return `Standard session is ${this.response.profile.rateInfo.lessonLength}min. `;
            else
                return '';
        }
    },
    watch: {
        response: function () {
            this.calculateWidths();
        }
     },
      mounted() {
          this.calculateWidths();
      },
      beforeUpdate() {
          if (this.$refs.slick3) {
              this.$refs.slick3.destroy();
          }
      },
      updated() {
          this.$nextTick(function () {
              if (this.$refs.slick3) {
                  this.$refs.slick3.create(this.slickOptions);
              }
          });
      },
      metaInfo() {
          return {
              title: `${this.response.profile.firstName} ${this.response.profile.lastName} - ${this.response.profile.headline}`,
              meta: [
                  { vmid: 'description', name: 'description', content:  this.response.profile.bio},
                  { vmid: 'ogtitle', property: 'og:title', content: `${this.response.profile.firstName} ${this.response.profile.lastName} - ${this.response.profile.headline}`},
                  { vmid: 'ogsite', property: 'og:site_name', content: 'Tutomy'},
                  { vmid: 'ogtype', property: 'og:type', content: 'website'},
                  { vmid: 'ogimage1', property: 'og:image', content: `https://www.tutomy.com/api/tutors/${this.response.profile.token}/thumbnail.png`},
              ]
          }
    },
    data () {
        return {
            offset: 0,
            scrollWidth: 0,
            offsetWidth: 0,
            cmsToggle: this.cmsToggleProp,
            paymentsButtonInfo: false,
            slickOptions: {
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
                cssEase: 'linear',
                fade: true,
                autoplay: true,
                draggable: true,
                arrows: false
            },
        }
    },
      methods: {
         calculateWidths(){
             if(this.response.problemCards.length > 0) {
                 this.$nextTick(() => {
                     this.scrollWidth = document.getElementById('problems').scrollWidth;
                     this.offsetWidth = document.getElementById('problems').offsetWidth;
                 });

             }
         },
          handleScroll () {
              this.offset = document.getElementById('problems').scrollLeft;
          },
          formatArray(arr) {
              var outStr = "";
              if (arr.length === 1) {
                  outStr = arr[0];
              } else if (arr.length === 2) {
                  outStr = arr.join(' & ');
              } else if (arr.length > 2) {
                  outStr = arr.slice(0, -1).join(', ') + ' & ' + arr.slice(-1);
              }
              return outStr;
          },
          getImgUrl: function (index) {
              const number = index % 6;
              return require('../../assets/img/icon_expertise' + number + '.svg')
          },
          scroll: function (direction) {
              const p = document.getElementById('problems');
              const offsetWidth = document.getElementById('problem-card1').offsetWidth + 20;
              if(direction === 'left') {
                  if(p.scrollLeft - offsetWidth < 0) {
                      this.offset = 0;
                  } else {
                      this.offset = p.scrollLeft - offsetWidth;
                  }
                  p.scrollTo({left: this.offset, behavior: 'smooth'})
              } else {
                  if(p.scrollLeft + this.offsetWidth >= p.scrollWidth) {
                      this.offset = p.scrollWidth - this.offsetWidth;
                  } else {
                      this.offset = p.scrollLeft + offsetWidth;
                  }
                  p.scrollTo({left: this.offset, behavior: 'smooth'})
              }
          },
          actionHamburgerMenu: function () {
              var x = document.getElementById("myLinks");
              if (x.style.display === "block") {
                x.style.display = "none";
              } else {
                x.style.display = "block";
              }
              var y = document.getElementById("tu-container");
              if (y.style.display === "none") {
                y.style.display = "block";
              } else {
                y.style.display = "none";
              }
          },
          clickPaymentsButtonEditMode: function () {
              this.paymentsButtonInfo = true;
              let self = this;
              setTimeout(function() { self.paymentsButtonInfo = false }, 5000);
          }
      }
  }

</script>
