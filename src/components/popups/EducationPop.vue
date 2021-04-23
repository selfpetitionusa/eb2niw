<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="education-popup">
        <div class="form-title">
          <p class="first">What? Who? Where do you tutor?</p>
        </div>

        <div class="form-group">
          <label for="headline">Headline *</label>
          <input type="text" class="form-control" id="headline" placeholder="Example: Math tutor for 1-12th grade in San Francisco" required>
        </div>

        <div class="form-title">
          <p>Your education and qualifications</p>
        </div>

        <div class="form-group">
          <label for="school">University or school *</label>
          <input type="text" class="form-control" id="school" placeholder="Example: Ohio University" required>
        </div>

        <div class="form-group">
          <label for="degree">Degree and field of study *</label>
          <input type="text" class="form-control" id="degree" placeholder="Example: BS Applied Mathematics" required>
        </div>

        <div class="plus-minus">
          <img src="../../assets/img/plus.svg">
          <img src="../../assets/img/minus.svg">
        </div>
        <p class="plus-minus-comment">University / School</p>

        <div class="form-group">
          <label for="certificate">Certificate</label>
          <input type="text" class="form-control" id="certificate" placeholder="Example: ATA Tutor">
        </div>

        <div class="form-group">
          <label for="cert-desc">Certificate description</label>
          <input type="text" class="form-control" id="cert-desc" placeholder="Example: American Tutoring Association">
        </div>

        <div class="plus-minus">
          <img src="../../assets/img/plus.svg">
          <img src="../../assets/img/minus.svg">
        </div>
        <p class="plus-minus-comment">Certificate</p>

        <div class="btn-container">
          <button type="reset" class="btn btn-primary btn-border btn-cancel">Cancel</button>
          <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
        </div>
      </form>

    </div>
  </div>
</div>

</template>
