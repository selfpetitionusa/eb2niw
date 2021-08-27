<template>
    <div class="jumbotron" style="background-color: white; height: 100%">
        <div class="container assessment">
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <img class="graphic" src="../assets/img/Quiz.svg"  alt="Tutomy service - online tutoring website template">
                </div>

                <div class="col-lg-6 col-md-8 offset-lg-1">
                    <div v-if="!success" >
                        <h1>Check your website needs</h1>
                        <p>Based on your responses, find out about the best tools to create a website, ways to build an online presence, and find students</p>
                        <form id="website-assessment" @submit.prevent="addEmail()">


                            <div class="assessment-choice">
                                <div class="title">Choose one option:</div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio"  v-model="data.websiteBuildState"  name="noWebsite" id="noWebsite" value="NoWebsite">
                                    <label class="form-check-label" for="noWebsite">I do NOT have a tutoring website</label>
                                </div>

                                <div class="submit-website">
                                    <div class="form-check form-inline" style="padding: 0px">
                                        <input class="form-check-input" type="radio" v-model="data.websiteBuildState"  name="yesWebsite-radio" id="yesWebsite" value="YesWebsite" style="margin: 0px 7px 0px 0px">
                                        <label class="form-check-label" for="yesWebsite">I have a tutoring website:</label>
                                    </div>
                                        <input type="text" class="form-control yesWebsite-input" v-model='data.domain' id="yesWebsite" :disabled="data.websiteBuildState !== 'YesWebsite'"  placeholder="Link to your website">
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" v-model="data.websiteBuildState"  name="buildingWebsite" id="buildingWebsite" value="BuildingWebsite">
                                    <label class="form-check-label" for="buildingWebsite">I am in the process of building a tutoring website</label>
                                </div>
                                <div v-if="submitted && !data.websiteBuildState" class="invalid-feedback" style="display: block">Website building state is required</div>
                            </div>

                            <div>
                                <input type="text"  name="name" id="name" class="form-control" v-model="data.name" placeholder="Name" :class="{ 'is-invalid': submitted && !data.name }" >
                                <div class="mt-2">
                                    <p v-show="submitted && !data.name"  style="display: block" class="m-0 invalid-feedback">Name is required</p>
                                </div>
                            </div>
                            <div>
                                <input type="email"  name="email" id="email" class="form-control" v-model="data.email" placeholder="E-mail" :class="{ 'is-invalid': submitted && !data.email }" >
                                <div class="mt-2">
                                    <p v-show="submitted && !data.email" style="display: block" class="m-0 invalid-feedback">Email is required</p>
                                </div>
                            </div>

                            <div>
                                <button style="margin: 0" type="submit" class="btn btn-primary btn-assess mt-2">Take a quiz   <img v-show="sending" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></button>
                            </div>
                        </form>
                    </div>
                    <div v-else>
                        <h4>In {{countDown}}sec, you will be redirected to Tutomy homepage.</h4>
                        <p class="calendly-input">Click <a href="/Quiz - What type of website do you need.pdf" target="_blank" rel="noopener noreferrer">here</a> to download the quiz.</p>
                        <p>Also check your e-mail for additional instructions.</p>
                    </div>

                </div>

                <img src="../assets/img/map.png" class="assessment-map" alt="Tutoring website design with Tutomy - map">
            </div>
        </div>
    </div>
</template>

<script>

import config  from "../config/config";
import { router } from '../router';

export default {
    name: 'Assessment',
    data() {
        return {
            data: {

            },
            submitted: false,
            sending: false,
            success: false,
            countDown : 20
        }
    },
    methods: {
        addEmail() {
            this.submitted = true;
           if (!this.data.email || !this.data.name || !this.data.websiteBuildState) return;
            const url = `${config.apiUrl}/lead`;
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(this.data)
            };
            this.sending = true;
            fetch(url, requestOptions).then(async response => {
                if (response.ok) {
                    this.sending = false;
                    this.success = true;
                    this.countDownTimer()
                }
                this.data = {};
                this.submitted = false;
            });
       },
        countDownTimer() {
            if(this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
            } else {
                router.push('/');
            }
        }

   }
}
</script>
