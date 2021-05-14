<template>

    <b-modal static id="rates-modal" title="Rates" hide-footer>
        <form id="rates-popup" class="cms">
            <div class="form-title">
                <p>Show up to 4 rates by editing the below example *</p>
            </div>

            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="col1">Currency*</th>
                            <th class="col2">Rate*</th>
                            <th class="col3">Session type*</th>
                            <th class="col4">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" class="form-control" id="rateCurrency-1" v-on:input="enableInputRate2" required></td>
                            <td><input type="number" class="form-control" id="rateAmount-1" v-on:input="enableInputRate2" required></td>
                            <td>
                                <input class="form-control" list="select-1" id="rateType-1" v-on:input="enableInputRate2" required>
                                <datalist id="select-1">
                                    <option selected>per session</option>
                                    <option>per lesson</option>
                                    <option>per hour</option>
                                    <option>per month</option>
                                    <option>Type your own</option>
                                </datalist>
                            </td>
                            <td><input type="text" class="form-control" id="rateComment-1" v-on:input="enableInputRate2" placeholder="Ex: Rates starting from"></td>
                        </tr>

                        <tr>
                            <td><input type="text" class="form-control" id="rateCurrency-2" v-on:input="enableInputRate3" disabled></td>
                            <td><input type="number" class="form-control" id="rateAmount-2" v-on:input="enableInputRate3" disabled></td>
                            <td>
                                <input class="form-control" list="select-2" id="rateType-2" v-on:input="enableInputRate3" disabled>
                                <datalist id="select-2">
                                    <option selected>per session</option>
                                    <option>per lesson</option>
                                    <option>per hour</option>
                                    <option>per month</option>
                                    <option>Type your own</option>
                                </datalist>
                            </td>
                            <td><input type="text" class="form-control" id="rateComment-2" placeholder="Ex: University level students" v-on:input="enableInputRate3" disabled></td>
                        </tr>

                        <tr>
                            <td><input type="text" class="form-control" id="rateCurrency-3" v-on:input="enableInputRate4" disabled></td>
                            <td><input type="number" class="form-control" id="rateAmount-3" v-on:input="enableInputRate4" disabled></td>
                            <td>
                                <input class="form-control" list="select-3" id="rateType-3" v-on:input="enableInputRate4" disabled>
                                <datalist id="select-3">
                                    <option selected>per session</option>
                                    <option>per lesson</option>
                                    <option>per hour</option>
                                    <option>per month</option>
                                    <option>Type your own</option>
                                </datalist>
                            </td>
                            <td><input type="text" class="form-control" id="rateComment-3" placeholder="Ex: Students 5-7 years old" v-on:input="enableInputRate4" disabled></td>
                        </tr>

                        <tr>
                            <td><input type="text" class="form-control" id="rateCurrency-4" disabled></td>
                            <td><input type="number" class="form-control" id="rateAmount-4" disabled></td>
                            <td>
                                <input class="form-control" list="select-4" id="rateType-4" disabled>
                                <datalist id="select-4">
                                    <option selected>per session</option>
                                    <option>per lesson</option>
                                    <option>per hour</option>
                                    <option>per month</option>
                                    <option>Type your own</option>
                                </datalist>
                            </td>
                            <td><input type="text" class="form-control" id="rateComment-4" placeholder="Ex: English (rates by subject)" disabled></td>
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
                <input type="text" class="form-control" id="additional-comment" placeholder="Ex: Discounts available upon request">
            </div>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('rates-modal')">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
            </div>
        </form>
    </b-modal>

</template>




<script>

  export default {
      methods: {
          enableInputRate2: function() {
              document.getElementById('rateCurrency-2').removeAttribute('disabled');
              document.getElementById('rateAmount-2').removeAttribute('disabled');
              document.getElementById('rateType-2').removeAttribute('disabled');
              document.getElementById('rateComment-2').removeAttribute('disabled');
          },
          enableInputRate3: function() {
              document.getElementById('rateCurrency-3').removeAttribute('disabled');
              document.getElementById('rateAmount-3').removeAttribute('disabled');
              document.getElementById('rateType-3').removeAttribute('disabled');
              document.getElementById('rateComment-3').removeAttribute('disabled');
          },
          enableInputRate4: function() {
              document.getElementById('rateCurrency-4').removeAttribute('disabled');
              document.getElementById('rateAmount-4').removeAttribute('disabled');
              document.getElementById('rateType-4').removeAttribute('disabled');
              document.getElementById('rateComment-4').removeAttribute('disabled');
          },
          inputIsRequired: function() {
              const u = document.forms['rates-popup']['rateCurrency-1'].value;
              const v = document.forms['rates-popup']['rateAmount-1'].value;
              const w = document.forms['rates-popup']['rateType-1'].value;

              const x = document.forms['rates-popup']['rateCurrency-2'].value;
              const y = document.forms['rates-popup']['rateAmount-2'].value;
              const z = document.forms['rates-popup']['rateType-2'].value;

              const a = document.forms['rates-popup']['rateCurrency-3'].value;
              const b = document.forms['rates-popup']['rateAmount-3'].value;
              const c = document.forms['rates-popup']['rateType-3'].value;

              const p = document.forms['rates-popup']['rateCurrency-4'].value;
              const q = document.forms['rates-popup']['rateAmount-4'].value;
              const r = document.forms['rates-popup']['rateType-4'].value;

              if ( (u !== "" && v === "" && w === "") || (u === "" && v !== "" && w === "") || (u === "" && v === "" && w !== "") || (u !== "" && v !== "" && w === "") || (u !== "" && v === "" && w !== "") || (u === "" && v !== "" && w !== "") ) {
                  alert("For each added rate provide: currency, rate and session type");
                  return false;
                  }
              if ( (x !== "" && y === "" && z === "") || (x === "" && y !== "" && z === "") || (x === "" && y === "" && z !== "") || (x !== "" && y !== "" && z === "") || (x !== "" && y === "" && z !== "") || (x === "" && y !== "" && z !== "") ) {
                  alert("For each added rate provide: currency, rate and session type");
                  return false;
                  }
              if ( (a !== "" && b === "" && c === "") || (a === "" && b !== "" && c === "") || (a === "" && b === "" && c !== "") || (a !== "" && b !== "" && c === "") || (a !== "" && b === "" && c !== "") || (a === "" && b !== "" && c !== "") ) {
                  alert("For each added rate provide: currency, rate and session type");
                  return false;
                  }
              if ( (p !== "" && q === "" && r === "") || (p === "" && q !== "" && r === "") || (p === "" && q === "" && r !== "") || (p !== "" && q !== "" && r === "") || (p !== "" && q === "" && r !== "") || (p === "" && q !== "" && r !== "") ) {
                  alert("For each added rate provide: currency, rate and session type");
                  return false;
                  }
          }
      }
  }

</script>
