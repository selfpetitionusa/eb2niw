<template>

  <div class="d-flex" style="background-color:#f9f6f6; width: 100%; height:100%; position: relative; overflow-x: hidden; overflow-y: hidden">
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

    <div class="background-rectangular" style="position: absolute"></div>
    <div class="tu-container" style="height: 100%; margin: auto">


        <div class="row" style="height: 100%">
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                <div class="left-side">
                    <img class="photo" :src="response.profile.photo" style="position: absolute; left:50%; margin-left: -73px; top:-64px; border: solid 7px white; border-radius: 50%; box-shadow: 1px 4px 6px #888888;" />
                    <h2 class="name" style="font-weight: 600; text-align: center">{{response.profile.firstName}} {{response.profile.lastName}}</h2>
                    <div class="subject-categories" style="margin: 0px; font-weight: 500; text-align: center; color: #0E314C">{{response.categories.map(cat => cat.categoryName).join(' | ')}}</div>
                    <div class="short-bio" style="font-weight: 400; text-align: center"><p class="line-1" style="margin-block-end: 0px">Hi, my name is {{response.profile.firstName}}</p><p class="line-2">and I'm {{response.categories.map(cat => cat.categoryName)[0]}} tutor.</p><p>Welcome to my website!</p></div>

                    <div class="social-links" style="margin-top: 20px; display: flex; justify-content: center">
                        <ul>
                            <li v-if="response.profile.links.facebookLink" ><a :href="response.profile.links.facebookLink" class="facebook"><feather type="facebook"></feather></a></li>
                            <li v-if="response.profile.links.youtubeLink" ><a :href="response.profile.links.youtubeLink" class="youtube"><feather type="youtube"></feather></a></li>
                            <li v-if="response.profile.links.instagramLink" ><a :href="response.profile.links.instagramLink" class="instagram"><feather type="instagram"></feather></a></li>
                            <li v-if="response.profile.links.linkedInLink" ><a :href="response.profile.links.linkedInLink" class="linkedin"><feather type="linkedin"></feather></a></li>
                        </ul>
                    </div>

                    <hr style="border-style: solid; border-color: rgba(84, 87, 193, .3)">

                    <div style="margin-top: 25px; display: flex; justify-content: center">
                        <a :href="'mailto:' + response.profile.email" class="btn btn-primary btn-profile" role="button">Contact {{response.profile.firstName}}</a>
                    </div>
                </div>
            </div>


            <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12" style="height: 100%;">
                <div style="position: relative; height: 100%;">
                    <div class="d-none d-lg-block" style="height: 37px; background-color: white; border-radius: 15px 15px 0 0; padding: 0px 4rem" >
                        <ul class="test px-xl-5 px-1" style="display: flex; justify-content: space-around; align-items: center; height: 100%; font-weight: 500; color: #6084A4;">
                            <li style="display: inline-block;"><a href="#section-about-me">about me</a></li>
                            <li style="display: inline-block;"><a href="#section-subjects">subjects</a></li>
                            <li style="display: inline-block;"><a href="#section-rates">rates</a></li>
                            <li style="display: inline-block;" v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)" ><a href="#section-expertise">expertise</a></li>
                        </ul>
                    </div>


                    <div class="tu-card-container" >
                        <div id="section-about-me"  class="tu-card" >
                            <div><h2 class="section" style="font-weight: 600">{{response.profile.headline}}</h2></div>
                            <div style="margin-top: 1.5rem">

                                    <div class="row" style="margin: 0px; display: flex; align-items: center">
                                        <div class="col-xl-8 col-lg-9 col-md-8 col-sm-12 col-12" style="padding: 0px">
                                            <div class="row" style="margin: 5px 0px 15px;"  v-for="school in response.schools" :key="school.value">
                                                <div class="col-2" style="display: flex; justify-content: flex-end; padding: 0px">
                                                  <div style="width: 35px; display: flex; justify-content: center">
                                                    <font-awesome-icon style="font-size: 30px; color:#5457C1" icon="graduation-cap" />
                                                  </div>
                                                </div>
                                                <div class="col-10" style="padding: 0px 0px 0px 10px">
                                                    <p class="school" style="margin: 0px; line-height: 20px; font-weight: 600; color: #0E314C">{{school.label}}</p>
                                                    <p class="school" style="margin: 0px; line-height:17px; color: #6084A4">{{school.value}}</p>
                                                </div>
                                            </div>

                                            <div class="row" style="margin: 0px 0px 15px" v-for="certificate in response.certificates" :key="certificate.value">
                                                <div class="col-2" style="display: flex; justify-content: flex-end; padding: 0px">
                                                  <div style="width: 35px; display: flex; justify-content: center">
                                                    <font-awesome-icon style="font-size: 30px; color:#5457C1" icon="star-of-life" />
                                                  </div>
                                                </div>
                                                <div class="col-10" style="padding: 0px 0px 0px 10px">
                                                    <p class="certificate" style="margin: 0px; line-height: 20px; font-weight: 600; color: #0E314C">{{certificate.label}}</p>
                                                    <p class="certificate" style="margin-top: 3px; line-height:17px; color: #6084A4">{{certificate.value}}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col" style="padding: 0px 0px 0px 10px">
                                                <img class="graphic-bio" src="../assets/img/Graphic_bio.svg">
                                        </div>
                                    </div>
                            </div>
                            <div style="margin-top: 1rem">
                                <p style="color: #0E314C; font-size: 14px; margin: 0px; padding: 0px; line-height: 22px;" v-for="bio in response.profile.bio.split(/\r?\n/)" :key="bio" >{{bio}}</p>
                            </div>
                        </div>


                        <div id="section-subjects" class="tu-card" >
                            <img class="figure-subjects" src="../assets/img/subjects_figures.png">
                            <div style="display:flex; align-items: center">
                                <div style="background-color: #DF7870; width: 8px; height: 35px;"></div>
                                <div style="margin-left: 10px; padding-top: 5px"><h2 class="section" style="font-weight: 600">Subjects</h2></div>
                            </div>

                            <div class="row subjects-container">
                                <div class="col-md-6 subjects-card"  v-for="(category, index) in response.categories" :key="category.id">
                                    <div style="background-color: white; max-width: 300px; box-sizing: border-box; box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1); border-radius: 5px; height: 100%; margin: auto" :style="[$vssWidth <= 768 ? index % 2 === 0  ? {'border': '1px dashed rgba(84, 87, 193, 0.3)'} : {'border': '1px dashed rgba(223, 120, 112, 0.3)'} : {'border': '1px dashed rgba(84, 87, 193, 0.3)'}]">
                                        <p class="subjects" style="color: #0E314C; text-align: center; margin: 25px 0px 0px; font-weight: 600;">{{category.categoryName}}</p>

                                        <hr style="width: 60%; border: 1px solid rgba(223, 120, 112, 0.3); margin: 5px auto 10px">

                                       <div style="text-align: center; font-size: 14px; line-height: 17px; color: #0E314C">
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


                            <div class="my-students">
                                <font-awesome-icon style="font-size: 35px; color:#5457C1" icon="users" /> <div style="margin-left: 10px; font-size: 16px; color: #0E314C">My students are</div> <div style="margin-left: 7px; font-size: 16px; font-weight: 600; color: #5457C1">{{response.profile.studentsProfile.toLowerCase()}}</div>
                            </div>
                        </div>


                        <div id="section-rates" class="tu-card" >
                            <div class="figure-rates">
                                <img src="../assets/img/rates_figure.png">
                            </div>
                            <div style="display:flex; align-items: center">
                                <div style="background-color: #DF7870; width: 8px; height: 35px;"></div>
                                <div style="margin-left: 10px; padding-top: 5px"><h2 class="section" style="font-weight: 600">Rates</h2></div>
                            </div>


                            <div class="row rates-section">
                                <div class="col-xl-6 col-lg-7 col-md-7 col-sm-12 col-12" style="margin: 30px 0px 0px; padding: 0px">

                                        <div class="row" style="margin-bottom: 10px" v-for="rate in response.rates" :key="rate.id">
                                            <div class="col-xl-4 col-lg-4 col-md-3 col-sm-2 col-3" style="display: flex; justify-content: flex-end">
                                              <div class="rate-box" style="background: #5457C1; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 5px; font-weight: 400; text-align: center; color: white; padding: 5px 0px">200000</div>

                                            </div>
                                            <div class="col-xl-8 col-lg-8 col-md-9 col-sm-10 col-9" style="padding: 0px">
                                              <div class="row">
                                                <p class="col" style="margin-bottom: 5px; padding: 0px 0px 0px 10px; line-height: 18px; color: #6084A4; font-size: 14px">{{rate.commentTop}}</p>
                                                    <div class="w-100"></div>
                                                  <p class="col bottom-comment" style="padding: 0px 0px 0px 10px; line-height: 15px; color: #0E314C"  v-if="rate.commentBottom && response.rates.length !== 1" >{{rate.commentBottom}}</p>
                                                  <p class="col bottom-comment" style="padding: 0px 0px 0px 10px; line-height: 15px; color: #0E314C"  v-if="response.rates.length === 1" >Standard rate</p>
                                              </div>
                                            </div>
                                        </div>

                                            <div class="rate-section-comment" v-if="response.profile.rateInfo.rateSectionComment" style="color: #6084A4; font-size: 14px; line-height: 22px" >
                                                {{response.profile.rateInfo.rateSectionComment}}
                                            </div>
                                            <div class="rate-section-comment" v-else style="color: #6084A4; font-size: 14px; line-height: 22px" >
                                                Details available upon request
                                            </div>
                                    </div>


                                <div class="col-xl-6 col-lg-5 col-md-5 col-sm-0 col-0" style="display: flex; align-items: center; padding-left: 10px">
                                    <img class="graphic-rates" src="../assets/img/Rates_graphic.svg" />
                                </div>
                            </div>



                            <div class="terms-container">
                                <div class="terms">
                                    <div class="row terms-row">
                                    <div class="col-1" style="display: flex; justify-content: center; align-items: center; padding: 0px">
                                        <font-awesome-icon style="font-size: 30px; color:#5457C1" icon="globe" />
                                    </div>
                                    <div class="col-11" style="display: flex; align-items: center; padding: 0rem 0.3rem 0rem 0.7rem;">
                                          <div style="line-height: 15px; font-size: 14px; color: #0E314C">Online lessons:
                                            <div class="terms-column" style="line-height: 15px; font-size: 14px; color: #6084A4">
                                              <div v-if="response.profile.rateInfo.online" style="display: inline;">
                                                 Yes
                                              </div>
                                              <div v-else style="display: inline;">
                                                  None
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row terms-row">
                                    <div class="col-1" style="display: flex; justify-content: center; align-items: center; padding: 0px">
                                        <font-awesome-icon style="font-size: 30px; color:#5457C1" icon="home" />
                                    </div>
                                    <div class="col-11" style="display: flex; align-items: center; padding: 0rem 0.3rem 0rem 0.7rem;">
                                          <div style="line-height: 15px; font-size: 14px; color: #0E314C">In-person lessons:
                                            <div class="terms-column" style="line-height: 15px; font-size: 14px; color: #6084A4">
                                              <div v-if="response.profile.rateInfo.inPerson" style="display: inline">
                                                  {{response.profile.rateInfo.inPersonComment === null ? 'Yes' : response.profile.rateInfo.inPersonComment}}
                                              </div>
                                              <div v-else style="display: inline;">
                                                  None
                                              </div>
                                            </div>
                                          </div>
                                      </div>
                                    </div>
                                <div class="row terms-row">
                                    <div class="col-1" style="display: flex; justify-content: center; align-items: center; padding: 0px">
                                        <font-awesome-icon style="font-size: 30px; color:#5457C1" icon="tag" />
                                    </div>
                                    <div class="col-11" style="display: flex; align-items: center; padding: 0rem 0.3rem 0rem 0.7rem;">
                                        <div style="line-height: 15px; font-size: 14px; color: #0E314C">Free consultation:
                                          <div class="terms-column" style="line-height: 15px; font-size: 14px; color: #6084A4">
                                            <div v-if="response.profile.rateInfo.freeConsultation" style="display: inline">
                                                {{response.profile.rateInfo.freeConsultationComment === null ? 'Yes' : response.profile.rateInfo.freeConsultationComment}}
                                            </div>
                                            <div v-else style="display: inline;">
                                                None
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row terms-row">
                                    <div class="col-1" style="display: flex; justify-content: center; align-items: center; padding: 0px">
                                        <font-awesome-icon style="font-size: 30px; color:#5457C1" icon="calendar-alt" />
                                    </div>
                                    <div class="col-11" style="display: flex; align-items: center; padding: 0rem 0.3rem 0rem 0.7rem;">
                                        <div style="line-height: 15px; font-size: 14px; color: #0E314C">Cancelation policy:
                                          <div class="terms-column" style="line-height: 15px; font-size: 14px; color: #6084A4">
                                            <div v-if="response.profile.rateInfo.cancellationPolicy" style="display: inline">
                                                {{response.profile.rateInfo.cancellationPolicyComment === null ? 'Yes' : response.profile.rateInfo.cancellationPolicyComment}}
                                            </div>
                                            <div v-else style="display: inline;">
                                                None
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>





                        <div id="section-expertise" class="tu-card" v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)">
                            <div style="display:flex; align-items: center">
                                <div style="background-color: #DF7870; width:8px; height: 35px;"></div>
                                <div style="margin-left: 10px; padding-top: 5px"><h2 class="section" style="font-weight: 600">Expertise</h2></div>
                            </div>

                            <div v-if="response.profile.youtubeIntroLink" style="margin-top: 1.5rem; display: flex; justify-content: center">
                                <iframe width="560" height="315" :src="response.profile.youtubeLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <div v-on:click="scroll('left')" style="margin-right:10px; flex: 0 0 20px; margin-top: 45px;" v-if="response.problemCards.length > 3">
                                    <img  src="../assets/img/arrow_left.svg">
                                </div>

                                <div id="problems" class="my-carousel" style="overflow-y: scroll">
                                    <div style="margin-top: 4.5rem; display: flex;" :style="[response.problemCards.length < 3 ? {'justify-content': 'center'} : {}]">
                                        <div style="width: 280px; min-height: 280px; margin: 5px; background: #F6F8FE; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; flex-shrink: 0; position: relative" v-for="(problemCard, index) in response.problemCards.concat(response.problemCards).concat(response.problemCards)" :key="problemCard.id" >
                                            <div style="position: absolute; padding: 13px; background-color: white; border: 1px solid rgba(223, 120, 112, 0.3);box-sizing: border-box; border-radius: 50%; top: -40px; left: 30px; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));">
                                                <img :src="getImgUrl(index)" >
                                            </div>

                                            <div style="margin-top: 60px; margin-left: 11px; margin-right: 24px; display: flex; flex-direction: column">
                                                <div>
                                                    <p style="font-size: 14px; line-height: 22px; color: #0E314C; font-weight: 600; margin: 0; padding: 0px; font-family: Poppins">{{problemCard.question}}</p>
                                                </div>
                                                <div style="margin-top: 15px; padding-bottom: 2rem">
                                                    <p style="font-family: Poppins; font-size: 14px; line-height: 22px; color: #6084A4">{{problemCard.answer}}</p>
                                                </div>
    <!--                                            <div style="position: absolute; bottom: 20px; left: 11px;">-->
    <!--                                                <p style="color:#DF7870; font-size: 14px;">Read more -></p>-->
    <!--                                            </div>-->
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div v-on:click="scroll('right')"  style="margin-left:10px; flex: 0 0 20px;margin-top: 45px;" v-if="response.problemCards.length > 3">
                                    <img src="../assets/img/arrow_right.svg">
                                </div>
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
    import VueScreenSize from 'vue-screen-size'

  export default {
    name: 'Profile',
    mixins: [VueScreenSize.VueScreenSizeMixin],
    components: {

    },
    data () {
        return {
            response: {
                profile: {rateInfo: {}, links: {}, bio: '', studentsProfile: ''},
                categories: [],
                problemCards: []
            },
            offset: 0
        }
    },

      mounted () {
          axios
              .get('https://www.miragenetics.com/api/profiles/' + this.$route.params.token)
              .then(res => this.response = res.data)
      },
      methods: {
          getImgUrl: function (index) {
              const number =  index % 6;
              return require('../assets/img/icon_expertise' + number + '.svg')
          },
          scroll: function (direction) {
            const p = document.getElementById('problems');
            if(direction === 'left') {
                if(p.scrollLeft - p.offsetWidth < 0) {
                    this.offset = 0;
                } else {
                    this.offset = p.scrollLeft - p.offsetWidth;
                }
                p.scrollTo({left: this.offset, behavior: 'smooth'})
            } else {
                if(p.scrollLeft + p.offsetWidth >= p.scrollWidth)
                    this.offset = p.scrollWidth - p.offsetWidth;
                else
                    this.offset = p.scrollLeft + p.offsetWidth;
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
