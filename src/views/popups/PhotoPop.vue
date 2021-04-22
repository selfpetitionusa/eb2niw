<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="photo-popup">
        <div class="form-group cms-photo"></div>

        <div class="form-group zoom-container">
          <label for="zoom">Zoom</label>
          <input type="range" class="form-control-range" id="zoom">
        </div>

        <div class="photo-icons">
          <div class="form-group icon-container">
            <label for="upload" class="icon"><font-awesome-icon class="fas fa-camera fa-2x" icon="camera" /></label>
            <input type="file" class="form-control-file" id="upload">
            <p>Upload</p>
          </div>
          <div class="icon-container">
            <div class="icon"><font-awesome-icon class="fas fa-camera fa-2x" icon="trash" /></div>
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
