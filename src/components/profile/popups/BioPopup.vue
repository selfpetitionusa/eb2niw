<template>
    <b-modal  @show="initModal"  id="bio-modal" title="Bio" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="bio-popup" class="cms bio" @submit.prevent="saveForm" novalidate>
                <div class="form-group">
                    <label for="bio">Your bio - max 160 words *</label>
                    <ValidationProvider rules="required" v-slot="{ errors }" >
                        <textarea class="form-control" id="bio" rows="10" v-model="bio" placeholder="Tell parents and students about your tutoring background" :class="{ 'is-invalid':  submitted && (errors.length || count > 160) }"></textarea>
                        <div v-if="submitted && errors.length" class="invalid-feedback">Bio is required</div>
                    </ValidationProvider>
                    <div :style="[count > 160 ? {'color': '#dc3545'} : {'color': '#949494'}]" class="count-words"><span id="show">{{count}}</span> /160</div>
                </div>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('bio-modal')">Cancel</a>
                    <button type="submit" class="btn btn-primary btn-border btn-save"  :disabled="account.status.updatingBio">Save
                        <img v-show="account.status.updatingBio" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
              bio: '',
              submitted: false
          }
      },
      watch: {
          'account.status': function (val) {
              if(val.updatedBio)
                  this.$bvModal.hide('bio-modal');
          }
      },
      props: ['profileProp'],
      computed: {
          ...mapState({
              alert: state => state.alert,
              account: state => state.account,
          }),
          count: function () {
              var str = this.bio;
              if(this.bio){
                  str = str.replace(/(^\s*)|(\s*$)/gi,"");
                  str = str.replace(/[ ]{2,}/gi," ");
                  str = str.replace(/\n /,"\n");
                  return str.split(' ').length;
              }
              else return 0
          },
      },
      methods: {
          ...mapActions('account', ['updateBio']),
          ...mapActions('alert', ['clear']),
          initModal() {
              this.submitted = false;
              this.bio = this.profileProp.profile.bio;
              this.clear();
          },
          saveForm(){
              this.submitted = true;
              this.$refs.form.validate().then(success => {
                  if (!success || this.count > 160) {
                      return;
                  }
                  this.updateBio(this.bio);
              });

          }
      }
  }

</script>
