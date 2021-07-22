<template>
    <div class="jumbotron" style="height: 100%">
        <div class="container assessment">
            <div class="row">
                <div class="col-sm-4">
                    <img src="../assets/img/Quiz.svg"  alt="Tutomy service - online tutoring website template">
                </div>

                <div class="col-sm-6 offset-sm-1">
                    <h2>Test your website needs</h2>
                    <p><span class="desc">If you don't have a website yet </span>- quiz will tell you what type of website do you need and which resources would be the most useful</p>
                    <p><span class="desc">If you already have a website </span>- quiz will tell you how well your website is performing, and what you could improve</p>

                    <form id="website-assessment" @submit.prevent="addEmail(email)" class="mt-2">
                        <div class="row">
                            <div class="col-10 assessment-choice">
                                <div class="title">Choose one option:</div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="noWebsite" id="noWebsite" value="noWebsite">
                                    <label class="form-check-label" for="noWebsite">I do NOT have a tutoring website</label>
                                </div>
                                <div class="form-check form-inline" style="display: flex; align-items: center; padding: 0px">
                                    <input class="form-check-input" type="radio" name="yesWebsite-radio" id="yesWebsite" value="yesWebsite" style="display: flex; align-items: center">
                                    <label class="form-check-label" for="yesWebsite">I have a tutoring website:</label>
                                    <input type="text" class="form-control" id="yesWebsite" disabled placeholder="Link to your website" style="height: 30px; width: 51%; margin-left: 10px; border-color: #0e314c;">
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="buildingWebsite" id="buildingWebsite" value="buildingWebsite">
                                    <label class="form-check-label" for="buildingWebsite">I am in the process of building a tutoring website</label>
                                </div>
                            </div>

                            <div class="col-10">
                                <div>
                                    <input type="text"  name="name" id="name" class="form-control" v-model="name" placeholder="Name">
                                    <div class="mt-2">
                                        <p class="m-0">{{ message }}</p>
                                    </div>
                                </div>
                                <div>
                                    <input type="email"  name="email" id="email" class="form-control" v-model="email" placeholder="E-mail">
                                    <div class="mt-2">
                                        <p class="m-0">{{ message }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-8">
                                <button style="width: 58%; margin: 0" type="submit" class="btn btn-primary btn-assess">Take a quiz</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Assessment',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        logEvent() {
            this.$store.commit('popup/setSeen');
        },
        addEmail(email) {
           if (!email) return;
           var noticeMessage = "🎉 Check your e-mail  🎉";
            const url = `/api/lead`;
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({ email: email })
            };
            fetch(url, requestOptions).then(async response => {
                if (response.ok) {
                    this.$refs['modal-1'].show();
                    this.$store.commit('popup/setSeen');
                }
                this.message = noticeMessage;
                this.email = '';
            });
       }
   }
}
</script>
