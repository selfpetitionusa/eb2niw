<template>
    <div class="jumbotron" style="height: 100%">
        <div class="container assessment">
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <img class="graphic" src="../assets/img/Quiz.svg"  alt="Tutomy service - online tutoring website template">
                </div>

                <div class="col-lg-6 col-md-8 offset-lg-1">

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
                                <button style="margin: 0" type="submit" class="btn btn-primary btn-assess mt-2">Take a quiz</button>
                            </div>
                            <div class="mt-4" style="width: 100%">
                                <p  v-if="success" style="text-align: center">🎉 Check your e-mail  🎉</p>
                            </div>
                        </form>

                </div>

                <img src="../assets/img/map.png" class="assessment-map" alt="Tutoring website design with Tutomy - map">
            </div>
        </div>
    </div>
</template>

<script>

import config  from "../config/config";

export default {
    name: 'Assessment',
    data() {
        return {
            data: {

            },
            submitted: false,
            success: false
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
            fetch(url, requestOptions).then(async response => {
                if (response.ok) {
                    this.success = true;
                }
                this.data = {};
                this.submitted = false;
            });
       }
   }
}
</script>
