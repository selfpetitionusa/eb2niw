<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="problem-cards-popup">
        <div class="form-group" id="problemCards" v-for="problemCard in problemCards" :key="problemCard">

          <div class="form-group">
            <label for="question">Select or type your question</label>
            <input class="form-control" list="question">
              <datalist id="question">
                <option value="Type your own question"></option>
                <option value="What is your tutoring style?"></option>
                <option value="How will my child learn through online learning?"></option>
                <option value="How can I practice by myself between the lessons?"></option>
                <option value="How do you motivate students?"></option>
                <option value="How do you help students focus?"></option>
                <option value="How to learn definitions?"></option>
                <option value="ow do you teach &lt;your subject&gt;?"></option>
                <option value="What is the best way to learn &lt;topic&gt;?"></option>
                <option value="How to remember multiplication tables?"></option>
                <option value="How to practice spelling?"></option>
                <option value="How do you teach kids to read?"></option>
              </datalist>
          </div>

          <div class="form-group">
            <label for="answer">Answer - max 70 words</label>
            <textarea class="form-control" id="answer" rows="5" @input="countWord()"></textarea>
            <div class="count-words"><span id="show">0</span> /70</div>
          </div>
        </div>

        <div class="plus-minus">
          <font-awesome-icon class="icon" icon="plus-circle" v-on:click="addProblemCard" />
          <font-awesome-icon class="icon" icon="minus-circle" v-on:click="deleteProblemCard" />
        </div>
        <p class="plus-minus-comment">Problem card</p>

        <div class="btn-container">
          <button type="reset" class="btn btn-primary btn-border btn-cancel">Cancel</button>
          <button type="submit" class="btn btn-primary btn-border btn-save" v-on:click="inputIsRequired">Save</button>
        </div>
      </form>

    </div>
  </div>
</div>

</template>


<script>
  export default {
      data() {
          return {
              problemCards: [{
                      question: "",
                      answer: ""
                  }]
          }
      },
      methods: {
          countWord: function() {
              const words = document.getElementById("answer").value;
              let count = 0;
              const split = words.split(' ');

              for (let i = 0; i < split.length; i++) {
                  if (split[i] != "") {
                      count += 1;
                  }
              }

              document.getElementById("show").innerHTML = count;

              if(count > 3){
                 alert("You cannot put more than 70 words in this text area.");
                 return false;
              }
              return true;
          },
          addProblemCard: function() {
              this.problemCards.push({
                  question: "",
                  answer: ""
              })
          },
          deleteProblemCard: function() {
              this.problemCards.pop()
          },
          inputIsRequired: function() {
              const x = document.forms['problem-cards-popup'].question.value;
              const y = document.forms['problem-cards-popup'].answer.value
              if ( x !== "" && y === "") {
                  alert("Please provide answer for each added question");
                  return false;
                  }
                  return true;
          }
      }
  }
</script>
