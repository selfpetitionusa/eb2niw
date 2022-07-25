<template>
  <div>
    <div class="jumbotron" style="height: 100%; background: rgb(249, 246, 246)">
        <div class="container register">
            <div class="row">
                <div class="col-lg-6 col-md-8 col-sm-12 offset-lg-3 offset-md-2">
                    <h3>How much it will cost me?</h3>
                    <div class="subject-subcategories" style="text-align: left">
                        <div class="register-conditions" style="font-weight: 400; text-align: justify; text-justify: inter-word;">
                            Provide details about your case to get personalized price assessment
                        </div>
                    </div>

                    <ValidationObserver ref="form">
                        <form @submit.prevent="handleSubmit" novalidate>
                            <div class="form-group">
                                <label for="firstLastName">Name</label>
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                    <input type="text" v-model="user.firstLastName"  name="firstLastName" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }" />
                                    <div v-if="submitted && errors.length" class="invalid-feedback">Name is required</div>
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
                                <label for="residence">Where are you currently residing?</label>
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                    <select v-model="user.residence" id="residence" name="residence" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }">
                                        <option>USA</option>
                                        <option>Overseas</option>
                                    </select>
                                    <div v-if="submitted && errors.length" class="invalid-feedback">Current residence is required</div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="visa">What US visa do you hold?</label>
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                    <input type="text" v-model="user.visa"  name="visa" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }">
                                    <div v-if="submitted && errors.includes('required')" class="invalid-feedback">Visa is required</div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="birth">Country of birth</label>
                                <ValidationProvider rules="required" v-slot="{ errors }" >
                                    <select v-model="user.birth" id="birth" name="birth" class="form-control" :class="{ 'is-invalid':  submitted && errors.length }">
                                        <option>Country in Europe</option>
                                        <option>Country in South America</option>
                                        <option>China</option>
                                        <option>India</option>
                                        <option>Other</option>
                                    </select>
                                    <div v-if="submitted && errors.length" class="invalid-feedback">Country of birth is required</div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="description">Describe your case</label>
                                <textarea v-model="user.description" name="description" rows="5" class="form-control" />
                            </div>

                            <div class="form-group icon-container" style="margin-top: 1rem">
                                <label for="upload" class="icon" style="font-size: 2.5rem; cursor: pointer;"><font-awesome-icon icon="file-upload" />
                                    <span class="icon" style="font-size: 14px; margin-left: 10px;">Upload Resume</span>
                                </label>

                              <input type="file" class="form-control-file" id="upload" ref="file" @change="setImage"  style="display: none;" :class="{ 'is-invalid':  submitted && !user.document }">
                              <div v-if="submitted && !user.document" class="invalid-feedback">Resume or CV is required</div>
                              <p class="register-conditions" style="font-weight: 400" v-if="user.document">Uploaded: {{this.$refs.file.files[0].name}}</p>

                            </div>

                            <div class="btn-container">
                                <router-link to="/" class="btn btn-border btn-cancel">Cancel</router-link>
                                <button class="btn btn-primary btn-border btn-save" :disabled="account.status.applying">SUBMIT
                                    <img v-show="account.status.applying" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
        firstLastName: '',
        email: '',
        residence: '',
        visa: '',
        birth: '',
        description: '',
        document: '',
        fileName: ''
      },
      submitted: false
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
    })
  },
  watch: {
    'account.status': function (val) {
      if(val.applied)
        this.goToFinalPage();
    }
  },
  methods: {
    ...mapActions('account', ['apply']),
    handleSubmit() {
      this.submitted = true;
      this.$refs.form.validate().then(success => {
        if (!success || !this.user.document) {
          return;
        }
        this.apply(this.user);
      });
    },
    setImage() {
      this.getBase64(this.$refs.file.files[0]);
    },
    getBase64(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      const self = this;
      reader.onload = function () {
        const res = reader.result;
        self.user.document = res;
        self.user.fileName = self.$refs.file.files[0].name;
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    },
    goToFinalPage(){
      if((this.user.birth === 'China' || this.user.birth === 'India') && this.user.firstLastName && this.user.email && this.user.residence && this.user.visa && this.user.document) {
          this.$router.push('/confirmed');
      } else if ((this.user.birth === 'Country in Europe' || this.user.birth === 'Country in South America' || this.user.birth === 'Other') && this.user.firstLastName && this.user.email && this.user.residence && this.user.visa && this.user.document) {
          this.$router.push('/confirmation');
      }
    }
  }
};
</script>
