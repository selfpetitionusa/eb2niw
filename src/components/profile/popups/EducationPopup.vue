<template>

    <b-modal @show="initModal"  id="education-modal" title="Schools and certificates" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="education-popup" class="cms" @submit.prevent="saveForm" novalidate>
                <div class="form-title">
                    <p class="first">What? Who? Where do you tutor?</p>
                </div>

                <div class="form-group">
                    <label for="headline">Headline *</label>
                    <ValidationProvider rules="required" v-slot="{ errors }" >
                        <input type="text" class="form-control" id="headline" v-model="data.headline"  placeholder="Example: Math tutor for 1-12th grade in San Francisco"  :class="{ 'is-invalid': submitted && errors.length }" >
                        <div v-if="submitted && errors.length" class="invalid-feedback">Headline is required</div>
                    </ValidationProvider>
                </div>

                <div class="form-title">
                    <p>Your education and qualifications</p>
                </div>

                <div id="schools" v-for="school in data.schools" :key="school.id">
                    <div class="form-group">
                        <label for="school">University or school *</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="school" placeholder="Example: Ohio University" v-model="school.label" :class="{ 'is-invalid':  submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">University or school is required</div>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <label for="school-label">Degree and field of study *</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="school-label" placeholder="Example: BS Applied Mathematics" v-model="school.value" :class="{ 'is-invalid':  submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Degree and field of study is required</div>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="plus-minus">
                    <font-awesome-icon class="icon" icon="plus-circle" v-bind:class="[isActiveSchoolPlus ? 'active' : 'disabled']" v-on:click="addSchool" />
                    <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveSchoolMinus ? 'active' : 'disabled']" v-on:click="deleteSchool"/>
                </div>
                <p class="plus-minus-comment">University / School</p>

                <div id="certificates" v-for="certificate in data.certificates" :key="certificate.id">
                    <div class="form-group">
                        <label for="certificate">Certificate</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="certificate" v-model="certificate.label" placeholder="Example: ATA Tutor" :class="{ 'is-invalid':  submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Degree and field of study is required</div>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <label for="certDesc">Certificate description</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="certDesc" v-model="certificate.value" placeholder="Example: American Tutoring Association" :class="{ 'is-invalid':  submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Degree and field of study is required</div>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="plus-minus">
                    <font-awesome-icon class="icon" icon="plus-circle" v-bind:class="[isActiveCertificatePlus ? 'active' : 'disabled']" v-on:click="addCertificate" />
                    <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveCertificateMinus ? 'active' : 'disabled']" v-on:click="deleteCertificate" />
                </div>
                <p class="plus-minus-comment">Certificate</p>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('education-modal')">Cancel</a>
                    <button type="submit" class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingEducationInfo">Save
                        <img v-show="account.status.updatingEducationInfo" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    </button>
                </div>
            </form>
        </ValidationObserver>

    </b-modal>

</template>




<script>

    import {mapActions, mapState} from "vuex";

  export default {
      data() {
          return {
              submitted: false,
              data: {
                  schools: [],
                  certificates: []
              }
          }
      },
      watch: {
          'account.status': function (val) {
              if(val.updatedEducationFormInfo)
                  this.$bvModal.hide('education-modal');
          }
      },
      props: ['profileProp'],
      computed: {
          ...mapState({
              alert: state => state.alert,
              account: state => state.account
          }),
          isActiveSchoolMinus: function () {
              return this.data.schools.length > 1;
          },
          isActiveSchoolPlus: function () {
              return this.data.schools.length < 3;
          },
          isActiveCertificateMinus: function () {
              return this.data.certificates.length > 0;
          },
          isActiveCertificatePlus: function () {
              return this.data.certificates.length < 3;
          }
      },
      methods: {
          ...mapActions('account', ['updateEducationInfo']),
          ...mapActions('alert', ['clear']),
          initModal() {
              this.submitted = false;
              this.data = {
                  headline: this.profileProp.profile.headline,
                  schools: JSON.parse(JSON.stringify(this.profileProp.schools)),
                  certificates: JSON.parse(JSON.stringify(this.profileProp.certificates))
              };
              if(this.data.schools.length === 0)
                  this.addSchool();
              this.clear();

          },
          addSchool: function() {
              if(this.data.schools.length < 3) {
                  this.data.schools.push({
                      id: Date.now(),
                      label: "",
                      value: ""
                  });
              }
          },
          deleteSchool: function() {
              if(this.data.schools.length > 1) {
                  this.data.schools.pop();
              }
          },
          addCertificate: function() {
              if(this.data.certificates.length < 3) {
                  this.data.certificates.push({
                      id: Date.now(),
                      label: "",
                      value: ""
                  });
              }
          },
          deleteCertificate: function() {
              if(this.data.certificates.length  > 0) {
                  this.data.certificates.pop();
              }
          },
          saveForm(){
              this.submitted = true;
              this.$refs.form.validate().then(success => {
                  if (!success) {
                      return;
                  }
                  this.updateEducationInfo(this.data);
              });

          }
      }
  }

</script>
