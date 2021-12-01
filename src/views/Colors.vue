<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>

        <section class="ptb-80 jumbotron" style="height: 100%; background: #F9F6F6">
            <div class="container">
                <div class="section-title">
                    <h2>Color scheme</h2>
                </div>
            </div>

            <div v-if="account.profile" class="row" style="padding: 2px">
                <div class="color-scheme col-sm-10 col-12 offset-sm-1">
                    <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <div v-if="alert.failed === false" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <div class="row">
                        <div class="col-sm-10 col-12 offset-sm-1">
                            <div class="row">

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio1" v-on:click="color='Royal'"></div>
                                        <div class="color-name">Royal</div>
                                        <p id="myColorScheme1" class="color-selected"  v-if="color === 'Royal'" >Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio2" v-on:click="color='Sunrise'"></div>
                                        <div class="color-name">Sunrise</div>
                                        <p id="myColorScheme2" class="color-selected" v-if="color === 'Sunrise'">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio3" v-on:click="color='Rainforest'"></div>
                                        <div class="color-name">Rainforest</div>
                                        <p id="myColorScheme3" class="color-selected" v-if="color === 'Rainforest'">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio4" v-on:click="color='Peach'"></div>
                                        <div class="color-name">Peach</div>
                                        <p id="myColorScheme4" class="color-selected" v-if="color === 'Peach'">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio5" v-on:click="color='Slate'"></div>
                                        <div class="color-name">Slate</div>
                                        <p id="myColorScheme5" class="color-selected" v-if="color === 'Slate'">Selected</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio radio6" v-on:click="color='Ocean'"></div>
                                        <div class="color-name">Ocean</div>
                                        <p id="myColorScheme6" class="color-selected" v-if="color === 'Ocean'">Selected</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="button-color">
                        <button type="submit" class="btn btn-primary" v-on:click="saveForm">Save color
                            <img v-show="account.status.updatingColor" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        </button>
                    </div>

                    <div class="row">
                        <img id="myColorSchemeImage1" class="col-sm-6 col-12 offset-sm-3 preview-color" src="../assets/img/color-scheme-1.png" v-show="color === 'Royal'" >
                        <img id="myColorSchemeImage2" class="col-sm-6 col-12 offset-sm-3 preview-color" src="../assets/img/color-scheme-2.png" v-show="color === 'Sunrise'" >
                        <img id="myColorSchemeImage3" class="col-sm-6 col-12 offset-sm-3 preview-color" src="../assets/img/color-scheme-3.png" v-show="color === 'Rainforest'" >
                        <img id="myColorSchemeImage4" class="col-sm-6 col-12 offset-sm-3 preview-color" src="../assets/img/color-scheme-4.png" v-show="color === 'Peach'">
                        <img id="myColorSchemeImage5" class="col-sm-6 col-12 offset-sm-3 preview-color" src="../assets/img/color-scheme-5.png" v-show="color === 'Slate'" >
                        <img id="myColorSchemeImage6" class="col-sm-6 col-12 offset-sm-3 preview-color" src="../assets/img/color-scheme-6.png" v-show="color === 'Ocean'" >
                    </div>

                </div>
            </div>
        </section>
    </div>

</template>




<script>

  import CmsNav from "../components/profile/section/CmsNav";
  import {mapActions, mapState} from "vuex";

    export default {
        components: {
            CmsNav
        },
        data() {
            return {
                color: 'Ocean'
            };
        },
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account
            })
        },
        watch: {
            'account.profile': function (profile) {
                this.color = profile.profile.color;
            }
        },
        methods: {
            ...mapActions('account', ['updateColor']),
            ...mapActions('account', ['getProfile']),
            ...mapActions('alert', ['clear']),
            saveForm(){
                this.updateColor(this.color);
            }
        },
        created() {
            const token = null;
            const userId = this.account.user.id;
            const self = this;
            self.clear();
            this.getProfile({userId, token})
        }

    }

</script>
