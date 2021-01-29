<template>
  <div class="d-flex" style="background-color:#f9f6f6; width: 100%; height:100%;position: relative; overflow-x: hidden">
  <div class="background-rectangular" style="position: absolute"></div>
    <div style="width: 1325px; margin: auto;height: 100%">

      <div class="d-flex" style="padding-top: 146px; flex-direction: row; height: 100%">

        <div class="p-2" style="width: 347px; height: 668px; background-color:white; border-radius: 12px; position: relative;margin-right: 18px; padding: 20px">
            <img src="../assets/img/photo.png" style="position: absolute; top:-64px; left: 97px; border: solid 7px white;  border-radius: 50%;   box-shadow: 1px 4px 6px #888888;" />
            <div style="margin-top: 114px; font-size: 40px; font-weight: 700; text-align: center">Jane Smith</div>
            <div style="margin-top: 15px; font-size: 25px; font-weight: 700; text-align: center">English | GMAT | TOEFL</div>
            <div style="margin-top: 39px; font-size: 20px; font-weight: 400;text-align: center"><p>Hi, my name is Jane and I'm English tutor.</p><p>Welcome to my website!</p></div>
            <div class="social-links" style="margin-top: 30px; display: flex; justify-content: center">
                <ul>
                    <li><a href="#" class="facebook"><feather type="facebook"></feather></a></li>
                    <li><a href="#" class="twitter"><feather type="twitter"></feather></a></li>
                    <li><a href="#" class="instagram"><feather type="instagram"></feather></a></li>
                    <li><a href="#" class="linkedin"><feather type="linkedin"></feather></a></li>
                </ul>
            </div>

            <hr style="width:55%;margin-top: 28px">

            <div style=" margin-top: 40px; display: flex; justify-content: center">
                <button type="submit" style="background: #DF7870" class="btn btn-primary">Contact Jane</button>

<!--                <button type="submit" style="border-color:transparent;font-family: Helvetica;font-style: normal;font-weight: bold;font-size: 25px;line-height: 25px;;color:white;width: 251px;height: 68px;background: #DF7870;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);border-radius: 50px;">Contact Jane</button>-->
            </div>
        </div>
        <div class="p-2" style="width: 960px;position: relative; height: 100%;">
            <div style="position: absolute;top:0; left:0; right: 0; height: 61px; background-color: white; border-radius: 15px 15px 0 0;" >
                <ul class="test" style="display: flex; justify-content: space-between; align-items: center; height: 100%; padding: 0 140px 0 140px; font-size: 20px; font-weight: 500; color: #6084A4;">
                    <li style="display: inline-block;">about me</li>
                    <li style="display: inline-block;">subjects</li>
                    <li style="display: inline-block;">rates</li>
                    <li style="display: inline-block;">expertise</li>
                    <li style="display: inline-block;">testimonials</li>
                </ul>

            </div>

            <div style="margin-top: 61px;height: calc(100% - 61px); overflow-y: auto;">
                <div style="border-radius: 15px; background-color: white; margin-top: 15px; padding: 42px 50px 42px;" >
                    <div><h2 style="font-size: 35px;color: black">English as a Second Language tutor </h2></div>
                    <div style="margin-left: 48px; margin-top: 20px;">
                            <div style="display: flex; align-items: center">
                                <div style="width: 550px;margin-right: 10px">
                                    <div style="display: flex;align-items: center">
                                        <font-awesome-icon style="font-size: 45px;color:#5457C1" class="font-icon" icon="graduation-cap" />
                                        <div style="margin-left: 15px;">
                                            <p style="margin: 0px; line-height:26px;font-size:20px;font-weight: 600; color: black">Ohio State University</p>
                                            <p style="margin: 0px; line-height:26px;font-size:20px; color: #6084A4">BA English Literature</p>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; margin-top:28px;">
                                        <font-awesome-icon style="font-size: 60px;color:#5457C1" class="font-icon" icon="star-of-life" />
                                        <div style="margin-left: 15px;">
                                            <p style="margin: 0px; line-height:26px;font-size:20px;font-weight: 600; color: black">TESOL</p>
                                            <p style="margin: 0px; line-height:26px;font-size:20px; color: #6084A4">TESOL Teaching English to Speakers of Other Languages</p>
                                        </div>
                                    </div>
                                </div>

                            <div style="margin-right: 18px">
                                <img src="../assets/img/Graphic_bio.svg" />
                            </div>
                            </div>
                    </div>
                    <div style="margin-top: 45px;">
                        <p style="color: #0E314C;font-size: 16px; line-height: 25px;" >I have been tutoring for 10+ years, and helped more than 80 students with their English profficiency.</p>
                        <p style="color: #0E314C;font-size: 16px; line-height: 25px;">My students come from around the globe: US, Canada, Asia and Europe.</p>
                        <p style="color: #0E314C;font-size: 16px; line-height: 25px;">My greatest passion in life is to help people to achieve their goals. This is the foundation of my commitment to helping out students.</p>
                    </div>
                </div>
                <div style="border-radius: 15px; background-color: white; margin-top: 15px; padding: 42px 50px 70px;">
                    <div style="display:flex; align-items: center">
                        <div style="background-color: #DF7870; width:8px; height: 45px;"></div>
                        <div style="margin-left: 10px;padding-top: 5px;"><h2 style="font-size: 35px;color: black;">Subjects</h2></div>
                    </div>

                    <div style="margin-top: 44px;display: flex; justify-content: space-between;padding: 0 153px 0" >
                        <div style="width:250px; border: 1px dashed rgba(84, 87, 193, 0.5);box-sizing: border-box;box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);border-radius: 5px;">
                            <p style="color: #0E314C;text-align: center;margin-top: 40px;margin-bottom: 27px;font-weight: bold; font-size: 22px;">English</p>
                            <hr style="width: 60%; border: 1px solid rgba(223, 120, 112, 0.3)">
                           <ul class="ul-icon" style="font-size: 20px;color: #0E314C;">
                               <li>Reading</li>
                               <li>Speaking</li>
                               <li>Listening</li>
                               <li>Writing</li>
                           </ul>
                        </div>
                        <div style="width:250px; border: 1px dashed rgba(223, 120, 112, 0.5);box-sizing: border-box;box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);border-radius: 5px;">
                            <p style="color: #0E314C;text-align: center;margin-top: 40px;margin-bottom: 27px;font-weight: bold; font-size: 22px;">Tests</p>
                            <hr style="width: 60%; border: 1px solid rgba(223, 120, 112, 0.3)">
                            <ul class="ul-icon" style="font-size: 20px;color: #0E314C;">
                                <li>GMAT</li>
                                <li>TOEFL</li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: center; margin-top: 52px; align-items: center">

                        <img src="../assets/img/students-icon.svg"/> <div style="margin-left:7px; font-size: 22px;color: #0E314C;">My students are</div> <div style="margin-left:7px;font-size: 22px;font-weight: 700;color: #5457C1;">5 to 15 years old</div>
                    </div>
                </div>

                <div style="border-radius: 15px; background-color: white; margin-top: 15px; padding: 42px 50px 104px;">
                    <div style="display:flex; align-items: center">
                        <div style="background-color: #DF7870; width:8px; height: 45px;"></div>
                        <div style="margin-left: 10px;padding-top: 5px;"><h2 style="font-size: 35px;color: black;">Rate</h2></div>
                    </div>

                    <div style="margin-left:50px;">
                        <div style="display: flex;">
                            <div style="margin-top: 45px;">
                                <div style="display: flex; align-items: center;">
                                    <div style="background: #5457C1;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);border-radius: 5px;width: 100px;font-weight: 500;font-size: 28px;text-align: center;color:white">$100</div>
                                    <div style="margin-left: 15px;">
                                        <p style="margin:0px;line-height:18px;color:#6084A4; font-size: 15px;">per leson</p>
                                        <p style="margin: 0px;line-height:25px; font-size:20px; color: #0E314C">3-7 years old</p>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; margin-top: 35px">
                                    <div style="background: #5457C1;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);border-radius: 5px;width: 100px;font-weight: 500;font-size: 28px;text-align: center;color:white">$80</div>
                                    <div style="margin-left: 15px;">
                                        <p style="margin:0px;line-height:18px;color:#6084A4; font-size: 15px;">per leson</p>
                                        <p style="margin: 0px;line-height:25px; font-size:20px; color: #0E314C">8 years old and above</p>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-left: 145px; margin-top: 23px;">
                                <img src="../assets/img/Rates_graphic.svg" />
                            </div>

                        </div>
                        <div style="color: #6084A4;font-size: 18px;margin-top: 53px;">
                            Lesson time is 60 minutes. Discounts available for lesson packs.
                        </div>
                    </div>

                    <div style="margin: 59px 110px 0;border: 1px dashed #F2F2F2;box-sizing: border-box;box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);border-radius: 5px; padding: 24px 39px 26px">
                        <div style="display: flex; padding: 5px; align-items: center">
                            <img src="../assets/img/Globe_icon.svg"/> <div style="margin-left:7px; font-size: 18px;color: #0E314C;">Online lessons:</div> <div style="margin-left:7px;font-size: 18px;color: #6084A4;">PST time zone</div>
                        </div>
                        <div style="display: flex; padding: 5px; align-items: center">
                            <img src="../assets/img/House_icon.svg"/> <div style="margin-left:7px; font-size: 18px;color: #0E314C;">In-person lessons:</div> <div style="margin-left:7px;font-size: 18px;color: #6084A4;">20 miles from Menlo Park, CA</div>
                        </div>
                        <div style="display: flex; padding: 5px; align-items: center">
                            <img src="../assets/img/Tag_icon.svg"/> <div style="margin-left:7px; font-size: 18px;color: #0E314C;">Free consultation:</div> <div style="margin-left:7px;font-size: 18px;color: #6084A4;">15min level assessment</div>
                        </div>
                        <div style="display: flex; padding: 5px;align-items: center">
                            <img src="../assets/img/Calendar_icon.svg"/> <div style="margin-left:7px; font-size: 18px;color: #0E314C;">Cancelation policy required:</div> <div style="margin-left:7px;font-size: 18px;color: #6084A4;">24h notice</div>
                        </div>
                    </div>
                </div>

                <div style="border-radius: 15px; background-color: white; margin-top: 15px; padding: 42px 50px 70px;">
                    <div style="display:flex; align-items: center">
                        <div style="background-color: #DF7870; width:8px; height: 45px;"></div>
                        <div style="margin-left: 10px;padding-top: 5px;"><h2 style="font-size: 35px;color: black;">Expertise</h2></div>
                    </div>

                    <div style="margin-top: 55px;display: flex;justify-content: center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z3GfYFUQAE0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="my-carousel" style="overflow-y: scroll">
                        <div style="margin-top: 103px; display: flex;">
                            <div style="width: 385px;height: 430px; margin:6px; background: #F6F8FE;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);border-radius: 10px; flex-shrink: 0; position: relative">
                                <div style="position: absolute;padding: 20px; background-color: white;border: 1px solid rgba(223, 120, 112, 0.3);box-sizing: border-box; border-radius: 50%; top:-60px;left:15px;filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));">
                                    <img src="../assets/img/expertise.svg"  />
                                </div>

                                <div style="margin-top: 76px;margin-left: 11px;margin-right: 24px;display: flex;flex-direction: column">
                                    <div>
                                        <p style="font-size: 22px;line-height:28px;color: #0E314C;font-weight: 500;margin: 0;padding: 0;font-family: Poppins;">Fewer vs. less:</p>
                                        <p style="font-size: 22px;line-height:28px;color: #0E314C;font-weight: 500;margin: 0;padding: 0;font-family: Poppins;">What's the difference?</p>
                                    </div>
                                    <div style="margin-top: 29px;">
                                        <p style="font-family: Poppins;font-weight: 200;font-size: 20px;line-height: 25px;color: #0E314C;">Use fewer if you’re referring to people or things in the plural (e.g. houses, newspapers, dogs, students, children). For example: flowers, students, houses. Use less when you’re...</p>

                                    </div>
                                    <div style="position: absolute;bottom: 15px; left: 11px;">
                                        <p style="color:#DF7870;font-size: 18px;">Read more -></p>
                                    </div>
                                </div>

                            </div>
                            <div style="width: 385px;height: 430px; margin:6px; background: #F6F8FE;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);border-radius: 10px; flex-shrink: 0; position: relative">
                                <div style="position: absolute;padding: 20px; background-color: white;border: 1px solid rgba(223, 120, 112, 0.3);box-sizing: border-box; border-radius: 50%; top:-60px;left:15px;filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));">
                                    <img src="../assets/img/expertise.svg"  />
                                </div>

                                <div style="margin-top: 76px;margin-left: 11px;margin-right: 24px;display: flex;flex-direction: column">
                                    <div>
                                        <p style="font-size: 22px;line-height:28px;color: #0E314C;font-weight: 500;margin: 0;padding: 0;font-family: Poppins;">Fewer vs. less:</p>
                                        <p style="font-size: 22px;line-height:28px;color: #0E314C;font-weight: 500;margin: 0;padding: 0;font-family: Poppins;">What's the difference?</p>
                                    </div>
                                    <div style="margin-top: 29px;">
                                        <p style="font-family: Poppins;font-weight: 200;font-size: 20px;line-height: 25px;color: #0E314C;">Use fewer if you’re referring to people or things in the plural (e.g. houses, newspapers, dogs, students, children). For example: flowers, students, houses. Use less when you’re...</p>

                                    </div>
                                    <div style="position: absolute;bottom: 15px; left: 11px;">
                                        <p style="color:#DF7870;font-size: 18px;">Read more -></p>
                                    </div>
                                </div>

                            </div>
                            <div style="width: 385px;height: 430px; margin:6px; background: #F6F8FE;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);border-radius: 10px; flex-shrink: 0; position: relative">
                                <div style="position: absolute;padding: 20px; background-color: white;border: 1px solid rgba(223, 120, 112, 0.3);box-sizing: border-box; border-radius: 50%; top:-60px;left:15px;filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));">
                                    <img src="../assets/img/expertise.svg"  />
                                </div>

                                <div style="margin-top: 76px;margin-left: 11px;margin-right: 24px;display: flex;flex-direction: column">
                                    <div>
                                        <p style="font-size: 22px;line-height:28px;color: #0E314C;font-weight: 500;margin: 0;padding: 0;font-family: Poppins;">Fewer vs. less:</p>
                                        <p style="font-size: 22px;line-height:28px;color: #0E314C;font-weight: 500;margin: 0;padding: 0;font-family: Poppins;">What's the difference?</p>
                                    </div>
                                    <div style="margin-top: 29px;">
                                        <p style="font-family: Poppins;font-weight: 200;font-size: 20px;line-height: 25px;color: #0E314C;">Use fewer if you’re referring to people or things in the plural (e.g. houses, newspapers, dogs, students, children). For example: flowers, students, houses. Use less when you’re...</p>

                                    </div>
                                    <div style="position: absolute;bottom: 15px; left: 11px;">
                                        <p style="color:#DF7870;font-size: 18px;">Read more -></p>
                                    </div>
                                </div>

                            </div>
                            <div style="width: 385px;height: 430px; margin:6px; background: #F6F8FE;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);border-radius: 10px; flex-shrink: 0; position: relative">
                                <div style="position: absolute;padding: 20px; background-color: white;border: 1px solid rgba(223, 120, 112, 0.3);box-sizing: border-box; border-radius: 50%; top:-60px;left:15px;filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));">
                                    <img src="../assets/img/expertise.svg"  />
                                </div>

                                <div style="margin-top: 76px;margin-left: 11px;margin-right: 24px;display: flex;flex-direction: column">
                                    <div>
                                        <p style="font-size: 22px;line-height:28px;color: #0E314C;font-weight: 500;margin: 0;padding: 0;font-family: Poppins;">Fewer vs. less:</p>
                                        <p style="font-size: 22px;line-height:28px;color: #0E314C;font-weight: 500;margin: 0;padding: 0;font-family: Poppins;">What's the difference?</p>
                                    </div>
                                    <div style="margin-top: 29px;">
                                        <p style="font-family: Poppins;font-weight: 200;font-size: 20px;line-height: 25px;color: #0E314C;">Use fewer if you’re referring to people or things in the plural (e.g. houses, newspapers, dogs, students, children). For example: flowers, students, houses. Use less when you’re...</p>

                                    </div>
                                    <div style="position: absolute;bottom: 15px; left: 11px;">
                                        <p style="color:#DF7870;">Read more -></p>
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


  export default {
    name: 'Profile',
    components: {

    }
  }
</script>
