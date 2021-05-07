<template>

    <div class="d-flex">
        <div :id="response.profile.token" v-if="response.profile.token" v-show="false"></div>

<!-- HAMBURGER MENU -->

    <div class="hamburger-nav">
        <div id="myLinks">
            <a href="#section-about-me" v-on:click="actionHamburgerMenu">About me</a>
            <a href="#section-subjects" v-on:click="actionHamburgerMenu">Subjects</a>
            <a href="#section-rates" v-on:click="actionHamburgerMenu">Rates</a>
            <a href="#section-expertise" v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)" v-on:click="actionHamburgerMenu">Expertise</a>
        </div>

        <a v-on:click="actionHamburgerMenu" class="icon">
            <i class="fa fa-bars"></i>
        </a>
    </div>


<!-- PROFILE TEMPLATE -->

    <div class="background-rectangular"></div>
    <div id="tu-container" class="tu-container">

    <div v-if="cmsToggle" class="preview">
      <button type="submit" class="btn btn-primary btn-preview">Preview</button>
    </div>

    <div class="row website-split">


<!-- LEFT SECTION -->

        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="left-section">

                <div>
                    <img class="photo" :src="response.profile.photo" />
                    <img v-if="!response.profile.photo" class="photo" src="/avatar_female_cropped.png" />
                    <div v-if="cmsToggle" class="pic-edit">
                        <PhotoPopup></PhotoPopup>
                        <a href="#" v-b-modal.photo-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>
                </div>

                <div :class="[cmsToggle && 'cms-frame']">
                    <div v-if="cmsToggle">
                        <NamePopup></NamePopup>
                        <a href="#" v-b-modal.name-modal class="edit outer" >
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>
                    <div class="name-input">
                        <h2>{{response.profile.firstName}}</h2>
                          <h2 v-if="!response.profile.firstName && cmsToggle">Your</h2>
                        <h2 class="lastname">{{response.profile.lastName}}</h2>
                          <h2 v-if="!response.profile.lastName && cmsToggle" class="lastname">name</h2>
                    </div>

                    <div class="subject-categories">{{response.categories.map(cat => cat.categoryName).join(' | ')}}</div>
                      <div v-if="!response.categories.length && cmsToggle" class="subject-categories">Subject 1</div>

                    <div v-if="!response.profile.shortBio" class="short-bio">
                        <p v-if="response.profile.firstName" class="line-1">Hi, my name is {{response.profile.firstName}}.</p>
                          <p v-if="!response.profile.firstName && cmsToggle" class="line-1">Hi, my name is &lt; Name &gt;.</p>
                        <p v-if="response.categories.length" class="line-2">I tutor {{formatArray(response.categories.map(cat => cat.categoryName))}}.</p>
                          <p v-if="!response.categories.length && cmsToggle" class="line-2">I tutor &lt; Subject 1 &gt;.</p>
                        <p>Welcome to my website!</p>
                    </div>

                      <div v-else class="short-bio">
                          <p class="line-1" v-for="bio in response.profile.shortBio.split(/\r?\n/)" :key="bio">{{bio}}</p>
                      </div>


<!-- SOCIAL MEDIA -->

                    <div class="social-links" :class="[cmsToggle && 'cms-frame inner-frame']">
                        <div v-if="cmsToggle">
                            <LinksPopup></LinksPopup>
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

                    <div class="btn-profile">
                        <a v-if="response.profile.firstName && response.profile.email" :href="'mailto:' + response.profile.email" class="btn btn-primary inner" role="button">Contact {{response.profile.firstName}}</a>
                        <a v-if="!response.profile.firstName && !response.profile.email && cmsToggle" href="mailto:youremail@gmail.com" class="btn btn-primary inner" role="button">Contact &lt; Name &gt;</a>
                    </div>
                </div>
            </div>
        </div>


<!-- MENU -->

    <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 right-section">
        <div class="tu-card-and-menu-container">
            <div class="d-none d-lg-block menu">
                <ul class="px-xl-5 px-1">
                    <li><a href="#section-about-me">about me</a></li>
                    <li><a href="#section-subjects">subjects</a></li>
                    <li><a href="#section-rates">rates</a></li>
                    <li v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)"><a href="#section-expertise">expertise</a></li>
                </ul>
            </div>


<!-- ABOUT ME SECTION -->

        <div class="tu-card-container">
            <div id="section-about-me" class="tu-card">
                <div :class="[cmsToggle && 'cms-frame tu-card-frame']">
                    <div v-if="cmsToggle">
                        <EducationPopup></EducationPopup>
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

                            <School v-if="!response.schools && cmsToggle"></School>


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


                            <Certificate v-if="!response.certificate && cmsToggle"></Certificate>
                        </div>

                        <div class="col graphic-bio">
                            <img src="../../assets/img/Graphic_bio.svg">
                        </div>

                    </div>
                </div>


<!-- BIO -->

                <div class="bio" :class="[cmsToggle && 'cms-frame tu-card-frame']">
                    <div v-if="cmsToggle">
                        <BioPopup></BioPopup>
                        <a href="#" class="edit" v-b-modal.bio-modal>
                            <font-awesome-icon icon="edit" />
                        </a>
                    </div>
                    <p v-for="bio in response.profile.bio.split(/\r?\n/)" :key="bio">{{bio}}</p>
                    <p v-if="!response.profile.bio && cmsToggle" class="cms">Your bio</p>
                </div>

            </div>


<!-- SUBJECTS SECTION -->

            <div id="section-subjects" class="tu-card">

                <img v-if="!cmsToggle" class="figure-subjects" src="../../assets/img/subjects_figures.png">

                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Subjects</h2></div>
                </div>

                <div :class="[cmsToggle && 'cms-frame tu-card-frame margin-frame']">
                    <div v-if="cmsToggle">
                        <SubjectsPopup></SubjectsPopup>
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
                        <div class="value">{{response.profile.studentsProfile.toLowerCase()}}</div>
                          <div v-if="!response.profile.studentsProfile && cmsToggle" class="value">&lt; your selection &gt;</div>
                    </div>

                </div>
            </div>


<!-- RATES SECTION -->

            <div id="section-rates" class="tu-card">

                <img class="figure-terms" src="../../assets/img/rates_figure.png">
                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Rates</h2></div>
                </div>

                <div class="row rates-container">
                    <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 col-12 items-all" :class="[cmsToggle && 'cms-frame frame-rates']">
                        <div v-if="cmsToggle">
                            <RatesPopup></RatesPopup>
                            <a href="#" class="edit">
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


                        <div class="rates-additional-comment">{{response.profile.rateInfo.rateSectionComment}}</div>
                          <div v-if="!response.profile.rateInfo.rateSectionComment" class="rates-additional-comment">Details available upon request</div>

                    </div>

                    <div class="col-xl-6 col-lg-5 col-md-5 col-sm-4 col-0 graphic-rates">
                        <img src="../../assets/img/Rates_graphic.svg" />
                    </div>

                </div>


<!-- TERMS -->

                <div class="terms-container">
                    <div class="terms">
                        <div v-if="cmsToggle">
                            <TermsPopup></TermsPopup>
                                <a href="#" class="edit edit-terms" v-b-modal.terms-modal>
                                    <font-awesome-icon icon="edit" />
                                </a>
                        </div>      
                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="globe" /></div>
                            <div class="col-11 text">
                                <div class="label">Online lessons:
                                    <div class="value">
                                        <div v-if="response.profile.rateInfo.online" class="input">{{response.profile.rateInfo.onlineComment === null ? 'Yes' : response.profile.rateInfo.onlineComment}}</div>
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
                                        <div v-if="response.profile.rateInfo.inPerson" class="input">{{response.profile.rateInfo.inPersonComment === null ? 'Yes' : response.profile.rateInfo.inPersonComment}}</div>
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
                                        <div v-if="response.profile.rateInfo.freeConsultation" class="input">{{response.profile.rateInfo.freeConsultationComment === null ? 'Yes' : response.profile.rateInfo.freeConsultationComment}}</div>
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
                                        <div v-if="response.profile.rateInfo.cancellationPolicy" class="input">{{response.profile.rateInfo.cancellationPolicyComment === null ? '24h notice' : response.profile.rateInfo.cancellationPolicyComment}}</div>
                                        <div v-else class="input">No refunds</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


<!-- LOGO IF NO EXPERTISE SECTION -->

                <div v-if="(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)" class="tutomy-logo">
                  <p>Powered by</p>
                  <img src="../../assets/img/logo2.png">
                </div>

            </div>


<!-- EXPERTISE SECTION -->

            <div id="section-expertise" class="tu-card" v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)">

                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Expertise</h2></div>
                </div>


<!-- YOUTUBE -->

                <div :class="[cmsToggle && 'cms-frame tu-card-frame margin-frame']">
                    <a v-if="response.profile.youtubeIntroLink && cmsToggle" class="edit" href="src/views#">
                        <font-awesome-icon icon="edit" />
                    </a>

                    <div v-if="response.profile.youtubeIntroLink" class="youtube-display">
                        <iframe width="560" height="315" :src="response.profile.youtubeLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <YouTube v-if="!response.profile.youtubeIntroLink && cmsToggle"></YouTube>
                </div>


<!-- CAROUSEL -->

                <div :class="[cmsToggle && 'cms-frame tu-card-frame margin-frame']">
                    <div v-if="cmsToggle">
                        <ProblemCardsPopup></ProblemCardsPopup>
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

                                <ProblemCard v-if="response.problemCards && cmsToggle"></ProblemCard>

                            </div>
                        </div>

                        <div v-on:click="scroll('right')" class="right-arrow">
                            <img v-if="offset + offsetWidth <scrollWidth" src="../../assets/img/arrow_right.svg">
                        </div>

                    </div>
                </div>


<!-- LOGO -->

                <div class="tutomy-logo">
                  <p>Powered by</p>
                  <img src="../../assets/img/logo2.png">
                </div>

            </div>


        </div>      <!-- tu-card-container -->
        </div>      <!-- tu-card-and-menu-container -->
    </div>       <!-- right-section -->
    </div>       <!-- right-left-section-split -->
    </div>       <!-- tu-container -->
    </div>       <!-- d-flex -->

</template>




<script>
    import axios from 'axios';

    import School from './section/School';
    import Certificate from './section/Certificate';
    import Subject from './section/Subject';
    import Rate from './section/Rate';
    import YouTube from './section/YouTube';
    import ProblemCard from './section/ProblemCard';

    import PhotoPopup from '../profile/popups/PhotoPopup';
    import NamePopup from '../profile/popups/NamePopup';
    import LinksPopup from '../profile/popups/LinksPopup';
    import EducationPopup from '../profile/popups/EducationPopup';
    import BioPopup from '../profile/popups/BioPopup';
    import SubjectsPopup from '../profile/popups/SubjectsPopup';
    import RatesPopup from '../profile/popups/RatesPopup';
    import TermsPopup from '../profile/popups/TermsPopup';
    import ProblemCardsPopup from '../profile/popups/ProblemCardsPopup';


  export default {
    name: 'Profile',
    components: {
      School,
      Certificate,
      Subject,
      Rate,
      YouTube,
      ProblemCard,
      PhotoPopup,
      NamePopup,
      LinksPopup,
      EducationPopup,
      BioPopup,
      SubjectsPopup,
      RatesPopup,
      TermsPopup,
      ProblemCardsPopup,
    },
    props: ['cmsToggleProp', 'tokenProp'],
    created () {
          this.fetchData()
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
            response: {
                profile: {rateInfo: {}, links: {}, bio: '', studentsProfile: ''},
                categories: [],
                problemCards: []
            },
            offset: 0,
            scrollWidth: 0,
            offsetWidth: 0,
            cmsToggle: this.cmsToggleProp
        }
    },
      methods: {
          fetchData () {
              axios
                  .get('https://www.tutomy.com/api/tutors/' + this.tokenProp)
                  .then(res => this.response = res.data)
                  .then(() => this.scrollWidth = document.getElementById('problems').scrollWidth)
                  .then(() => this.offsetWidth = document.getElementById('problems').offsetWidth)
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
              }
        }
  }

</script>
