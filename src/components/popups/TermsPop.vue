<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="terms-popup">
        <div class="form-title">
          <p>Tell website visitors about your terms</p>
        </div>

        <div class="cms-terms-container">
          <div class="term-container">
            <div class="custom-control custom-switch form-group terms-switch">
              <span>Online lessons:</span>
              <div>
                <input type="checkbox" class="custom-control-input" id="online-switch" v-on:click="enableDisableSwitch1" checked>
                <label class="custom-control-label" for="online-switch"></label>
              </div>
              <input type="text" class="form-control" id="online" placeholder="Yes">
            </div>
          </div>

          <div class="term-container">
            <small id="in-person-help" class="form-text text-muted">Example: San Francisco area, within 10 miles</small>
            <div class="custom-control custom-switch form-group terms-switch">
              <span>In-person lessons:</span>
              <div>
                <input type="checkbox" class="custom-control-input" id="in-person-switch" v-on:click="enableDisableSwitch2" checked>
                <label class="custom-control-label" for="in-person-switch"></label>
              </div>
              <input type="text" class="form-control" id="in-person" placeholder="Yes">
            </div>
          </div>

          <div class="term-container">
            <small id="consultation-help" class="form-text text-muted">Example: 20min level assessment and lesson trial</small>
            <div class="custom-control custom-switch form-group terms-switch">
              <span>Free consultation:</span>
              <div>
                <input type="checkbox" class="custom-control-input" id="consultation-switch" v-on:click="enableDisableSwitch3" checked>
                <label class="custom-control-label" for="consultation-switch"></label>
              </div>
              <input type="text" class="form-control" id="consultation" placeholder="Yes">
            </div>
          </div>

          <div class="term-container">
            <div class="custom-control custom-switch form-group terms-switch">
              <span>Cancelation policy:</span>
              <div>
                <input type="checkbox" class="custom-control-input" id="cancelation-switch" v-on:click="enableDisableSwitch4" checked>
                <label class="custom-control-label" for="cancelation-switch"></label>
              </div>
              <input type="text" class="form-control" id="cancelation" placeholder="24h notice">
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
    methods: {
        enableDisableSwitch1: function() {
            let x = document.getElementById("online-switch");
            var y = document.getElementById("online");

            y.disabled = x.checked ? false : true;

            if (!y.disabled) {
              y.focus();
              }
        },
        enableDisableSwitch2: function() {
            let a = document.getElementById("in-person-switch");
            var b = document.getElementById("in-person");

            b.disabled = a.checked ? false : true;

            if (!b.disabled) {
              b.focus();
              }
        },
        enableDisableSwitch3: function() {
            let v = document.getElementById("consultation-switch");
            var w = document.getElementById("consultation");

            w.disabled = v.checked ? false : true;

            if (!w.disabled) {
              w.focus();
              }
        },
        enableDisableSwitch4: function() {
            let p = document.getElementById("cancelation-switch");
            var q = document.getElementById("cancelation");

            q.disabled = p.checked ? false : true;

            if (!q.disabled) {
              q.focus();
              }
        }
    }
}

</script>
