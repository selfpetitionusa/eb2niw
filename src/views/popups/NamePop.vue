<template>


<!-- NAME POPUP -->
    <div class="container form">
      <div class="row">
        <div class="col-5">

          <form>
            <div class="form-group">
              <label for="firstName">First name *</label>
              <input type="text" class="form-control" id="firstName">
            </div>

            <div class="form-group">
              <label for="lastName">Last name *</label>
              <input type="text" class="form-control" id="lastName">
            </div>

            <div class="form-group">
              <label for="email">E-mail*</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">For website visitors to contact you</small>
            </div>

            <div class="form-title">
              <p>Name and subject list will be automatically populated after you complete “Subjects” section.</p>
            </div>

            <div class="form-group">
              <label for="shortBio-1">Introduction - first row</label>
              <input type="text" class="form-control" id="shortBio-1" placeholder="Hi, my name is <Name>.">
            </div>

            <div class="form-group">
              <label for="shortBio-2">Introduction - second row</label>
              <input type="text" class="form-control" id="shortBio-2" placeholder="I teach <Subject 1>.">
            </div>

            <div class="form-group">
              <label for="shortBio-3">Introduction - third row</label>
              <input type="text" class="form-control" id="shortBio-3" placeholder="Welcome to my website!">
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
