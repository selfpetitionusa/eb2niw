<template>


<!-- SOCIAL LINKS POPUP -->
<div class="container form">
  <div class="row">
    <div class="col-5">

      <form>
        <div class="form-title">
          <p>Include social media to help website visitors learn more:</p>
          <ul>
            <li>Open your social media profile</li>
            <li>Copy profile link from the browser (https://www.facebook.com/...)</li>
          </ul>
        </div>

        <div class="form-group">
          <label for="facebook">Facebook</label>
          <div class="link-popup">
            <div class="link-logo"><feather type="facebook"></feather></div>
            <input type="text" class="form-control" id="facebook" placeholder="https://www.facebook.com/YOUR-PROFILE-OR-PAGE">
          </div>
        </div>

        <div class="form-group">
          <label for="instagram">Instagram</label>
          <div class="link-popup">
            <div class="link-logo"><feather type="instagram"></feather></div>
            <input type="text" class="form-control" id="instagram" placeholder="https://www.instagram.com/YOUR-PROFILE">
          </div>
        </div>

        <div class="form-group">
          <label for="youtube">YouTube channel</label>
          <div class="link-popup">
            <div class="link-logo"><feather type="youtube"></feather></div>
            <input type="text" class="form-control" id="youtube" placeholder="https://www.youtube.com/c/YOUR-CHANNEL/featured">
          </div>
        </div>

        <div class="form-group">
          <label for="linkedin">LinkedIn</label>
          <div class="link-popup">
            <div class="link-logo"><feather type="linkedin"></feather></div>
            <input type="text" class="form-control" id="linkedin" placeholder="https://www.linkedin.com/in/YOUR-PROFILE">
          </div>
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
