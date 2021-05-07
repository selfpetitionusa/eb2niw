<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="bio-popup">
        <div class="form-group">
          <label for="bio">Your bio - max 160 words *</label>
          <textarea class="form-control" id="bio" rows="10" v-on:input="countWord" placeholder="Tell parents and students about your tutoring background" required></textarea>
          <div class="count-words"><span id="show">0</span> /160</div>
        </div>

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
        const words = document.getElementById("bio");
        let count = 0;
        const split = words.value.split(' ');

        for (let i = 0; i < split.length; i++) {
            if (split[i] != "") {
                count += 1;
            }
        }

        document.getElementById("show").innerHTML = count;

        if(count >= 160){
           alert("You cannot put more than 160 words in this text area.");
           words.maxLength = words.length;
           return false;
        }
        return true;
      },
    }
  }

</script>
