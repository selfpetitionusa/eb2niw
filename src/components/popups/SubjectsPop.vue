<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="subjects-popup">
        <div class="form-title">
          <p>Add minimum 1 subject and 1 category for each subject</p>
        </div>

        <div class="form-group">
          <label for="subject">Subject *</label>
          <input type="text" class="form-control" id="subject" placeholder="Example: Math" required>
        </div>

        <div class="form-group subject-categories">
          <label for="subject-categories">Subject categories - first is mandatory *</label>
          <input type="text" class="form-control" id="subject-categories" placeholder="Example: Precalculus *" required>
          <input type="text" class="form-control" id="subject-categories" placeholder="Example: Calculus" disabled>
          <input type="text" class="form-control" id="subject-categories" placeholder="Example: Algebra" disabled>
          <input type="text" class="form-control" id="subject-categories" placeholder="Example: Geometry" disabled>
          <input type="text" class="form-control" id="subject-categories" placeholder="Example: Trigonometry" disabled>
          <input type="text" class="form-control" id="subject-categories" placeholder="Example: Differential Equations" disabled>
          <input type="text" class="form-control" id="subject-categories" placeholder="Example: Logic" disabled>
        </div>

        <div class="plus-minus">
          <img src="../../assets/img/plus.svg">
          <img src="../../assets/img/minus.svg">
        </div>
        <p class="plus-minus-comment">Subject</p>

        <div class="form-title">
          <p>Choose one which best describes your students *</p>
        </div>

        <div class="radio-container">
          <div class="form-check radio">
            <input class="form-check-input" type="radio" name="myStudents" id="myStudents-age" value="option1" required>
            <div class="form-inline">
              <label class="form-check-label item" for="myStudents-age">My students are</label>
              <input type="text" class="form-control item" id="myStudents-age" placeholder="7-12">
              <label class="form-check-label item" for="myStudents-age">years old</label>
            </div>
          </div>

          <div class="form-check radio">
            <input class="form-check-input" type="radio" name="myStudents" id="myStudents-grade" value="option2" required>
            <div class="form-inline">
              <label class="form-check-label item" for="myStudents-grade">My students are</label>
              <input type="text" class="form-control item" id="myStudents-grade" placeholder="7-12th">
              <label class="form-check-label item" for="myStudents-grade">grade</label>
            </div>
          </div>

          <div class="form-check radio">
            <input class="form-check-input" type="radio" name="myStudents" id="myStudents-other" value="option3" required>
            <div class="form-inline">
              <label class="form-check-label item" for="myStudents-other">My students are</label>
              <input type="text" class="form-control item" id="myStudents-other" placeholder="Description">
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
