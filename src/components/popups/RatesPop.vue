<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="rates-popup">
        <div class="form-title">
          <p>Show up to [4] rates by editing the below example *</p>
        </div>

        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th class="col1">Currency*</th>
                <th class="col2">Rate*</th>
                <th class="col3">Session type*</th>
                <th class="col4">Rate comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" class="form-control" id="rate1" required></td>
                <td><input type="number" class="form-control" id="rate1" required></td>
                <td>
                  <select class="form-control select" id="rate1" required>
                      <option selected>per session</option>
                      <option>per lesson</option>
                      <option>per hour</option>
                      <option>per month</option>
                      <option>Type your own</option>
                  </select>
                </td>
                <td><input type="text" class="form-control" id="rate1" placeholder="Example: Rates starting from"></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" id="rate2" required disabled></td>
                <td><input type="number" class="form-control" id="rate2" required disabled></td>
                <td>
                  <select class="form-control select" id="rate2" required disabled>
                      <option selected>per session</option>
                      <option>per lesson</option>
                      <option>per hour</option>
                      <option>per month</option>
                      <option>Type your own</option>
                  </select>
                </td>
                <td><input type="text" class="form-control" id="rate2" placeholder="Example: University level students" disabled></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" id="rate3" required disabled></td>
                <td><input type="number" class="form-control" id="rate3" required disabled></td>
                <td>
                  <select class="form-control select" id="rate3" required disabled>
                      <option selected>per session</option>
                      <option>per lesson</option>
                      <option>per hour</option>
                      <option>per month</option>
                      <option>Type your own</option>
                  </select>
                </td>
                <td><input type="text" class="form-control" id="rate3" placeholder="Example: Students 5-7 years old" disabled></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" id="rate4" required disabled></td>
                <td><input type="number" class="form-control" id="rate4" required disabled></td>
                <td>
                  <select class="form-control select" id="rate4" required disabled>
                      <option selected>per session</option>
                      <option>per lesson</option>
                      <option>per hour</option>
                      <option>per month</option>
                      <option>Type your own</option>
                  </select>
                </td>
                <td><input type="text" class="form-control" id="rate4" placeholder="Example: English (rates by subject)" disabled></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="form-group">
          <label for="lesson-length">How long is your standard lesson?</label>
          <div class="lesson">
            <input type="number" class="form-control" id="lesson-length">
            <p>minutes</p>
          </div>
        </div>

        <div class="form-group">
          <label for="additional-comment">Additional comment for rates</label>
          <input type="text" class="form-control" id="additional-comment" placeholder="Example: Discounts available upon request">
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
