<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>

        <section class="ptb-80 jumbotron" style="height: 100%; background: #F9F6F6">
            <div class="container">
                <div class="section-title">
                    <h2>Color scheme</h2>
                </div>
            </div>

            <div class="row" style="padding: 2px">
                <div class="color-scheme col-sm-10 col-12 offset-sm-1">
                    <div class="row">
                        <div class="col-sm-10 col-12 offset-sm-1">
                            <div class="row">

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio1" v-on:click="selectColor1"></div>
                                        <div class="color-name">Royal</div>
                                        <p id="myColorScheme1" class="color-selected">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio2" v-on:click="selectColor2"></div>
                                        <div class="color-name">Sunrise</div>
                                        <p id="myColorScheme2" class="color-selected">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio3" v-on:click="selectColor3"></div>
                                        <div class="color-name">Rainforest</div>
                                        <p id="myColorScheme3" class="color-selected">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio4" v-on:click="selectColor4"></div>
                                        <div class="color-name">Peach</div>
                                        <p id="myColorScheme4" class="color-selected">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio5" v-on:click="selectColor5"></div>
                                        <div class="color-name">Slate</div>
                                        <p id="myColorScheme5" class="color-selected">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio6" v-on:click="selectColor6"></div>
                                        <div class="color-name">Ocean</div>
                                        <p id="myColorScheme6" class="color-selected">Selected</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="button-color">
                        <button type="submit" class="btn btn-primary">Save color
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        </button>
                    </div>

                    <div class="row">
                        <img id="myColorSchemeImage" class="col-sm-6 col-12 offset-sm-3 preview-color" src="../assets/img/color-scheme-1.png" v-on:click="test">
                    </div>

                </div>
            </div>
        </section>
    </div>

</template>




<script>

  import CmsNav from "../components/profile/section/CmsNav";

    export default {
        components: {
            CmsNav
        },
        methods: {
            selectColor1: function () {
                const x1 = document.getElementById("myColorScheme1");
                const x2 = document.getElementById("myColorScheme2");
                const x3 = document.getElementById("myColorScheme3");
                const x4 = document.getElementById("myColorScheme4");
                const x5 = document.getElementById("myColorScheme5");
                const x6 = document.getElementById("myColorScheme6");

                if (x1.style.visibility === "visible") {
                  x1.style.visibility = "hidden";
                } else {
                  x1.style.visibility = "visible";
                  x2.style.visibility = "hidden";
                  x3.style.visibility = "hidden";
                  x4.style.visibility = "hidden";
                  x5.style.visibility = "hidden";
                  x6.style.visibility = "hidden";

                  document.getElementById("myColorSchemeImage").src = require("../assets/img/color-scheme-1.png");
                }
            },
            selectColor2: function () {
                const x1 = document.getElementById("myColorScheme1");
                const x2 = document.getElementById("myColorScheme2");
                const x3 = document.getElementById("myColorScheme3");
                const x4 = document.getElementById("myColorScheme4");
                const x5 = document.getElementById("myColorScheme5");
                const x6 = document.getElementById("myColorScheme6");

                if (x2.style.visibility === "visible") {
                  x2.style.visibility = "hidden";
                } else {
                  x1.style.visibility = "hidden";
                  x2.style.visibility = "visible";
                  x3.style.visibility = "hidden";
                  x4.style.visibility = "hidden";
                  x5.style.visibility = "hidden";
                  x6.style.visibility = "hidden";

                  document.getElementById("myColorSchemeImage").src = require("../assets/img/color-scheme-2.png");
                }
            },
            selectColor3: function () {
                const x1 = document.getElementById("myColorScheme1");
                const x2 = document.getElementById("myColorScheme2");
                const x3 = document.getElementById("myColorScheme3");
                const x4 = document.getElementById("myColorScheme4");
                const x5 = document.getElementById("myColorScheme5");
                const x6 = document.getElementById("myColorScheme6");

                if (x3.style.visibility === "visible") {
                  x3.style.visibility = "hidden";
                } else {
                  x1.style.visibility = "hidden";
                  x2.style.visibility = "hidden";
                  x3.style.visibility = "visible";
                  x4.style.visibility = "hidden";
                  x5.style.visibility = "hidden";
                  x6.style.visibility = "hidden";

                  document.getElementById("myColorSchemeImage").src = require("../assets/img/color-scheme-3.png");
                }
            },
            selectColor4: function () {
                const x1 = document.getElementById("myColorScheme1");
                const x2 = document.getElementById("myColorScheme2");
                const x3 = document.getElementById("myColorScheme3");
                const x4 = document.getElementById("myColorScheme4");
                const x5 = document.getElementById("myColorScheme5");
                const x6 = document.getElementById("myColorScheme6");

                if (x4.style.visibility === "visible") {
                  x4.style.visibility = "hidden";
                } else {
                  x1.style.visibility = "hidden";
                  x2.style.visibility = "hidden";
                  x3.style.visibility = "hidden";
                  x4.style.visibility = "visible";
                  x5.style.visibility = "hidden";
                  x6.style.visibility = "hidden";

                  document.getElementById("myColorSchemeImage").src = require("../assets/img/color-scheme-4.png");
                }
            },
            selectColor5: function () {
                const x1 = document.getElementById("myColorScheme1");
                const x2 = document.getElementById("myColorScheme2");
                const x3 = document.getElementById("myColorScheme3");
                const x4 = document.getElementById("myColorScheme4");
                const x5 = document.getElementById("myColorScheme5");
                const x6 = document.getElementById("myColorScheme6");

                if (x5.style.visibility === "visible") {
                  x5.style.visibility = "hidden";
                } else {
                  x1.style.visibility = "hidden";
                  x2.style.visibility = "hidden";
                  x3.style.visibility = "hidden";
                  x4.style.visibility = "hidden";
                  x5.style.visibility = "visible";
                  x6.style.visibility = "hidden";

                  document.getElementById("myColorSchemeImage").src = require("../assets/img/color-scheme-5.png");
                }
            },
            selectColor6: function () {
                const x1 = document.getElementById("myColorScheme1");
                const x2 = document.getElementById("myColorScheme2");
                const x3 = document.getElementById("myColorScheme3");
                const x4 = document.getElementById("myColorScheme4");
                const x5 = document.getElementById("myColorScheme5");
                const x6 = document.getElementById("myColorScheme6");

                if (x6.style.visibility === "visible") {
                  x6.style.visibility = "hidden";
                } else {
                  x1.style.visibility = "hidden";
                  x2.style.visibility = "hidden";
                  x3.style.visibility = "hidden";
                  x4.style.visibility = "hidden";
                  x5.style.visibility = "hidden";
                  x6.style.visibility = "visible";

                  document.getElementById("myColorSchemeImage").src = require("../assets/img/color-scheme-6.png");
                }
            }
        }
    }

</script>
