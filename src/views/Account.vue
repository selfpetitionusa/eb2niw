<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>

        <div class="col-6 account">
          <form id="account">
              <div class="form-group row">
                  <label for="staticEmail" class="col-sm-3 col-form-label">Registration email</label>
                  <div class="col-sm-9">
                      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="em****@gmail.com">
                  </div>
              </div>

              <div class="form-group row">
                  <label for="firstName" class="col-sm-3 col-form-label">First name</label>
                  <div class="col-sm-9">
                      <input type="text" class="form-control" id="firstName" placeholder="Pre-populated First Name">
                  </div>
              </div>

              <div class="form-group row">
                  <label for="firstName" class="col-sm-3 col-form-label">Last name</label>
                  <div class="col-sm-9">
                      <input type="text" class="form-control" id="firstName" placeholder="Pre-populated Last Name">
                  </div>
              </div>
          </form>

          <div class="pswreset">
              <h4>Reset Password</h4>
              <div class="form-group">
                  <label for="passwordReset">Enter your email address</label>
                  <input type="email" class="form-control" id="passwordReset">
              </div>
              <button type="reset" class="btn btn-primary">Reset</button>
          </div>
        </div>

    </div>

</template>




<script>

  import CmsNav from "../components/profile/section/CmsNav";

    export default {
        components: {
            CmsNav
        }
    }

</script>
