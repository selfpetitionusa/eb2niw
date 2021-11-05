<template>
  <div @mousemove="openRegister">
    <div class="jumbotron" style="height: 100%">
        <div class="container register">
            <div class="row">
                <div class="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-md-2">
                    <h3>Start 7-day FREE trial</h3>
                    <div class="subject-subcategories">
                        <ul class="register-conditions">
                            <li>No credit card required</li>
                            <li>Cancel any time</li>
                        </ul>
                    </div>
                    <h6>Bonus offer: create a website within 48h</h6>
                    <ul class="bonus-offer" style="margin-bottom: 1.5rem">
                        <li>Website review by an expert</li>
                        <li>1-on-1 advice on how to promote it</li>
                        <li>Progress check-up</li>
                    </ul>

                    <form @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" v-model="user.firstName"  name="firstName" class="form-control"  />
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" v-model="user.lastName"  name="lastName" class="form-control"  />
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail where clients will contact you</label>
                            <input type="text" v-model="user.email"  name="email" class="form-control"  />
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" v-model="user.password" name="password" class="form-control"  />
                        </div>
                        <div class="btn-container">
                            <router-link to="/login" class="btn btn-border btn-cancel">Cancel</router-link>
                            <button class="btn btn-primary btn-border btn-save" :disabled="status.registering">START TRIAL
                                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        data () {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                },
                submitted: false
            }
        },
        computed: {
            ...mapState('account', ['status'])
        },
        methods: {
            ...mapActions('account', ['register']),
            handleSubmit() {
                this.submitted = true;
                this.register(this.user);
            },
            openRegister: function() {
              if(!this.$store.state.popup.seen) {
                this.$refs['modal-4'].show();
              }
              this.$store.commit('popup/setSeen');
            }
        }
    };
</script>
