<template>

    <div class="jumbotron" style="height: 100%">
        <div class="container login">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <h2  v-if="!status.resetingPasswordMailSent && !status.resetingPasswordMailFailure && !status.resetPasswordSuccess">Forgot password?</h2>
                    <h4  v-if="!status.resetingPasswordMailSent && !status.resetingPasswordMailFailure && !status.resetPasswordSuccess">No worries! Just enter your email and we'll send you a reset password code.</h4>
                    <div style="margin-top: 30px;">
                        <form v-if="!status.resetingPasswordMailSent && !status.resetingPasswordMailFailure && !status.resetPasswordSuccess" @submit.prevent="handleRequestPasswordReset">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
                                <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
                            </div>
                            <div class="btn-container">
                                <button class="btn btn-primary btn-border btn-save" :disabled="status.resetingPassword">Reset
                                    <img v-show="status.resetingPassword" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                </button>
                            </div>
                        </form>
                        <form v-if="status.resetingPasswordMailSent" @submit.prevent="handleResetPassword">
                            <h4>Password-reset email sent</h4>
                            <p>Please check your mailbox and provide verification code</p>
                            <div class="form-group">
                                <label for="code">Code</label>
                                <input type="text" v-model="code" name="email" class="form-control" :class="{ 'is-invalid': submitted && !code }" />
                                <div v-show="submitted && !code" class="invalid-feedback">Code is required</div>

                            </div>
                            <div class="form-group">
                                <label htmlFor="password">New Password</label>
                                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                            </div>
                            <div class="form-group">
                                <label htmlFor="repeatPassword">Repeat Password</label>
                                <input type="password" v-model="repeatPassword" name="repeatPassword" class="form-control" :class="{ 'is-invalid': submitted && (repeatPassword !== password || !repeatPassword)}" />
                                <div v-show="submitted && repeatPassword !== password" class="invalid-feedback">Passwords do not match.</div>
                                <div v-show="submitted && !repeatPassword" class="invalid-feedback">Password is required</div>
                            </div>
                            <div class="btn-container">
                                <button class="btn btn-primary btn-border btn-save" :disabled="status.resetingPassword">Reset
                                    <img v-show="status.resetingPassword" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                </button>
                            </div>
                        </form>

                        <div v-if="status.resetPasswordSuccess">
                            <h4>Password changed successfully!</h4>
                            <p>You can log in now with a new password</p>
                            <router-link to="/login" class="btn btn-border btn-cancel">Login</router-link>
                        </div>

                        <div v-if="status.resetingPasswordMailFailure">
                            <h4>Reset password failed</h4>
                            <p>Please try again later or get in touch with us via contact form</p>
                        </div>
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
                email: '',
                password: '',
                repeatPassword: '',
                code: '',
                submitted: false
            }
        },
        computed: {
            ...mapState('account', ['status'])
        },
        created() {
            this.clear();
        },
        methods: {
            ...mapActions('account', ['requestPasswordReset', 'resetPassword', 'clear']),
            handleRequestPasswordReset () {
                this.submitted = true;
                if (this.email) {
                    this.submitted = false;
                    this.requestPasswordReset(this.email)
                }
            },
            handleResetPassword () {
                this.submitted = true;
                if (this.code && this.password && this.password === this.repeatPassword) {
                    this.submitted = false;
                    const {email, code, password} = this;
                    this.resetPassword({email, code, password})
                }
            }
        }
    };
</script>
