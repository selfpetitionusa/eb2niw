<template>

    <b-modal @show="initModal"  id="name-modal" title="About me" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="name-popup" class="cms" @submit.prevent="saveForm" novalidate>
                <div class="form-group">
                    <label for="firstName">First name (or your brand name) *</label>
                    <ValidationProvider rules="required" v-slot="{ errors }" >
                        <input type="text" class="form-control" id="firstName" v-model="firstName"  name="firstName"  placeholder="Teacher" :class="{ 'is-invalid':  submitted && errors.length }" >
                        <div v-if="submitted && errors.length" class="invalid-feedback">First name is required</div>
                    </ValidationProvider>

                </div>

                <div class="form-group">
                    <label for="lastName">Last name (or your brand name)</label>
                    <input type="text" class="form-control" id="lastName" v-model="lastName" placeholder="Natalie">

                </div>

                <div class="form-title">
                    <p>Name and subject list will be automatically populated after you complete “Subjects” section.</p>
                </div>

                <div class="form-group">
                    <label for="shortBio-1">Introduction - first row</label>
                    <input type="text" class="form-control" id="shortBio-1" v-model="firstLine"  :placeholder="row1Placeholder">
                </div>

                <div class="form-group">
                    <label for="shortBio-2">Introduction - second row</label>
                    <input type="text" class="form-control" id="shortBio-2"  v-model="secondLine" :placeholder="row2Placeholder" >
                </div>

                <div class="form-group">
                    <label for="shortBio-3">Introduction - third row</label>
                    <input type="text" class="form-control" id="shortBio-3" v-model="thirdLine"  placeholder="Welcome to my website!" >
                </div>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('name-modal')">Cancel</a>
                    <button type="submit" class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingNameInfo">Save
                        <img v-show="account.status.updatingNameInfo" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    </button>
                </div>
            </form>
        </ValidationObserver>
    </b-modal>

</template>




<script>

    import {mapActions, mapState} from "vuex";


  export default {
      data () {
          return {
              firstName: this.profileProp.profile.firstName,
              lastName: this.profileProp.profile.lastName,
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
              if(this.profileProp.categories && this.profileProp.categories.length > 0)
                  return 'I tutor ' + this.formatArray(this.profileProp.categories.map(cat => cat.categoryName)) + '.';
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
              this.firstLine = this.initLine(0);
              this.secondLine = this.initLine(1);
              this.thirdLine = this.initLine(2);
              this.clear();

          },
          initLine(index){
              if(this.profileProp.profile.shortBio) return this.profileProp.profile.shortBio.split(/\r?\n/)[index]
              else return null
          },
          formatArray(arr) {
              var outStr = "";
              if (arr.length === 1) {
                  outStr = arr[0];
              } else if (arr.length === 2) {
                  outStr = arr.join(' & ');
              } else if (arr.length > 2) {
                  outStr = arr.slice(0, -1).join(', ') + ' & ' + arr.slice(-1);
              }
              return outStr;
          },
          saveForm(){
              this.submitted = true;
              this.$refs.form.validate().then(success => {
                  if (!success) {
                      return;
                  }
                  const firstName = this.firstName;
                  const lastName = this.lastName;
                  var shortBio = '';
                  if(this.firstLine) {
                      shortBio = this.firstLine + '\n';
                  }
                  if(this.secondLine) {
                      shortBio = shortBio + this.secondLine + '\n';
                  }
                  if(this.thirdLine) {
                      shortBio = shortBio + this.thirdLine;
                  }
                  shortBio = shortBio.trim();
                  this.updateNameInfo({firstName, lastName, shortBio});
              });

          }
      }
  }

</script>
