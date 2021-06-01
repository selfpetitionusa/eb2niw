<template>

    <b-modal  @show="initModal" id="rates-modal" title="Rates" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="rates-popup" class="cms" @submit.prevent="saveForm" novalidate>
                <div class="form-title">
                    <p>Show up to 4 rates by editing the below example *</p>
                </div>

                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="col1">Currency*</th>
                                <th class="col2">Rate*</th>
                                <th class="col3">Session type*</th>
                                <th class="col4">Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="rate in data.rates" :key="rate.id">
                                <td>
                                    <ValidationProvider  rules="required" v-slot="{ errors }" >
                                        <input type="text" class="form-control" v-model="rate.currency"  id="rateCurrency-1" v-on:change="setErrors" :class="{ 'is-invalid': submitted && errors.length }">
                                    </ValidationProvider>
                                </td>

                                <td>
                                    <ValidationProvider  rules="required" v-slot="{ errors }" >
                                        <input type="text" class="form-control" v-model="rate.amount" id="rateAmount-1"  v-on:change="setErrors"  :class="{ 'is-invalid': submitted && errors.length }" >
                                    </ValidationProvider>
                                </td>
                                <td>
                                    <ValidationProvider  rules="required" v-slot="{ errors }" >
                                        <input class="form-control" v-model="rate.commentTop" list="select-1" id="rateType-1"  v-on:change="setErrors"  :class="{ 'is-invalid': submitted && errors.length }">
                                    </ValidationProvider>
                                    <datalist id="select-1">
                                        <option selected >per session</option>
                                        <option>per lesson</option>
                                        <option>per hour</option>
                                        <option>per month</option>
                                        <option>Type your own</option>
                                    </datalist>
                                </td>
                                <td><input type="text" class="form-control"  v-model="rate.commentBottom" id="rateComment-1" placeholder="Ex: Rates starting from"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div  v-if="submitted && errors.length"  class="invalid-feedback" style="display: block">Missing required fields</div>

                <div class="plus-minus add-rates">
                    <font-awesome-icon class="icon" icon="plus-circle" v-bind:class="[isActiveRatePlus ? 'active' : 'disabled']" v-on:click="addRate" />
                    <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveRateMinus ? 'active' : 'disabled']" v-on:click="deleteRate" />
                </div>

                <div class="form-group">
                    <label for="lesson-length">How long is your standard lesson?</label>
                    <div class="lesson">
                        <input type="number" class="form-control" v-model="data.lessonLength" id="lesson-length">
                        <p>minutes</p>
                    </div>
                </div>

                <div class="form-group">
                    <label for="additional-comment">Additional comment for rates</label>
                    <input type="text" class="form-control" v-model="data.rateSectionComment" id="additional-comment" placeholder="Example: Discounts available upon request">
                </div>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('rates-modal')">Cancel</a>
                    <button type="submit"  class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingRatesForm">Save
                        <img v-show="account.status.updatingRatesForm" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
              errors: [],
              data: {
                  rates: []
              }
          }
      },
      watch: {
          'account.status': function (val) {
              if(val.updatedRatesForm)
                  this.$bvModal.hide('rates-modal');
          }

      },
      props: ['profileProp'],
      computed: {
          ...mapState({
              alert: state => state.alert,
              account: state => state.account
          }),
          isActiveRateMinus: function () {
              return this.data.rates.length > 1;
          },
          isActiveRatePlus: function () {
              return this.data.rates.length < 4;
          }
      },
      methods: {
          ...mapActions('account', ['updateRates']),
          ...mapActions('alert', ['clear']),
          initModal() {
              this.submitted = false;
              this.data = {
                  rateSectionComment: this.profileProp.profile.rateInfo.rateSectionComment,
                  lessonLength: this.profileProp.profile.rateInfo.lessonLength,
                  rates: JSON.parse(JSON.stringify(this.profileProp.rates)),
              };
              if (this.data.rates.length === 0)
                  this.addRate();
              this.clear();
          },
          addRate: function() {
              if(this.data.rates.length < 4) {
                  this.data.rates.push({
                      id: Date.now()
                  });
              }
          },
          deleteRate: function() {
              if(this.data.rates.length  > 1) {
                  this.data.rates.pop();
              }
          },
          saveForm(){

              this.submitted = true;
              this.$refs.form.validate().then(success => {
                  this.setErrors();
                  if (!success || this.errors.length) {
                      return;
                  }
                  this.updateRates(this.data);
              });

          },
          setErrors() {
              try {
                  const errors = this.$refs['form'].errors;

                  let parsed = [];

                  Object.keys(errors).map((key) => {
                      parsed.push(errors[key][0])
                  });

                  this.errors = parsed.filter(name => name === 'required');
              } catch {
                  this.errors = [];
              }
          }
      }


  }

</script>
