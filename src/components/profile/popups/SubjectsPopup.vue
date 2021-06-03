<template>
    <b-modal @show="initModal"  id="subjects-modal" title="What do you teach" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="subjects-popup" class="cms" @submit.prevent="saveForm" novalidate>
                <div class="form-title">
                    <p>Add minimum 1 subject and 1{{'\xa0'}}category for each subject</p>
                </div>

                <div id="subjects" v-for="subject in data.subjects" :key="subject.id" >
                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="subject" v-model="subject.categoryName" placeholder="Example: Math" :class="{ 'is-invalid': submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Subject is required</div>
                        </ValidationProvider>
                    </div>

                    <div class="form-group subject-cat">
                        <label for="subject-categories1">Subject categories - first is mandatory *</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <input type="text" class="form-control" id="subject-categories1" v-model="subject.subcategoryName1" placeholder="Example: Precalculus *" :class="{ 'is-invalid': submitted && errors.length }" >
                            <div v-if="submitted && errors.length" class="invalid-feedback">Subject category is required</div>
                        </ValidationProvider>
                        <input type="text" class="form-control" id="subject-categories2" v-model="subject.subcategoryName2" placeholder="Example: Calculus" :disabled="!subject.subcategoryName1 && !subject.subcategoryName2" >
                        <input type="text" class="form-control" id="subject-categories3" v-model="subject.subcategoryName3" placeholder="Example: Algebra" :disabled="!subject.subcategoryName2 && !subject.subcategoryName3" >
                        <input type="text" class="form-control" id="subject-categories4" v-model="subject.subcategoryName4" placeholder="Example: Geometry" :disabled="!subject.subcategoryName3 && !subject.subcategoryName4" >
                        <input type="text" class="form-control" id="subject-categories5" v-model="subject.subcategoryName5" placeholder="Example: Trigonometry" :disabled="!subject.subcategoryName4 && !subject.subcategoryName5">
                        <input type="text" class="form-control" id="subject-categories6" v-model="subject.subcategoryName6" placeholder="Example: Differential Equations" :disabled="!subject.subcategoryName5 && !subject.subcategoryName6">
                        <input type="text" class="form-control" id="subject-categories7" v-model="subject.subcategoryName7" placeholder="Example: Logic" :disabled="!subject.subcategoryName6 && !subject.subcategoryName7">
                    </div>
                </div>

                <div class="plus-minus">
                    <font-awesome-icon class="icon active" icon="plus-circle" v-on:click="addSubject" />
                    <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveSubjectMinus ? 'active' : 'disabled']" v-on:click="deleteSubject" />
                </div>
                <p class="plus-minus-comment">Subject</p>

                <div class="form-title">
                    <p>Choose one which best describes your students *</p>
                </div>

                <div class="radio-container">
                    <div class="form-check radio">
                        <input class="form-check-input" type="radio" id="myStudents-age-radio" v-model="choice" value="1"  >
                        <div class="form-inline">
                            <label class="form-check-label item" for="myStudents-age">My students are</label>
                            <input type="text" class="form-control item" id="myStudents-age" v-model="radioInput1" :disabled="choice !== '1'" placeholder="7-12">
                            <label class="form-check-label item" for="myStudents-age">years old</label>
                        </div>
                    </div>


                    <div class="form-check radio">
                        <input class="form-check-input" type="radio"  id="myStudents-grade-radio" v-model="choice" value="2" >
                        <div class="form-inline">
                            <label class="form-check-label item" for="myStudents-grade">My students are</label>
                            <input type="text" class="form-control item" id="myStudents-grade"  v-model="radioInput2"  :disabled="choice !== '2'"  placeholder="7-12th" >
                            <label class="form-check-label item" for="myStudents-grade">grade</label>
                        </div>
                    </div>

                    <div class="form-check radio">
                            <input class="form-check-input" type="radio" id="myStudents-other-radio" v-model="choice" value="3" >
                            <div class="form-inline">
                                <label class="form-check-label item" for="myStudents-other">My students are</label>
                                <input type="text" class="form-control item" id="myStudents-other" v-model="radioInput3"  :disabled="choice !== '3'" placeholder="Description">
                            </div>
                    </div>
                    <div v-if="submitted && !radioInput1 && !radioInput2 && !radioInput3" class="invalid-feedback" style="display: block">Students description is required</div>
                </div>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('subjects-modal')">Cancel</a>
                    <button type="submit"  class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingSubjectsForm">Save
                        <img v-show="account.status.updatingSubjectsForm" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
                choice: null,
                radioInput1: null,
                radioInput2: null,
                radioInput3: null,
                submitted: false,
                data: {
                    subjects: []
                }

            }
        },
        watch: {
            'account.status': function (val) {
                if(val.updatedSubjectsForm)
                    this.$bvModal.hide('subjects-modal');
            },
            choice(val) {
                if(val === '1') {
                    this.radioInput2 = '';
                    this.radioInput3 = '';
                } else if(this.choice === '2') {
                    this.radioInput1 = '';
                    this.radioInput3 = '';
                } else if(this.choice === '3') {
                    this.radioInput1 = '';
                    this.radioInput2 = '';
                } else {
                    this.radioInput1 = '';
                    this.radioInput2 = '';
                    this.radioInput3 = '';
                }
            }
        },
        props: ['profileProp'],
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account
            }),
            isActiveSubjectMinus: function () {
                return this.data.subjects.length > 1;
            },
            studentsProfile: function () {
                if(this.choice === '1' && this.radioInput1) {
                    return `${this.radioInput1} years old`;
                } else if(this.choice === '2' && this.radioInput2) {
                    return `${this.radioInput2} grade`;
                } else if(this.choice === '3' && this.radioInput3) {
                    return this.radioInput3
                } else {
                    return '';
                }
            }
        },
      methods: {
          ...mapActions('account', ['updateSubjectsInfo']),
          ...mapActions('alert', ['clear']),
          initModal() {
              this.submitted = false;
              this.data = {
                  subjects: JSON.parse(JSON.stringify(this.profileProp.categories)),
              };
              if(this.data.subjects.length === 0)
                  this.addSubject();

            if(this.profileProp.profile.studentsProfile) {
                if(this.profileProp.profile.studentsProfile.endsWith('years old')) {
                    this.choice = '1';
                    this.radioInput1 = this.profileProp.profile.studentsProfile.slice(0, -10);
                } else if (this.profileProp.profile.studentsProfile.endsWith('grade')) {
                    this.choice = '2';
                    this.radioInput2 = this.profileProp.profile.studentsProfile.slice(0, -6);
                } else {
                    this.radioInput3 = this.profileProp.profile.studentsProfile;
                    this.choice = '3'
                }
                this.clear();
            }




          },
          addSubject: function() {
              this.data.subjects.push({
                  id: Date.now(),
                  categoryName: "",
                  subcategoryName1: "",
                  subcategoryName2: "",
                  subcategoryName3: "",
                  subcategoryName4: "",
                  subcategoryName5: "",
                  subcategoryName6: "",
                  subcategoryName7: ""
              });
          },
          deleteSubject: function() {
              if(this.data.subjects.length > 1) {
                  this.data.subjects.pop();
              }
          },
          saveForm(){
              this.submitted = true;
              this.$refs.form.validate().then(success => {
                  if (!success || !this.studentsProfile) {
                      return;
                  }
                  this.data['studentsProfile'] = this.studentsProfile;
                  this.updateSubjectsInfo(this.data);
              });

          }
      }
  }

</script>
