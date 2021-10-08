<template>
    <div class="register-confirmation" style="height: 100%">
        <div class="jumbotron main-banner register-confirmation">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-12 offset-lg-1">
                        <h1>Check e-mail to activate your website</h1>
                        <div class="div">
                            <h6>Here is your unique address to share with others once your website is finalized</h6>

                            <h6>You can always find it later in the "Account"</h6>
                            <p><a  :href="`/tutor/${this.token}`">www.tutomy.com/tutor/{{token}}</a></p>
                        </div>

                        <div class="div">
                            <h6>An e-mail from Tutomy is on its way</h6>

                            <ContactPopupRegister></ContactPopupRegister>
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <a href="#" id="manualActivation1" class="btn btn-primary btn-register" v-on:click="sendActivationEmail()">Can't find e-mail?</a>
                                    <a href="#" id="manualActivation2" class="btn btn-primary btn-register" v-b-modal.contactRegister-modal>Still no e-mail? <br>Contact us</a>
                                </div>
                            </div>

                            <div id="tip">
                                <p><strong>Tip 1:</strong> Check the spam folder or promotions tab, just in case</p>
                                <p><strong>Tip 2:</strong> Follow 3 steps <a href="https://youtu.be/a2RKTd2UtS8" target="_blank">HERE</a> if the e-mail didn't arrive in your primary inbox</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-7 graphic-celebrate">
                        <img src="../assets/img/celebrate.svg"  alt="Tutomy service - online tutoring website template">
                    </div>
                </div>

                <img src="../assets/img/map.png" class="reg-confirmation-map" alt="Tutoring website design with Tutomy - map">
            </div>
        </div>
    </div>

</template>

<script>

import ContactPopupRegister from "../components/profile/popups/ContactPopupRegister";

    export default {
        name: 'RegisterConfirmation',
        props: ['token'],
        components: {
            ContactPopupRegister
        },
        methods: {
            sendActivationEmail: function () {
                let x = document.getElementById("tip");
                x.style.visibility = "visible";

                let y = document.getElementById("manualActivation1");
                let z = document.getElementById("manualActivation2");

                y.style.display = "none";
                z.style.display = "block";
            }
        }
    }

</script>
