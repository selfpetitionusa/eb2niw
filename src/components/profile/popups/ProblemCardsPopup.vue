<template>

    <b-modal static id="problem-cards-modal" title="Teaching expertise" hide-footer>
        <form id="problem-cards-popup" class="cms">
            <div class="form-group" id="problemCards" v-for="problemCard in problemCards" :key="problemCard.id">

                <div class="form-group">
                    <label for="select">Select or type your question</label>
                    <input class="form-control" list="select" id="question" v-model="problemCard.question" v-on:change="answerIsRequired">
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
                    <textarea class="form-control" id="answer" v-model="problemCard.answer" rows="5" v-on:input="countWord"></textarea>
                    <div class="count-words"><span id="show">0</span> /70</div>
                </div>
            </div>

            <div class="plus-minus">
                <font-awesome-icon class="icon active" icon="plus-circle" v-on:click="addProblemCard" />
                <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveCardMinus ? 'active' : 'disabled']" v-on:click="deleteProblemCard" />
            </div>
            <p class="plus-minus-comment">Problem card</p>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('problem-cards-modal')">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
            </div>
        </form>
    </b-modal>

</template>


<script>
    export default {
        data() {
            return {
                problemCards: [{
                        question: "",
                        answer: ""
                    }],
                cardsNumber: 1,
                isActiveCardMinus: true
            }
        },
        methods: {
            countWord: function() {
                const words = document.getElementById("answer");
                let count = 0;
                const split = words.value.split(' ');

                for (let i = 0; i < split.length; i++) {
                    if (split[i] != "") {
                        count += 1;
                    }
                }

                document.getElementById("show").innerHTML = count;

                if(count >= 70){
                   alert("You cannot put more than 70 words in this text area.");
                   words.maxLength = words.length;
                   return false;
                }
                return true;
            },
            addProblemCard: function() {
                this.problemCards.push({
                    question: "",
                    answer: ""
                });
                this.isActiveCardMinus = true;
                this.cardsNumber++;
            },
            deleteProblemCard: function() {
                if(this.cardsNumber > 1) {
                    this.problemCards.pop();
                    this.cardsNumber--;
                }
                if(this.cardsNumber === 1) {
                    this.isActiveCardMinus = false;
                }
            },
            answerIsRequired: function() {
                let x= document.getElementById('question');
                let y= document.getElementById('answer');

                if(x.value.length !== 0){
                    y.setAttribute('required', "");
                } else {
                    y.removeAttribute('required');
                }
            }
        }
    }
</script>
