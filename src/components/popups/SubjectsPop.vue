<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="subjects-popup">
        <div class="form-title">
          <p>Add minimum 1 subject and 1 category for each subject</p>
        </div>

        <div id="subjects" v-for="subject in subjects" :key="subject.id">
          <div class="form-group">
            <label for="subject">Subject *</label>
            <input type="text" class="form-control" id="subject" v-model="subject.subjectCat" placeholder="Example: Math" required>
          </div>

          <div class="form-group subject-cat">
            <label for="subject-categories1">Subject categories - first is mandatory *</label>
            <input type="text" class="form-control" id="subject-categories1" v-model="subject.subCat1" placeholder="Example: Precalculus *" v-on:input="enableInputSubcat2" required>
            <input type="text" class="form-control" id="subject-categories2" v-model="subject.subCat2" placeholder="Example: Calculus" v-on:input="enableInputSubcat3" disabled>
            <input type="text" class="form-control" id="subject-categories3" v-model="subject.subCat3" placeholder="Example: Algebra" v-on:input="enableInputSubcat4" disabled>
            <input type="text" class="form-control" id="subject-categories4" v-model="subject.subCat4" placeholder="Example: Geometry" v-on:input="enableInputSubcat5" disabled>
            <input type="text" class="form-control" id="subject-categories5" v-model="subject.subCat5" placeholder="Example: Trigonometry" v-on:input="enableInputSubcat6" disabled>
            <input type="text" class="form-control" id="subject-categories6" v-model="subject.subCat6" placeholder="Example: Differential Equations" v-on:input="enableInputSubcat7" disabled>
            <input type="text" class="form-control" id="subject-categories7" v-model="subject.subCat7" placeholder="Example: Logic" disabled>
          </div>
        </div>

        <div class="plus-minus">
          <font-awesome-icon class="icon" icon="plus-circle" v-on:click="addSubject" />
          <font-awesome-icon class="icon" icon="minus-circle" v-on:click="deleteSubject" />
        </div>
        <p class="plus-minus-comment">Subject</p>

        <div class="form-title">
          <p>Choose one which best describes your students *</p>
        </div>

        <div class="radio-container">
          <div class="form-check radio">
            <input class="form-check-input" type="radio" name="myStudents" id="myStudents-age-radio" value="option1" v-on:click="enableDisableRadio" required>
            <div class="form-inline">
              <label class="form-check-label item" for="myStudents-age">My students are</label>
              <input type="text" class="form-control item" id="myStudents-age" placeholder="7-12" disabled required>
              <label class="form-check-label item" for="myStudents-age">years old</label>
            </div>
          </div>

          <div class="form-check radio">
            <input class="form-check-input" type="radio" name="myStudents" id="myStudents-grade-radio" value="option2" v-on:click="enableDisableRadio" required>
            <div class="form-inline">
              <label class="form-check-label item" for="myStudents-grade">My students are</label>
              <input type="text" class="form-control item" id="myStudents-grade" placeholder="7-12th" disabled required>
              <label class="form-check-label item" for="myStudents-grade">grade</label>
            </div>
          </div>

          <div class="form-check radio">
            <input class="form-check-input" type="radio" name="myStudents" id="myStudents-other-radio" value="option3" v-on:click="enableDisableRadio" required>
            <div class="form-inline">
              <label class="form-check-label item" for="myStudents-other">My students are</label>
              <input type="text" class="form-control item" id="myStudents-other" placeholder="Description" disabled required>
            </div>
          </div>
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
    data() {
        return {
            subjects: [{
                subjectCat: "",
                subCat1: "",
                subCat2: "",
                subCat3: "",
                subCat4: "",
                subCat5: "",
                subCat6: "",
                subCat7: ""
            }]
        }
    },
    methods: {
        addSubject: function() {
            this.subjects.push({
                subjectCat: "",
                subCat1: "",
                subCat2: "",
                subCat3: "",
                subCat4: "",
                subCat5: "",
                subCat6: "",
                subCat7: ""
            })
        },
        deleteSubject: function() {
            this.subjects.pop()
        },
        enableInputSubcat2: function() {
            document.getElementById('subject-categories2').removeAttribute('disabled');
        },
        enableInputSubcat3: function() {
            document.getElementById('subject-categories3').removeAttribute('disabled');
        },
        enableInputSubcat4: function() {
            document.getElementById('subject-categories4').removeAttribute('disabled');
        },
        enableInputSubcat5: function() {
            document.getElementById('subject-categories5').removeAttribute('disabled');
        },
        enableInputSubcat6: function() {
            document.getElementById('subject-categories6').removeAttribute('disabled');
        },
        enableInputSubcat7: function() {
            document.getElementById('subject-categories7').removeAttribute('disabled');
        },
        enableDisableRadio: function() {
            let x = document.getElementById("myStudents-age-radio");
            var y = document.getElementById("myStudents-age");

            let a = document.getElementById("myStudents-grade-radio");
            var b = document.getElementById("myStudents-grade");

            let v = document.getElementById("myStudents-other-radio");
            var w = document.getElementById("myStudents-other");

            y.disabled = x.checked ? false : true;
            b.disabled = a.checked ? false : true;
            w.disabled = v.checked ? false : true;

            if (!y.disabled) {
              y.focus();
              }
            if (!b.disabled) {
              b.focus();
              }
            if (!w.disabled) {
              w.focus();
              }
        }
    }
}

</script>
