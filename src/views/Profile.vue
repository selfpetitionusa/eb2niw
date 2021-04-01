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
    <div class="tu-container">


<!-- LEFT SECTION -->

        <div class="row height">
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="left-section">
                    <img class="photo" :src="response.profile.photo"/>
                    <div class="name-section">
                        <div><h2 class="name">{{response.profile.firstName}}</h2></div>
                        <div><h2 class="name lastname">{{response.profile.lastName}}</h2></div>
                    </div>

                    <div class="subject-categories">{{response.categories.map(cat => cat.categoryName).join(' | ')}}</div>
                    <div class="short-bio"><p class="short-bio-line-1">Hi, my name is {{response.profile.firstName}}.</p><p class="short-bio-line-2">I tutor {{formatArray(response.categories.map(cat => cat.categoryName))}}.</p><p>Welcome to my website!</p></div>

                    <div class="social-links">
                        <ul>
                            <li v-if="response.profile.links.facebookLink" ><a :href="response.profile.links.facebookLink" class="facebook"><feather type="facebook"></feather></a></li>
                            <li v-if="response.profile.links.youtubeLink" ><a :href="response.profile.links.youtubeLink" class="youtube"><feather type="youtube"></feather></a></li>
                            <li v-if="response.profile.links.instagramLink" ><a :href="response.profile.links.instagramLink" class="instagram"><feather type="instagram"></feather></a></li>
                            <li v-if="response.profile.links.linkedInLink" ><a :href="response.profile.links.linkedInLink" class="linkedin"><feather type="linkedin"></feather></a></li>
                        </ul>
                    </div>

                    <hr>

                    <div class="btn-profile-container">
                        <a :href="'mailto:' + response.profile.email" class="btn btn-primary btn-profile" role="button">Contact {{response.profile.firstName}}</a>
                    </div>
                </div>
            </div>


<!-- MENU -->

            <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 height">
                <div class="tu-card-menu-container">
                    <div class="d-none d-lg-block menu">
                        <ul class="px-xl-5 px-1">
                            <li><a href="#section-about-me">about me</a></li>
                            <li><a href="#section-subjects">subjects</a></li>
                            <li><a href="#section-rates">rates</a></li>
                            <li v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)" ><a href="#section-expertise">expertise</a></li>
                        </ul>
                    </div>

<!-- ABOUT ME SECTION -->
                    <div class="tu-card-container">
                        <div id="section-about-me"  class="tu-card" >
                            <div><h2 class="section">{{response.profile.headline}}</h2></div>
                            <div>

                                    <div class="row education-container">
                                        <div class="col-xl-8 col-lg-9 col-md-8 col-sm-12 col-12 education-items-list">
                                            <div class="row education-items" v-for="school in response.schools" :key="school.value">
                                                <div class="col-2 icons-column">
                                                  <div class="icon-container">
                                                    <font-awesome-icon class="icon" icon="graduation-cap" />
                                                  </div>
                                                </div>
                                                <div class="col-10 education-items-input">
                                                    <p class="school education-item-label">{{school.label}}</p>
                                                    <p class="school education-item-value">{{school.value}}</p>
                                                </div>
                                            </div>

                                            <div class="row education-items" v-for="certificate in response.certificates" :key="certificate.value">
                                                <div class="col-2 icons-column">
                                                  <div class="icon-container">
                                                    <font-awesome-icon class="icon" icon="star-of-life" />
                                                  </div>
                                                </div>
                                                <div class="col-10 education-items-input">
                                                    <p class="certificate education-item-label">{{certificate.label}}</p>
                                                    <p class="certificate education-item-value">{{certificate.value}}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col education-items-input">
                                                <img class="graphic-bio" src="../assets/img/Graphic_bio.svg">
                                        </div>
                                    </div>
                            </div>
                            <div class="bio-container">
                                <p class="bio" v-for="bio in response.profile.bio.split(/\r?\n/)" :key="bio" >{{bio}}</p>
                            </div>
                        </div>


<!-- SUBJECTS SECTION -->

                        <div id="section-subjects" class="tu-card" >
                            <img class="figure-subjects" src="../assets/img/subjects_figures.png">
                            <div class="section-container">
                                <div class="section-icon"></div>
                                <div class="section-header"><h2>Subjects</h2></div>
                            </div>

                            <div class="row subjects-container">
                                <div class="col-md-6 subjects-card"  v-for="(category, index) in response.categories" :key="category.id">
                                    <div class="subject-card" :class="[index % 2 === 0 ? 'subject-border1' : 'subject-border2']">
                                        <p class="subjects">{{category.categoryName}}</p>

                                        <hr>

                                       <div class="subject-subcategories-container">
                                          <ul class="subject-subcategories">
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


                            <div class="my-students-container">
                                <font-awesome-icon class="my-students-icon" icon="users" />
                                <div class="my-students-text">My students are</div>
                                <div class="my-students-input">{{response.profile.studentsProfile.toLowerCase()}}</div>
                            </div>
                        </div>


<!-- RATES SECTION -->

                        <div id="section-rates" class="tu-card" >
                            <div class="figure-rates">
                                <img src="../assets/img/rates_figure.png">
                            </div>
                            <div class="section-container">
                                <div class="section-icon"></div>
                                <div class="section-header"><h2>Rates</h2></div>
                            </div>


                            <div class="row rates-container">
                                <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 col-12 rates-items-list">

                                        <div class="row rates-items" v-for="rate in response.rates" :key="rate.id">
                                            <div class="col-xl-4 col-lg-4 col-md-3 col-sm-3 col-3 rate-box-container">
                                              <div class="rate-box">{{rate.currency}}{{rate.amount}}</div>
                                            </div>
                                            <div class="col-xl-8 col-lg-8 col-md-9 col-sm-9 col-9 rate-comments">
                                              <div class="row">
                                                <p class="col rate-comment-top">{{rate.commentTop}}</p>
                                                    <div class="w-100"></div>
                                                    <p class="col rate-comment-bottom" v-if="rate.commentBottom" >{{rate.commentBottom}}</p>
                                                    <p class="col rate-comment-bottom" v-if="rate.commentBottom === null && response.rates.length === 1" >Standard rate</p>
                                              </div>
                                            </div>
                                        </div>

                                            <div class="rate-additional-comment" v-if="response.profile.rateInfo.rateSectionComment">
                                                {{response.profile.rateInfo.rateSectionComment}}
                                            </div>
                                            <div class="rate-section-comment" v-else>
                                                Details available upon request
                                            </div>
                                    </div>


                                <div class="col-xl-6 col-lg-5 col-md-5 col-sm-4 col-0 rates-graphic-container">
                                    <img class="graphic-rates" src="../assets/img/Rates_graphic.svg" />
                                </div>
                            </div>


<!-- TERMS -->
                            <div class="terms-container">
                                <div class="terms-box">
                                    <div class="row terms-item">
                                    <div class="col-1 terms-item-icon-container">
                                        <font-awesome-icon class="terms-item-icon" icon="globe" />
                                    </div>
                                    <div class="col-11 terms-item-container">
                                          <div class="terms-item-label">Online lessons:
                                            <div class="terms-item-value">
                                              <div v-if="response.profile.rateInfo.online" class="terms-item-value-input">
                                                 Yes
                                              </div>
                                              <div v-else class="terms-item-value-input">
                                                  None
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row terms-item">
                                    <div class="col-1 terms-item-icon-container">
                                        <font-awesome-icon class="terms-item-icon" icon="home" />
                                    </div>
                                    <div class="col-11 terms-item-container">
                                          <div class="terms-item-label">In-person lessons:
                                            <div class="terms-item-value">
                                              <div v-if="response.profile.rateInfo.inPerson" class="terms-item-value-input">
                                                  {{response.profile.rateInfo.inPersonComment === null ? 'Yes' : response.profile.rateInfo.inPersonComment}}
                                              </div>
                                              <div v-else class="terms-item-value-input">
                                                  None
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                <div class="row terms-item">
                                    <div class="col-1 terms-item-icon-container">
                                        <font-awesome-icon class="terms-item-icon" icon="tag" />
                                    </div>
                                    <div class="col-11 terms-item-container">
                                        <div class="terms-item-label">Free consultation:
                                          <div class="terms-item-value">
                                            <div v-if="response.profile.rateInfo.freeConsultation" class="terms-item-value-input">
                                                {{response.profile.rateInfo.freeConsultationComment === null ? 'Yes' : response.profile.rateInfo.freeConsultationComment}}
                                            </div>
                                            <div v-else class="terms-item-value-input">
                                                None
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row terms-item">
                                    <div class="col-1 terms-item-icon-container">
                                        <font-awesome-icon class="terms-item-icon" icon="calendar-alt" />
                                    </div>
                                    <div class="col-11 terms-item-container">
                                        <div class="terms-item-label">Cancelation policy:
                                          <div class="terms-item-value">
                                            <div v-if="response.profile.rateInfo.cancellationPolicy" class="terms-item-value-input">
                                                {{response.profile.rateInfo.cancellationPolicyComment === null ? 'Yes' : response.profile.rateInfo.cancellationPolicyComment}}
                                            </div>
                                            <div v-else class="terms-item-value-input">
                                                None
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div v-if="(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)" class="tutomy-logo">
                              <p>Powered by</p><img src="../assets/img/logo2.png">
                            </div>

                        </div>


<!-- EXPERTISE SECTION -->

                        <div id="section-expertise" class="tu-card" v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)">
                            <div class="section-container">
                                <div class="section-icon"></div>
                                <div class="section-header"><h2>Expertise</h2></div>
                            </div>

                            <div v-if="response.profile.youtubeIntroLink" class="youtube-container">
                                <iframe width="560" height="315" :src="response.profile.youtubeLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div class="youtube">
                                <div v-on:click="scroll('left')" class="youtube-click">
                                    <img v-if="offset !== 0" src="../assets/img/arrow_left.svg">
                                </div>


                                <div id="problems" class="my-carousel" v-on:scroll.passive='handleScroll'>
                                    <div class="carousel-container">
                                        <div :id="'problem-card'+ index" class="problem-card" v-for="(problemCard, index) in response.problemCards" :key="problemCard.id" >
                                            <div class="carousel-icon">
                                                <img :src="getImgUrl(index)" >
                                            </div>

                                            <div class="problem-card-input">
                                                <div>
                                                    <p class="problem-card-question">{{problemCard.question}}</p>
                                                </div>
                                                <div>
                                                    <p class="problem-card-answer">{{problemCard.answer}}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div v-on:click="scroll('right')"  class="carousel-right-arrow">
                                    <img v-if="offset + offsetWidth < scrollWidth"  src="../assets/img/arrow_right.svg">
                                </div>
                            </div>

                            <div class="tutomy-logo">
                              <p>Powered by</p><img src="../assets/img/logo2.png">
                            </div>

                        </div>
                      </div>
                </div>
            </div>
          </div>
        </div>
  </div>

</template>



<script>
    import axios from 'axios';

  export default {
    name: 'Profile',
    components: {

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
      mounted () {
          axios
              .get('https://www.miragenetics.com/api/profiles/' + this.$route.params.token)
              .then(res => this.response = res.data)
              .then(() => this.scrollWidth = document.getElementById('problems').scrollWidth)
              .then(() => this.offsetWidth = document.getElementById('problems').offsetWidth)
      },
      methods: {
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
              const number =  index % 6;
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
              }
        }
  }

</script>
