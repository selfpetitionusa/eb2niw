<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container form">
  <div class="row">
    <div class="col-5">

      <form>
        <div class="form-group">
          <label for="bio">Your bio - max 160 words *</label>
          <textarea class="form-control" id="bio" rows="10" @input="countWord()" placeholder="Tell parents and students about your tutoring background"></textarea>
          <div class="count-words"><span id="show">0</span> /160</div>
        </div>
      </form>

      <div class="btn-container">
        <button type="reset" class="btn btn-primary btn-border btn-cancel">Cancel</button>
        <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
      </div>

    </div>
  </div>
</div>

</template>




<script>
  export default {
    methods: {
      countWord: function() {

          // Get the input text value
          var words = document
              .getElementById("bio").value;

          // Initialize the word counter
          var count = 0;

          // Split the words on each
          // space character
          var split = words.split(' ');

          // Loop through the words and
          // increase the counter when
          // each split word is not empty
          for (var i = 0; i < split.length; i++) {
              if (split[i] != "") {
                  count += 1;
              }
          }

          // Display it as output
          document.getElementById("show")
              .innerHTML = count;
      },
    }
  }

</script>
