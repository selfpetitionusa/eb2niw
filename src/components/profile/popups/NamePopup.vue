<template>

    <b-modal @show="initModal"  id="name-modal" title="About me" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="name-popup" class="cms" @submit.prevent="saveForm" novalidate>
                <div class="form-group">
                    <label for="firstName">First name *</label>
                    <ValidationProvider rules="required" v-slot="{ errors }" >
                        <input type="text" class="form-control" id="firstName" v-model="firstName"  name="firstName"  :class="{ 'is-invalid':  submitted && errors.length }" >
                        <div v-if="submitted && errors.length" class="invalid-feedback">First name is required</div>
                    </ValidationProvider>

                </div>

                <div class="form-group">
                    <label for="lastName">Last name *</label>
                    <ValidationProvider rules="required" v-slot="{ errors }" >
                        <input type="text" class="form-control" id="lastName" v-model="lastName" :class="{ 'is-invalid':  submitted && errors.length }" >
                        <div v-if="submitted && errors.length" class="invalid-feedback">Last name is required</div>
                    </ValidationProvider>
                </div>

                <div class="form-group">
                    <label for="email">E-mail *</label>
                    <ValidationProvider rules="required|email" v-slot="{ errors }" >
                        <input type="email" class="form-control" v-model="email" id="email" aria-describedby="emailHelp" :class="{ 'is-invalid':  submitted && errors.length }">
                        <div v-if="submitted && errors.includes('required')" class="invalid-feedback">Email is required</div>
                        <div v-if="submitted && errors.includes('email')" class="invalid-feedback">Email has wrong format</div>
                    </ValidationProvider>
                    <small id="emailHelp" class="form-text text-muted">For website visitors to contact you</small>
                </div>

                <div class="form-title">
                    <p>Name and subject list will be automatically populated after you complete “Subjects” section.</p>
                </div>

                <div class="form-group">
                    <label for="shortBio-1">Introduction - first row</label>
                    <ValidationProvider name="line1"  rules="lines:@line2,@line3" v-slot="{ errors }" >
                        <input type="text" class="form-control" id="shortBio-1" v-model="firstLine" :class="{ 'is-invalid':  submitted && errors.length }" :placeholder="row1Placeholder">
                        <div v-if="submitted && errors.includes('lines')" class="invalid-feedback">First row is required</div>
                    </ValidationProvider>
                </div>

                <div class="form-group">
                    <label for="shortBio-2">Introduction - second row</label>
                    <ValidationProvider name="line2" rules="lines:@line1,@line3" v-slot="{ errors }" >
                        <input type="text" class="form-control" id="shortBio-2"  v-model="secondLine" :placeholder="row2Placeholder" :class="{ 'is-invalid':  submitted && errors.length }">
                        <div v-if="submitted && errors.includes('lines')" class="invalid-feedback">Second row is required</div>
                    </ValidationProvider>
                </div>

                <div class="form-group">
                    <label for="shortBio-3">Introduction - third row</label>
                    <ValidationProvider name="line3" rules="lines:@line1,@line2" v-slot="{ errors }" >
                        <input type="text" class="form-control" id="shortBio-3" v-model="thirdLine"  placeholder="Welcome to my website!" :class="{ 'is-invalid':  submitted && errors.length }">
                        <div v-if="submitted && errors.includes('lines')" class="invalid-feedback">Third row is required</div>
                    </ValidationProvider>
                </div>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('name-modal')">Cancel</a>
                    <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
                </div>
            </form>
        </ValidationObserver>
    </b-modal>

</template>




<script>

    import {mapActions, mapState} from "vuex";
    import { extend } from 'vee-validate';

    extend('lines', {
        params: ['line1', 'line2'],
        validate(value, { line1, line2 }) {
            if(!(['', null, undefined].indexOf(line1) === -1) && !(['', null, undefined].indexOf(line2) === -1)) {
                return true;
            }else {
                return ['', null, undefined].indexOf(value) === -1
            }
        },
        message: 'lines',
        required: true,
        computesRequired: true
    });

  export default {
      data () {
          return {
              firstName: this.profileProp.profile.firstName,
              lastName: this.profileProp.profile.lastName,
              email: this.profileProp.profile.email,
              firstLine: this.initLine(0),
              secondLine: this.initLine(1),
              thirdLine: this.initLine(2),
              submitted: false

          }
      },
      watch: {
          'account.status': function (val) {
              if(val.updatedNameFormInfo)
                  this.$bvModal.hide('name-modal');
          }
      },
      props: ['profileProp'],
      computed: {
          ...mapState({
              alert: state => state.alert,
              account: state => state.account
          }),
          row1Placeholder: function () {
              if(this.firstName)
                  return 'Hi, my name is ' + this.firstName + '.';
              else
                  return 'Hi, my name is <name>.';
          },
          row2Placeholder: function () {
              if(this.profileProp.profile.categories && this.profileProp.profile.categories.length > 0)
                  return 'I teach ' + this.profileProp.profile.categories[0] + '.';
              else
                  return 'I teach <Subject 1>.';
          },

      },
      methods: {
          ...mapActions('account', ['updateNameInfo']),
          ...mapActions('alert', ['clear']),
          initModal() {
              this.submitted = false;
              this.firstName = this.profileProp.profile.firstName;
              this.lastName = this.profileProp.profile.lastName;
              this.email = this.profileProp.profile.email;
              this.firstLine = this.initLine(0);
              this.secondLine = this.initLine(1);
              this.thirdLine = this.initLine(2);
              this.clear();

          },
          initLine(index){
              if(this.profileProp.profile.shortBio) return this.profileProp.profile.shortBio.split(/\r?\n/)[index]
              else return null
          },
          saveForm(){
              this.submitted = true;
              this.$refs.form.validate().then(success => {
                  if (!success) {
                      return;
                  }

                  const firstName = this.firstName;
                  const lastName = this.lastName;
                  const email = this.email;
                  var shortBio;
                  if(this.firstLine)
                      shortBio = this.firstLine + '\n' + this.secondLine + '\n'+ this.thirdLine;
                  this.updateNameInfo({firstName, lastName, email, shortBio});
              });

          }
      }
  }

</script>
