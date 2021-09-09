<template>
    <div class="register-confirmation" style="height: 100%">
        <div class="jumbotron main-banner register-confirmation">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-12 offset-lg-1">
                        <h1>You are ready to create your website</h1>
                        <div class="div">
                            <h6>Here is your unique address to share with others once your website is finalized</h6>

                            <h6>You can always find it later in the "Account"</h6>
                            <p><a  :href="`/tutor/${this.token}`">www.tutomy.com/tutor/{{token}}</a></p>
                        </div>
                        <div class="div">
                            <h6>An e-mail from Tutomy is on its way with additional information</h6>
                            <p><strong>Tip 1:</strong> Check the spam folder or promotions tab, just in case</p>
                            <p><strong>Tip 2:</strong> Follow 3 steps <a href="https://youtu.be/a2RKTd2UtS8">HERE</a> if the e-mail didn't arrive in your primary inbox</p>
                        </div>

                        <a href="/dashboard" class="btn btn-primary btn-register">Create your website</a>
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

    export default {
        name: 'RegisterConfirmation',
        props: ['token']
    }

</script>
