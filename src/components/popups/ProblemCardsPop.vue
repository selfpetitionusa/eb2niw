<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="problem-cards-popup">
        <div class="form-group">
          <label for="select">Select or add your question</label>
          <select class="form-control select" id="select">
            <option>Type your question</option>
            <option selected>What is your tutoring style?</option>
            <option>How will my child learn through online learning?</option>
            <option>How can I practice by myself between the lessons?</option>
            <option>How do you motivate students?</option>
            <option>How do you help students focus?</option>
            <option>How to learn definitions?</option>
            <option>How do you teach &lt;your subject&gt;?</option>
            <option>What is the best way to learn &lt;topic&gt;?</option>
            <option>How to remember multiplication tables?</option>
            <option>How to practice spelling?</option>
            <option>How do you teach kids to read?</option>
          </select>
        </div>

        <div class="form-group">
          <label for="question">Question</label>
          <input type="text" class="form-control" id="question" placeholder="Select question above or type your own">
        </div>

        <div class="form-group">
          <label for="answer">Answer - max 70 words</label>
          <textarea class="form-control" id="answer" rows="5" @input="countWord()"></textarea>
          <div class="count-words"><span id="show">0</span> /70</div>
        </div>

        <div class="plus-minus">
          <font-awesome-icon class="icon" icon="plus-circle" />
          <font-awesome-icon class="icon" icon="minus-circle" />
        </div>
        <p class="plus-minus-comment">Problem card</p>

        <div class="btn-container">
          <button type="reset" class="btn btn-primary btn-border btn-cancel">Cancel</button>
          <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
        </div>
      </form>

    </div>
  </div>
</div>

</template>


<script>
  export default {
    methods: {
      countWord: function() {
        var words = document.getElementById("answer").value;
        var count = 0;
        var split = words.split(' ');

        for (var i = 0; i < split.length; i++) {
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
    }
  }
</script>
