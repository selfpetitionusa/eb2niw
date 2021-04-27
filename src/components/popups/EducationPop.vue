<template>


<!-- HEADLINE & EDUCATION POPUP -->
<div class="container cms">
  <div class="row">
    <div class="col-5">

      <form id="education-popup">
        <div class="form-title">
          <p class="first">What? Who? Where do you tutor?</p>
        </div>

        <div class="form-group">
          <label for="headline">Headline *</label>
          <input type="text" class="form-control" id="headline" placeholder="Example: Math tutor for 1-12th grade in San Francisco" required>
        </div>

        <div class="form-title">
          <p>Your education and qualifications</p>
        </div>

        <div id="schools" v-for="school in schools" :key="school.id">
          <div class="form-group">
            <label for="school">University or school *</label>
            <input type="text" class="form-control" id="school" placeholder="Example: Ohio University" v-model="school.school" required>
          </div>

          <div class="form-group">
            <label for="degree">Degree and field of study *</label>
            <input type="text" class="form-control" id="degree" placeholder="Example: BS Applied Mathematics" v-model="school.degree" required>
          </div>
        </div>

        <div class="plus-minus">
          <font-awesome-icon class="icon" icon="plus-circle" v-on:click="addSchool" />
          <font-awesome-icon class="icon" icon="minus-circle" v-on:click="deleteSchool"/>
        </div>
        <p class="plus-minus-comment">University / School</p>

        <div id="certificates" v-for="certificate in certificates" :key="certificate.id">
          <div class="form-group">
            <label for="certificate">Certificate</label>
            <input type="text" class="form-control" id="certificate" v-model="certificate.certificate" placeholder="Example: ATA Tutor">
          </div>

          <div class="form-group">
            <label for="certDesc">Certificate description</label>
            <input type="text" class="form-control" id="certDesc" v-model="certificate.certDesc" placeholder="Example: American Tutoring Association">
          </div>
        </div>

        <div class="plus-minus">
          <font-awesome-icon class="icon" icon="plus-circle" v-on:click="addCertificate" />
          <font-awesome-icon class="icon" icon="minus-circle" v-on:click="deleteCertificate" />
        </div>
        <p class="plus-minus-comment">Certificate</p>

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
    data() {
        return {
            schools: [{
                    school: "",
                    degree: ""
                }],
            certificates: [{
                    certificate: "",
                    certDesc: ""
                }]
        }
    },
    methods: {
        addSchool: function() {
            this.schools.push({
                school: "",
                degree: ""
            })
        },
        deleteSchool: function() {
            this.schools.pop()
        },
        addCertificate: function() {
            this.certificates.push({
                certificate: "",
                certDesc: ""
            })
        },
        deleteCertificate: function() {
            this.certificates.pop()
        }
    }
}

</script>
