<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container form">
  <div class="row">
    <div class="col-5">

      <form>
        <div class="form-group cms-photo">
        </div>

        <div class="form-group zoom-container">
          <label for="zoom">Zoom</label>
          <input type="range" class="form-control-range" id="zoom">
        </div>

        <div class="photo-icons">
          <div class="form-group icon">
            <label for="upload" class="img"><img src="../../assets/img/camera.svg" /></label>
            <input type="file" class="form-control-file" id="upload">
            <p>Upload</p>
          </div>
          <div class="icon">
            <div class="img"><img src="../../assets/img/trash.svg" /></div>
            <p>Delete</p>
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
