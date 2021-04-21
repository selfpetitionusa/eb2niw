<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container form">
  <div class="row">
    <div class="col-5">

      <form>
        <div class="form-title">
          <p>Tell website visitors about your terms</p>
        </div>

        <div class="custom-control custom-switch form-group terms-switch">
          <span>Online lessons:</span>
          <input type="checkbox" class="custom-control-input" id="online" checked>
          <label class="custom-control-label" for="online">
            <input type="text" class="form-control" id="online" placeholder="Yes">
          </label>
        </div>

        <small id="in-person-help" class="form-text text-muted">Example: San Francisco area, within 10 miles</small>
        <div class="custom-control custom-switch form-group terms-switch">
          <span>In-person lessons:</span>
          <input type="checkbox" class="custom-control-input" id="in-person" checked>
          <label class="custom-control-label" for="in-person">
            <input type="text" class="form-control" id="in-person" placeholder="Yes">
          </label>
        </div>

        <small id="consultation-help" class="form-text text-muted">Example: 20min level assessment and lesson trial</small>
        <div class="custom-control custom-switch form-group terms-switch">
          <span>Free consultation:</span>
          <input type="checkbox" class="custom-control-input" id="consultation" checked>
          <label class="custom-control-label" for="consultation">
            <input type="text" class="form-control" id="consultation" placeholder="Yes">
          </label>
        </div>

        <div class="custom-control custom-switch form-group terms-switch">
          <span>Cancelation policy:</span>
          <input type="checkbox" class="custom-control-input" id="cancelation" checked>
          <label class="custom-control-label" for="cancelation">
            <input type="text" class="form-control" id="cancelation" placeholder="24h notice">
          </label>
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
