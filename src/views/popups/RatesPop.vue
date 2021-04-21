<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container form">
  <div class="row">
    <div class="col-5">

      <form>
        <div class="form-title">
          <p>Show up to [4] rates by editing the below example. Required is #1 rate and columns with (*).</p>
        </div>

        <div class="table-container">
          <div class="table-comment">
            <p>Rate #1*</p>
            <p>Rate #2</p>
            <p>Rate #3</p>
            <p>Rate #4</p>
          </div>

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
                <td><input type="text" class="form-control" id="rate1" placeholder="$" required></td>
                <td><input type="number" class="form-control" id="rate1" placeholder="00" required></td>
                <td><input type="text" class="form-control" id="rate1" placeholder="per session" required></td>
                <td><input type="text" class="form-control" id="rate1" placeholder="Rates starting from"></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" id="rate2" placeholder="£" required disabled></td>
                <td><input type="number" class="form-control" id="rate2" placeholder="00" required disabled></td>
                <td><input type="text" class="form-control" id="rate2" placeholder="per month" required disabled></td>
                <td><input type="text" class="form-control" id="rate2" placeholder="University level students" disabled></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" id="rate3" placeholder="EUR" required disabled></td>
                <td><input type="number" class="form-control" id="rate3" placeholder="00" required disabled></td>
                <td><input type="text" class="form-control" id="rate3" placeholder="per hour" required disabled></td>
                <td><input type="text" class="form-control" id="rate3" placeholder="Students 5-7 years old" disabled></td>
              </tr>
              <tr>
                <td><input type="text" class="form-control" id="rate4" placeholder="R" required disabled></td>
                <td><input type="number" class="form-control" id="rate4" placeholder="00" required disabled></td>
                <td><input type="text" class="form-control" id="rate4" placeholder="per lesson" required disabled></td>
                <td><input type="text" class="form-control" id="rate4" placeholder="English (rates by subject)" disabled></td>
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
