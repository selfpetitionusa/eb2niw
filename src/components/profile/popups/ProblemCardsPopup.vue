<template>

    <b-modal @show="initModal"  id="problem-cards-modal" title="Teaching expertise" hide-footer>
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <ValidationObserver ref="form">
            <form id="problem-cards-popup" class="cms" @submit.prevent="saveForm" novalidate>
                <div class="form-group" id="problemCards" v-for="problemCard in data.problemCards" :key="problemCard.id">

                    <div class="form-group">
                        <label for="select">Select or type your question</label>
                        <ValidationProvider  rules="required" v-slot="{ errors }" >
                            <input class="form-control" list="select" id="question" v-model="problemCard.question" :class="{ 'is-invalid': submitted && errors.length }">
                            <div v-if="submitted && errors.length" class="invalid-feedback">Question is required</div>
                        </ValidationProvider>
                            <datalist id="select">
                                <option>Type your own question</option>
                                <option>What is your tutoring style?</option>
                                <option>How will my child learn through online learning</option>
                                <option>How can I practice by myself between the lessons?</option>
                                <option>How do you motivate students?</option>
                                <option>How do you help students focus?</option>
                                <option>How to learn definitions?</option>
                                <option>How do you teach &lt;your subject&gt;?</option>
                                <option>What is the best way to learn &lt;topic&gt;?</option>
                                <option>How to remember multiplication tables?</option>
                                <option>How to practice spelling?</option>
                                <option>How do you teach kids to read?</option>
                            </datalist>
                    </div>

                    <div class="form-group">
                        <label for="answer">Answer - max 70 words</label>
                        <ValidationProvider rules="required" v-slot="{ errors }" >
                            <textarea class="form-control" id="answer" v-model="problemCard.answer" rows="5" :class="{ 'is-invalid': submitted &&  (errors.length || countsById[problemCard.id] > 70) }"></textarea>
                            <div v-if="submitted && errors.length" class="invalid-feedback">Answer is required</div>
                        </ValidationProvider>
                        <div :style="[countsById[problemCard.id] > 70 ? {'color': '#dc3545'} : {'color': '#949494'}]" class="count-words"><span id="show">{{countsById[problemCard.id]}}</span> /70</div>
                    </div>
                </div>

                <div class="plus-minus">
                    <font-awesome-icon class="icon active" icon="plus-circle" v-on:click="addProblemCard" />
                    <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveCardMinus ? 'active' : 'disabled']" v-on:click="deleteProblemCard" />
                </div>
                <p class="plus-minus-comment">Problem card</p>

                <div class="btn-container">
                    <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('problem-cards-modal')">Cancel</a>
                    <button type="submit"  class="btn btn-primary btn-border btn-save" :disabled="account.status.updatingProblemCardsForm">Save
                        <img v-show="account.status.updatingProblemCardsForm" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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
                  problemCards: []
              }
          }
      },
      watch: {
          'account.status': function (val) {
              if(val.updatingProblemCardsForm)
                  this.$bvModal.hide('problem-cards-modal');
          }
      },
      props: ['profileProp'],
      computed: {
          ...mapState({
              alert: state => state.alert,
              account: state => state.account
          }),
          isActiveCardMinus: function () {
              return this.data.problemCards.length > 0;
          },
          countsById() {
              const counts = {};
              this.data.problemCards.forEach((problemCard) => {
                  const answer = problemCard.answer;
                  if (answer) {
                      counts[problemCard.id] = answer.replace(/(^\s*)|(\s*$)/gi, "");
                      counts[problemCard.id] = counts[problemCard.id].replace(/[ ]{2,}/gi, " ");
                      counts[problemCard.id] = counts[problemCard.id].replace(/\n /, "\n");
                      counts[problemCard.id] = counts[problemCard.id].split(' ').length;
                  } else counts[problemCard.id] = 0;
              });
              return counts;
          }

      },
      methods: {
          ...mapActions('account', ['updateProblemCards']),
          ...mapActions('alert', ['clear']),
          initModal() {
              this.submitted = false;
              this.data = {
                  problemCards: JSON.parse(JSON.stringify(this.profileProp.problemCards)),
              };
              if(this.data.problemCards.length === 0)
                  this.addProblemCard();
              this.clear();
          },
          addProblemCard: function() {
              this.data.problemCards.push({
                  id: Date.now(),
                  question: "",
                  answer: ""
              });
          },
          deleteProblemCard: function() {
              if(this.data.problemCards.length > 0) {
                  this.data.problemCards.pop();
              }
          },
          saveForm(){
              this.submitted = true;
              this.$refs.form.validate().then(success => {
                  if (!success || this.data.problemCards.some(card => this.countsById[card.id] > 70)) {
                      return;
                  }
                  this.updateProblemCards(this.data);
              });

          }
      }
  }

</script>
