<template>
    <div class="jumbotron" style="height: 100%">
        <div class="container assessment">
            <div class="row">
                <div class="col-sm-4">
                    <img src="../assets/img/Quiz.svg"  alt="Tutomy service - online tutoring website template">
                </div>

                <div class="col-sm-6 offset-sm-1">
                    <div class="row">
                        <div class="col-10">
                            <h2>Check your website needs</h2>
                            <p>Based on your responses, find out about the best tools to create a website, ways to build an online presence, and find students</p>

                            <form id="website-assessment" @submit.prevent="addEmail(email)">
                                <div class="assessment-choice">
                                    <div class="title">Choose one option:</div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="noWebsite" id="noWebsite" value="noWebsite">
                                        <label class="form-check-label" for="noWebsite">I do NOT have a tutoring website</label>
                                    </div>
                                    <div class="form-check form-inline" style="display: flex; align-items: center; padding: 0px">
                                        <input class="form-check-input" type="radio" name="yesWebsite-radio" id="yesWebsite" value="yesWebsite" style="display: flex; align-items: center; margin: 0px 7px 0px 0px">
                                        <label class="form-check-label" for="yesWebsite">I have a tutoring website:</label>
                                        <input type="text" class="form-control" id="yesWebsite" disabled placeholder="Link to your website" style="height: 30px; width: 40%; margin-left: 10px; border-color: #0e314c;">
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="buildingWebsite" id="buildingWebsite" value="buildingWebsite">
                                        <label class="form-check-label" for="buildingWebsite">I am in the process of building a tutoring website</label>
                                    </div>
                                </div>

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

                                <div>
                                    <button style="width: 58%; margin: 0" type="submit" class="btn btn-primary btn-assess">Take a quiz</button>
                                </div>
                            </form>

                        </div>
                    </div>
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
