<template>
  <div class="d-flex" style="background-color:#f9f6f6; width: 100%; height:100%; position: relative; overflow-x: hidden">
      <div class="background-rectangular" style="position: absolute"></div>
        <div class="tu-container" style="height: 100%; margin: auto">
          <div class="row" style="height: 100%">

            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12" >
                <div style="background-color:white; border-radius: 12px; position: relative; padding: 10px 10px 40px">
                    <img class="photo" src="../assets/img/photo.png" style="position: absolute; left:50%; margin-left: -73px; top:-64px; border: solid 7px white; border-radius: 50%; box-shadow: 1px 4px 6px #888888;" />
                    <h2 class="name" style="line-height: 32px; font-weight: 600; text-align: center">{{response.profile.firstName}} {{response.profile.lastName}}</h2>
                    <div class="subjectCategories" style="margin: 0px; font-weight: 500; text-align: center; color: #0E314C">{{response.categories.map(cat => cat.categoryName).join(' | ')}}</div>
                    <div class="shortBio" style="font-weight: 400; text-align: center"><p class="lineOne" style="margin-block-end: 0px">Hi, my name is {{response.profile.firstName}}</p><p class="lineTwo">and I'm {{response.categories.map(cat => cat.categoryName)[0]}} tutor.</p><p>Welcome to my website!</p></div>
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
                        <button type="submit" class="btn btn-primary btn-profile">Contact {{response.profile.firstName}}</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-9  col-lg-8 col-md-12 col-sm-12 col-12" style="height: 100%;">
                <div style="position: relative; height: 100%;">
                    <div class="d-none d-sm-none d-lg-block" style="height: 37px; background-color: white; border-radius: 15px 15px 0 0; padding: 0px 4rem" >
                        <ul class="test px-xl-5 px-1" style="display: flex; justify-content: space-around; align-items: center; height: 100%; font-size: 16px; font-weight: 500; color: #6084A4;">
                            <li style="display: inline-block;"><a href="#section-about-me">about me</a></li>
                            <li style="display: inline-block;"><a href="#section-subjects">subjects</a></li>
                            <li style="display: inline-block;"><a href="#section-rates">rates</a></li>
                            <li style="display: inline-block;" v-if="!(response.profile.youtubeIntroLink === null && response.problemCards.length === 0)" ><a href="#section-expertise">expertise</a></li>
                        </ul>

                    </div>
                    <div class="tu-card-container" >
                        <div id="section-about-me"  class="tu-card" >
                            <div><h2 class="section" style="font-weight: 600">{{response.profile.headline}}</h2></div>
                            <div style="margin-top: 20px; margin-right: 50px;">

                                    <div class="row" style="display: flex; align-items: center; margin: 0px">
                                        <div class="col-xl-8 col-lg-9 col-md-9 col-sm-12 col-12" style="padding: 0px">
                                            <div class="row" style="display: flex; align-items: center; margin: 5px 0px 15px;"  v-for="school in response.schools" :key="school.value">
                                                <div class="col-2" style="display: flex; justify-content: flex-end; padding: 0px">
                                                    <div style="width: 35px; display: flex; justify-content: center">
                                                    <font-awesome-icon style="font-size: 30px; color:#5457C1" class="font-icon" icon="graduation-cap" />
                                                    </div>
                                                </div>
                                                <div class="col-10">
                                                    <p style="margin: 0px; line-height: 20px; font-size: 16px; font-weight: 600; color: #0E314C">{{school.label}}</p>
                                                    <p style="margin: 0px; line-height:17px; font-size: 16px; color: #6084A4">{{school.value}}</p>
                                                </div>
                                            </div>

                                            <div class="row" style="display: flex; align-items: center; margin: 0px 0px 15px" v-for="certificate in response.certificates" :key="certificate.value">
                                                <div class="col-2" style="display: flex; justify-content: flex-end; padding: 0px">
                                                    <div style="width: 35px; display: flex; justify-content: center">
                                                      <font-awesome-icon style="font-size: 30px; color:#5457C1" class="font-icon" icon="star-of-life" />
                                                    </div>
                                                </div>
                                                <div class="col-10">
                                                    <p style="margin: 0px; line-height: 20px; font-size: 16px; font-weight: 600; color: #0E314C">{{certificate.label}}</p>
                                                    <p style="margin-top: 3px; line-height:17px; font-size: 16px; color: #6084A4">{{certificate.value}}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col" style="display: flex; justify-content: flex-end; padding: 0px">
                                            <div class="bioGraphic">
                                                <img src="../assets/img/Graphic_bio.svg" />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div style="margin-top: 15px">
                                <p style="color: #0E314C; font-size: 14px; margin: 0px; padding: 0px; line-height: 22px;" v-for="bio in response.profile.bio.split(/\r?\n/)" :key="bio" >{{bio}}</p>
                            </div>
                        </div>


                        <div id="section-subjects" class="tu-card" >
                            <div style="display:flex; align-items: center">
                                <div style="background-color: #DF7870; width: 8px; height: 35px;"></div>
                                <div style="margin-left: 10px; padding-top: 5px"><h2 class="section" style="font-weight: 600">Subjects</h2></div>
                            </div>

                            <div style="margin-top: 40px; display: flex; justify-content: center; padding: 10px" class="row"  >
                                <div class="col-md-4"  v-for="category in response.categories" :key="category.id" style="padding: 20px 0px">
                                    <div style="margin: 5px; border: 1px dashed rgba(84, 87, 193, 0.3);box-sizing: border-box;box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);border-radius: 5px;height: 100%">
                                        <p style="color: #0E314C; text-align: center; margin-top: 30px; margin-bottom: 10px; font-weight: 600; font-size: 18px;">{{category.categoryName}}</p>
                                        <hr style="width: 60%; border: 1px solid rgba(223, 120, 112, 0.3)">

                                       <div class="ul-icon" style="font-size: 14px; line-height: 17px; color: #0E314C;">
                                           <div style="display: flex; padding: 5px 25px 10px 35px" v-if="category.subcategoryName1">
                                                <img width="22px" height="22px" src="../assets/img/tick_icon.png"/>  <div v-if="category.subcategoryName1">{{category.subcategoryName1}}</div>
                                           </div>
                                           <div style="display: flex; padding: 5px 25px 10px 35px" v-if="category.subcategoryName2">
                                                <img width="22px" height="22px" src="../assets/img/tick_icon.png"/> <div v-if="category.subcategoryName2">{{category.subcategoryName2}}</div>
                                           </div>
                                           <div style="display: flex; padding: 5px 25px 10px 35px" v-if="category.subcategoryName3">
                                                <img width="22px" height="22px" src="../assets/img/tick_icon.png"/> <div v-if="category.subcategoryName3">{{category.subcategoryName3}}</div>
                                           </div>
                                           <div style="display: flex; padding: 5px 25px 10px 35px" v-if="category.subcategoryName4">
                                                <img width="22px" height="22px" src="../assets/img/tick_icon.png"/> <div v-if="category.subcategoryName4">{{category.subcategoryName4}}</div>
                                           </div>
                                           <div style="display: flex; padding: 5px 25px 10px 35px" v-if="category.subcategoryName5">
                                                <img width="22px" height="22px" src="../assets/img/tick_icon.png"/> <div v-if="category.subcategoryName5">{{category.subcategoryName5}}</div>
                                           </div>
                                           <div style="display: flex; padding: 5px 25px 10px 35px" v-if="category.subcategoryName6">
                                                <img  width="22px" height="22px" src="../assets/img/tick_icon.png"/> <div v-if="category.subcategoryName6">{{category.subcategoryName6}}</div>
                                           </div>
                                           <div style="display: flex; padding: 5px 25px 10px 35px" v-if="category.subcategoryName7">
                                                <img width="22px" height="22px" src="../assets/img/tick_icon.png"/> <div >{{category.subcategoryName7}}</div>
                                           </div>
                                       </div>
                                    </div>
                                </div>


                            </div>
                            <div style="display: flex; justify-content: center; margin-top: 60px; margin-bottom: 10px; align-items: center">

                                <img src="../assets/img/students-icon.svg"/> <div style="margin-left:7px; font-size: 16px; color: #0E314C">My students are</div> <div style="margin-left:7px; font-size: 16px; font-weight: 600; color: #5457C1">{{response.profile.studentsProfile.toLowerCase()}}</div>
                            </div>
                        </div>
                        <div id="section-rates" class="tu-card" >
                            <div style="display:flex; align-items: center">
                                <div style="background-color: #DF7870; width: 8px; height: 35px;"></div>
                                <div style="margin-left: 10px; padding-top: 5px"><h2 class="section" style="font-weight: 600">Rates</h2></div>
                            </div>

                            <div style="margin-left:50px;">
                                <div style="display: flex;margin-top: 30px;" >
                                    <div>
                                        <div style="display: flex; align-items: flex-start; margin-bottom: 10px" v-for="rate in response.rates" :key="rate.id">
                                            <div style="background: #5457C1; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 5px; min-width: 80px; font-weight: 400; font-size: 28px; text-align: center; color: white; padding: 5px 0px">{{rate.currency}}{{rate.amount}}</div>
                                            <div style="margin-left: 7px;">
                                                <p style="width: 20rem; margin-bottom: 5px; line-height: 18px; color: #6084A4; font-size: 14px">{{rate.commentTop}}</p>
                                                <p class="bottomComment" style="width: 20rem; margin: 0px; line-height: 15px; color: #0E314C"  v-if="rate.commentBottom" >{{rate.commentBottom}}</p>
                                            </div>

                                        </div>

                                        <div v-if="response.profile.rateInfo.rateSectionComment" style="display:flex; width: 100%; justify-content: flex-start; color: #6084A4; font-size: 14px; margin-top: 30px; line-height: 22px; padding: 0px 40px 0px 0px" >
                                            {{response.profile.rateInfo.rateSectionComment}}
                                        </div>


                                    </div>
                                    <div style="display:flex; width: 100%; justify-content: flex-start">
                                        <div>
                                            <img src="../assets/img/Rates_graphic.svg" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div style="margin: 59px 110px 0; border: 1px dashed #F2F2F2; box-sizing: border-box; box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);border-radius: 5px; padding: 24px 39px 26px">
                                <div style="display: flex; padding: 5px; align-items: center">
                                    <img src="../assets/img/Globe_icon.svg"/><div style="min-width: 135px; line-height: 15px; margin-left: 7px; font-size: 14px; color: #0E314C">Online lessons:</div>
                                    <div style="line-height: 15px; margin-left: 7px; font-size: 14px; color: #6084A4" >
                                        <div v-if="response.profile.rateInfo.online">
                                           Yes
                                        </div>
                                        <div v-else>
                                            None
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex; padding: 5px; align-items: center">
                                    <img src="../assets/img/House_icon.svg"/> <div style="min-width: 135px; line-height: 15px; margin-left: 7px; font-size: 14px; color: #0E314C">In-person lessons:</div>
                                    <div style="line-height: 15px; margin-left: 7px; font-size: 14px; color: #6084A4" >
                                        <div v-if="response.profile.rateInfo.inPerson">
                                            {{response.profile.rateInfo.inPersonComment === null ? 'Yes' : response.profile.rateInfo.inPersonComment}}
                                        </div>
                                        <div v-else >
                                            None
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex; padding: 5px; align-items: center">
                                    <img src="../assets/img/Tag_icon.svg"/> <div style="min-width: 135px; line-height: 15px; margin-left: 7px; font-size: 14px; color: #0E314C">Free consultation:</div>
                                    <div style="line-height: 15px; margin-left: 7px; font-size: 14px; color: #6084A4" >
                                        <div v-if="response.profile.rateInfo.freeConsultation">
                                            {{response.profile.rateInfo.freeConsultationComment === null ? 'Yes' : response.profile.rateInfo.freeConsultationComment}}
                                        </div>
                                        <div v-else >
                                            None
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex; padding: 5px;align-items: center">
                                    <img src="../assets/img/Calendar_icon.svg"/> <div style="min-width: 135px; line-height: 15px; margin-left: 7px; font-size: 14px; color: #0E314C">Cancelation policy:</div>
                                    <div style="line-height: 15px; margin-left: 7px; font-size: 14px; color: #6084A4" >
                                        <div v-if="response.profile.rateInfo.cancellationPolicy">
                                            {{response.profile.rateInfo.cancellationPolicyComment === null ? 'Yes' : response.profile.rateInfo.cancellationPolicyComment}}
                                        </div>
                                        <div v-else >
                                            None
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

                            <div v-if="response.profile.youtubeIntroLink"   style="margin-top: 55px; display: flex; justify-content: center">
                                <iframe width="560" height="315" :src="response.profile.youtubeLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div class="my-carousel" style="overflow-y: scroll">
                                <div style="margin-top: 90px; padding: 0px 30px; display: flex;" :style= "[response.problemCards.length < 3 ? {'justify-content': 'center'} : {}]">
                                    <div style="width: 280px; min-height: 280px; margin: 5px; background: #F6F8FE; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; flex-shrink: 0; position: relative" v-for="(problemCard, index) in response.problemCards" :key="problemCard.id" >
                                        <div style="position: absolute; padding: 13px; background-color: white; border: 1px solid rgba(223, 120, 112, 0.3);box-sizing: border-box; border-radius: 50%; top: -40px; left: 30px; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));">
                                            <img :src="getImgUrl(index)">
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
                categories: []
            }
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
          }
      }
  }
</script>
