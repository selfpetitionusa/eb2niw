<template>

    <div class="container-fluid pt-3">
        <div class="row">
            <div class="col-sm-8">
                <ValidationObserver ref="form">
                    <form class="cms" @submit.prevent="saveForm" novalidate>
                          <div class="form-group">
                              <label for="staticEmail">Registration email</label>
                              <input type="text" class="form-control" disabled v-model="data.email" id="staticEmail" value="em****@gmail.com">
                          </div>

                          <div class="form-group">
                              <label for="firstName">First name</label>
                              <ValidationProvider rules="required" v-slot="{ errors }" >
                                  <input type="text" class="form-control" id="firstName"  v-model="data.firstName" placeholder="Pre-populated First Name"  :class="{ 'is-invalid': submitted && errors.length }">
                                  <div v-if="submitted && errors.length" class="invalid-feedback">First name is required</div>
                              </ValidationProvider>
                          </div>
                          <div class="form-group">
                              <label for="lastName" >Last name</label>
                              <ValidationProvider rules="required" v-slot="{ errors }" >
                                <input type="text" class="form-control" id="lastName" v-model="data.lastName" placeholder="Pre-populated Last Name" :class="{ 'is-invalid': submitted && errors.length }">
                                <div v-if="submitted && errors.length" class="invalid-feedback">Last name is required</div>
                              </ValidationProvider>
                          </div>


                        <div class="btn-container">
                            <button type="submit"  class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingBasicInfo">Save
                                <img v-show="account.status.updatingBasicInfo" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            </button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>

</template>



<script>
    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                submitted: false,
                data: {}
            }
        },
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account
            })
        },
        mounted() {
            this.submitted = false;
            this.clear();
            this.data = {
                firstName: this.account.user.firstName,
                lastName: this.account.user.lastName,
                email: this.account.user.email
            };
        },
        methods: {
            ...mapActions('account', ['updateBasicInfo']),
            ...mapActions('alert', ['clear']),
            saveForm() {
                this.submitted = true;
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    this.updateBasicInfo(this.data);
                });

            }
        }
    }
</script>
