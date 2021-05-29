<template>

    <b-modal @show="initModal"  id="terms-modal" title="Teaching terms" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <form id="terms-popup" class="cms" @submit.prevent="saveForm" novalidate>

            <div>
                <div class="term-container">
                    <div class="custom-control custom-switch form-group terms-switch">
                        <span>Online lessons:</span>
                        <div>
                            <input type="checkbox" class="custom-control-input" id="online-switch" v-model="data.online">
                            <label class="custom-control-label" for="online-switch"></label>
                        </div>
                        <input type="text" class="form-control" id="online" v-model="data.onlineComment" :disabled="!data.online" :placeholder="onlinePlaceholder">
                    </div>
                </div>

                <div class="term-container">
                    <small id="in-person-help" class="form-text text-muted">Example: San Francisco area, within 10 miles</small>
                    <div class="custom-control custom-switch form-group terms-switch">
                        <span>In-person lessons:</span>
                        <div>
                            <input type="checkbox" class="custom-control-input" id="in-person-switch"  v-model="data.inPerson">
                            <label class="custom-control-label" for="in-person-switch"></label>
                        </div>
                        <input type="text" class="form-control" id="in-person" v-model="data.inPersonComment" :disabled="!data.inPerson" :placeholder="inPersonPlaceholder">
                    </div>
                </div>

                <div class="term-container">
                    <small id="consultation-help" class="form-text text-muted">Example: 20min level assessment and lesson trial</small>
                    <div class="custom-control custom-switch form-group terms-switch">
                        <span>Free consultation:</span>
                        <div>
                            <input type="checkbox" class="custom-control-input" id="consultation-switch"  v-model="data.freeConsultation">
                            <label class="custom-control-label" for="consultation-switch"></label>
                        </div>
                        <input type="text" class="form-control" id="consultation" v-model="data.freeConsultationComment" :disabled="!data.freeConsultation" :placeholder="freeConsultationPlaceholder">
                    </div>
                </div>

                <div class="term-container">
                    <div class="custom-control custom-switch form-group terms-switch">
                        <span>Cancelation policy:</span>
                        <div>
                            <input type="checkbox" class="custom-control-input" id="cancelation-switch"  v-model="data.cancellationPolicy">
                            <label class="custom-control-label" for="cancelation-switch"></label>
                        </div>
                        <input type="text" class="form-control" id="cancelation" v-model="data.cancellationPolicyComment"  :disabled="!data.cancellationPolicy" :placeholder="cancellationPolicyPlaceholder">
                    </div>
                </div>
            </div>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('terms-modal')">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
            </div>
        </form>
    </b-modal>

</template>




<script>
    import {mapActions, mapState} from "vuex";

  export default {
      data () {
          return {
              submitted: false,
              data: {}
          }
      },
      props: ['profileProp'],
      computed: {
          ...mapState({
              alert: state => state.alert,
              account: state => state.account
          }),
          onlinePlaceholder: function () {
              if(this.online) return 'Yes';
              else return 'No';
          },
          inPersonPlaceholder: function () {
              if(this.inPerson) return 'Yes';
              else return 'No';
          },
          freeConsultationPlaceholder: function () {
              if(this.freeConsultation) return 'Yes';
              else return 'No';
          },
          cancellationPolicyPlaceholder: function () {
              if(this.cancellationPolicy) return '24h notice';
              else return 'No refunds';
          }
      },
      watch: {
          'account.status': function (val) {
              if (val.updatedTermsForm)
                  this.$bvModal.hide('terms-modal');
          }
      },
      methods: {
          ...mapActions('account', ['updateTerms']),
          ...mapActions('alert', ['clear']),
          initModal() {
              this.submitted = false;
              this.data = {
                  online: this.profileProp.profile.rateInfo.online,
                  inPerson: this.profileProp.profile.rateInfo.inPerson,
                  freeConsultation: this.profileProp.profile.rateInfo.freeConsultation,
                  cancellationPolicy: this.profileProp.profile.rateInfo.cancellationPolicy,
                  onlineComment: this.profileProp.profile.rateInfo.onlineComment,
                  inPersonComment: this.profileProp.profile.rateInfo.inPersonComment,
                  freeConsultationComment: this.profileProp.profile.rateInfo.freeConsultationComment,
                  cancellationPolicyComment: this.profileProp.profile.rateInfo.cancellationPolicyComment
              };
              this.clear();
          },
          saveForm(){
              this.submitted = true;
              this.updateTerms(this.data);
          }
      }
  }

</script>
