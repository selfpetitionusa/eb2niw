<template>
  <div>
    <div class="jumbotron" style="height: 100%; background: rgb(249, 246, 246)">
        <div class="container register">
            <div class="row">
                <div class="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-md-2">
                    <h3 style="margin-bottom: 2rem">Create poll for your followers</h3>

                    <ValidationObserver ref="form">
                        <form @submit.prevent="handleSubmit" novalidate>
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                    <input type="text" v-model="user.firstName"  name="firstName" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }" />
                                    <div v-if="submitted && errors.length" class="invalid-feedback">First name is required</div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                    <input type="text" v-model="user.lastName"  name="lastName" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }" />
                                    <div v-if="submitted && errors.length" class="invalid-feedback">Last name is required</div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail</label>
                                <ValidationProvider rules="required|email" v-slot="{ errors }" >
                                    <input type="text" v-model="user.email"  name="email" class="form-control" aria-describedby="emailHelp" :class="{ 'is-invalid':  submitted && errors.length }">
                                    <div v-if="submitted && errors.includes('required')" class="invalid-feedback">Email is required</div>
                                    <div v-if="submitted && errors.includes('email')" class="invalid-feedback">Email has wrong format</div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="channelchoice">Where do you mainly stream?</label>
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                    <select v-model="user.channelchoice" id="channelchoice" name="channelchoice" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }">
                                        <option>Twitch</option>
                                        <option>YouTube</option>
                                        <option>Twitch & YouTube</option>
                                        <option>Other</option>
                                    </select>
                                    <div v-if="submitted && errors.length" class="invalid-feedback">Preferred streaming channel is required</div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="channel">Link to your channel</label>
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                    <input type="text" v-model="user.channel" name="channel" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }" />
                                    <div v-if="submitted && errors.length" class="invalid-feedback">Link to your Twitch or YouTube channel is required</div>
                                </ValidationProvider>
                            </div>

                            <div class="btn-container">
                                <router-link to="/" class="btn btn-border btn-cancel">Cancel</router-link>
                                <button class="btn btn-primary btn-border btn-save" :disabled="status.registering">NEXT
                                    <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>
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
                    channelchoice: '',
                    channel: ''
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
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    this.register(this.user);
                });
            }
        }
    };
</script>
