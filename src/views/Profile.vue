<template>

    <div class="d-flex">


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
    <div class="row website-split">


<!-- LEFT SECTION -->

        <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="left-section">

                <img class="photo" :src="response.profile.photo" />
                <div class="name-input">
                    <h2 v-if="response.profile.firstName">{{response.profile.firstName}}</h2>
                      <h2 v-else>Your</h2>
                    <h2 v-if="response.profile.lastName" class="lastname">{{response.profile.lastName}}</h2>
                      <h2 v-else>name</h2>
                </div>

                <div v-if="response.categories.length > 0" class="subject-categories">{{response.categories.map(cat => cat.categoryName).join(' | ')}}</div>
                  <div v-else class="subject-categories">Subject 1</div>

                <div  v-if="!response.profile.shortBio" class="short-bio">
                    <p v-if="response.profile.firstName" class="line-1">Hi, my name is {{response.profile.firstName}}.</p>
                      <p v-else class="line-1">Hi, my name is &lt; Name &gt;.</p>
                    <p v-if="response.categories.length > 0" class="line-2">I tutor {{formatArray(response.categories.map(cat => cat.categoryName))}}.</p>
                      <p v-else class="line-2">I tutor &lt; Subject 1 &gt;.</p>
                    <p>Welcome to my website!</p>
                </div>

                  <div v-else class="short-bio">
                      <p class="line-1" v-for="bio in response.profile.shortBio.split(/\r?\n/)" :key="bio">{{bio}}</p>
                  </div>

                <div class="social-links">
                    <ul>
                        <li v-if="response.profile.links.facebookLink"><a :href="response.profile.links.facebookLink" class="facebook"><feather type="facebook"></feather></a></li>
                        <li v-if="response.profile.links.youtubeLink"><a :href="response.profile.links.youtubeLink" class="youtube"><feather type="youtube"></feather></a></li>
                        <li v-if="response.profile.links.instagramLink"><a :href="response.profile.links.instagramLink" class="instagram"><feather type="instagram"></feather></a></li>
                        <li v-if="response.profile.links.linkedInLink"><a :href="response.profile.links.linkedInLink" class="linkedin"><feather type="linkedin"></feather></a></li>
                    </ul>
                </div>

                <hr>


<!-- ACTION BUTTON -->

                <div v-if="response.profile.firstName && response.profile.email" class="btn-profile">
                    <a :href="'mailto:' + response.profile.email" class="btn btn-primary inner" role="button">Contact {{response.profile.firstName}}</a>
                </div>
                  <div v-else class="btn-profile">
                      <a href="mailto:youremail@gmail.com" class="btn btn-primary inner" role="button">Contact &lt; Name &gt;</a>
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
                <div v-if="response.profile.headline" class="section-container header">
                  <h2>{{response.profile.headline}}</h2>
                </div>
                  <div v-else class="section-container header">
                    <h2>Your Headline</h2>
                  </div>

                    <div class="row education-container">


<!-- SCHOOLS -->

                        <div class="col-xl-8 col-lg-9 col-md-8 col-sm-12 col-12 items-all">
                            <div v-if="response.schools">
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
                            </div>

                              <div v-else class="row items">
                                  <div class="col-2 icons-column">
                                      <div class="icon-container">
                                          <font-awesome-icon class="icon" icon="graduation-cap" />
                                      </div>
                                  </div>
                                  <div class="col-10 education-input">
                                      <p class="school label">University / School</p>
                                      <p class="school value">Degree and field of study</p>
                                  </div>
                              </div>


<!-- CERTIFICATES -->

                            <div v-if="response.profile.firstName">
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
                            </div>

                              <div v-else class="row items">
                                  <div class="col-2 icons-column">
                                      <div class="icon-container">
                                          <font-awesome-icon class="icon" icon="star-of-life" />
                                      </div>
                                  </div>
                                  <div class="col-10 education-input">
                                      <p class="certificate label">Certificate</p>
                                      <p class="certificate value">Certificate description</p>
                                  </div>
                              </div>

                        </div>


<!-- BIO -->

                        <div class="col graphic-bio">
                            <img src="../assets/img/Graphic_bio.svg">
                        </div>

                    </div>

                    <div v-if="response.profile.bio" class="bio">
                        <p v-for="bio in response.profile.bio.split(/\r?\n/)" :key="bio">{{bio}}</p>
                    </div>
                      <div v-else class="bio">
                          <p>Your bio</p>
                      </div>

            </div>


<!-- SUBJECTS SECTION -->

            <div id="section-subjects" class="tu-card">

                <img class="figure-subjects" src="../assets/img/subjects_figures.png">
                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Subjects</h2></div>
                </div>

                <div v-if="response.categories.length > 0">
                    <div class="row subjects-container">
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
                </div>

                  <div v-else>
                      <div class="row subjects-container">
                          <div class="col-md-6 subject-cards">
                              <div class="subjects border1">
                                  <p>Subject 1</p>
                                  <hr>
                                  <div class="subject-subcategories">
                                      <ul>
                                          <li>Add your subjects</li>
                                          <li>Add categories for each subject</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


<!-- MY STUDENTS -->

                <div class="my-students">
                    <font-awesome-icon class="icon" icon="users" />
                    <div class="label">My students are</div>
                    <div v-if="response.profile.studentsProfile" class="value">{{response.profile.studentsProfile.toLowerCase()}}</div>
                      <div v-else class="value">&lt; your selection &gt;</div>
                </div>

            </div>


<!-- RATES SECTION -->

            <div id="section-rates" class="tu-card">

                <img class="figure-terms" src="../assets/img/rates_figure.png">
                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Rates</h2></div>
                </div>

                <div class="row rates-container">
                    <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 col-12 items-all">

                        <div v-if="response.rates">
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
                        </div>

                          <div v-else>
                              <div class="row item">
                                  <div class="col-xl-4 col-lg-4 col-md-3 col-sm-3 col-3 rate-box">
                                      <div class="inner">$0</div>
                                  </div>
                                  <div class="col-xl-8 col-lg-8 col-md-9 col-sm-9 col-9 rate-comment">
                                      <div class="row">
                                          <p class="col top">per session</p>
                                          <div class="w-100"></div>
                                          <p class="col bottom">Rate comment</p>
                                      </div>
                                  </div>
                              </div>
                          </div>

                        <div v-if="response.profile.rateInfo.rateSectionComment" class="rates-additional-comment">{{response.profile.rateInfo.rateSectionComment}}</div>
                          <div v-else class="rates-additional-comment">Details available upon request</div>

                    </div>

                    <div class="col-xl-6 col-lg-5 col-md-5 col-sm-4 col-0 graphic-rates">
                        <img src="../assets/img/Rates_graphic.svg" />
                    </div>

                </div>


<!-- TERMS -->

                <div class="terms-container">
                    <div class="terms">

                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="globe" /></div>
                            <div class="col-11 text">
                                <div class="label">Online lessons:
                                    <div v-if="response.profile.firstName" class="value">
                                        <div v-if="response.profile.rateInfo.online" class="input">{{response.profile.rateInfo.onlineComment === null ? 'Yes' : response.profile.rateInfo.onlineComment}}</div>
                                        <div v-else class="input">No</div>
                                    </div>
                                      <div v-else class="value">
                                          <div class="input">Yes</div>
                                      </div>
                                </div>
                            </div>
                        </div>

                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="home" /></div>
                            <div class="col-11 text">
                                <div class="label">In-person lessons:
                                    <div v-if="response.profile.firstName" class="value">
                                        <div v-if="response.profile.rateInfo.inPerson" class="input">{{response.profile.rateInfo.inPersonComment === null ? 'Yes' : response.profile.rateInfo.inPersonComment}}</div>
                                        <div v-else class="input">No</div>
                                    </div>
                                      <div v-else class="value">
                                          <div class="input">Yes</div>
                                      </div>
                                </div>
                            </div>
                        </div>

                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="tag" /></div>
                            <div class="col-11 text">
                                <div class="label">Free consultation:
                                    <div v-if="response.profile.firstName" class="value">
                                        <div v-if="response.profile.rateInfo.freeConsultation" class="input">{{response.profile.rateInfo.freeConsultationComment === null ? 'Yes' : response.profile.rateInfo.freeConsultationComment}}</div>
                                        <div v-else class="input">No</div>
                                    </div>
                                      <div v-else class="value">
                                          <div class="input">Yes</div>
                                      </div>
                                </div>
                            </div>
                        </div>

                        <div class="row terms-item">
                            <div class="col-1 icon-container"><font-awesome-icon class="icon" icon="calendar-alt" /></div>
                            <div class="col-11 text">
                                <div class="label">Cancelation policy:
                                    <div v-if="response.profile.firstName" class="value">
                                        <div v-if="response.profile.rateInfo.cancellationPolicy" class="input">{{response.profile.rateInfo.cancellationPolicyComment === null ? '24h notice' : response.profile.rateInfo.cancellationPolicyComment}}</div>
                                        <div v-else class="input">No refunds</div>
                                    </div>
                                      <div v-else class="value">
                                          <div class="input">24h notice</div>
                                      </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


<!-- LOGO IF NO EXPERTISE SECTION -->

                <div v-if="(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)" class="tutomy-logo">
                  <p>Powered by</p>
                  <img src="../assets/img/logo2.png">
                </div>

            </div>


<!-- EXPERTISE SECTION -->

            <div id="section-expertise" class="tu-card" v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)">

                <div class="section-container">
                    <div class="icon"></div>
                    <div class="header"><h2>Expertise</h2></div>
                </div>


<!-- YOUTUBE -->

                <div v-if="response.profile.firstName">
                    <div v-if="response.profile.youtubeIntroLink" class="youtube-display">
                        <iframe width="560" height="315" :src="response.profile.youtubeLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                  <div v-else>
                      <div class="youtube-display cms"></div>
                  </div>


<!-- CAROUSEL -->

                <div class="expertise-arrows">
                    <div v-on:click="scroll('left')" class="left-arrow">
                        <img v-if="offset !== 0" src="../assets/img/arrow_left.svg">
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
                        </div>
                    </div>

                    <div v-on:click="scroll('right')" class="right-arrow">
                        <img v-if="offset + offsetWidth <scrollWidth" src="../assets/img/arrow_right.svg">
                    </div>

                </div>


<!-- LOGO -->

                <div class="tutomy-logo">
                  <p>Powered by</p>
                  <img src="../assets/img/logo2.png">
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

  export default {
    name: 'Profile',
    components: {

    },
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
                  { vmid: 'ogtype', property: 'og:type', content: 'website'}
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

        }
    },
      methods: {
          fetchData () {
              axios
                  .get('https://www.tutomy.com/api/tutors/' + this.$route.params.token)
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
              return require('../assets/img/icon_expertise' + number + '.svg')
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
