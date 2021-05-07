<template>

    <b-modal static id="education-modal" title="Bio" hide-footer>
        <form id="education-popup" class="cms">
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
                <font-awesome-icon class="icon" icon="plus-circle" v-bind:class="[isActiveSchoolPlus ? 'active' : 'disabled']" v-on:click="addSchool" />
                <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveSchoolMinus ? 'active' : 'disabled']" v-on:click="deleteSchool"/>
            </div>
            <p class="plus-minus-comment">University / School</p>

            <div id="certificates" v-for="certificate in certificates" :key="certificate.id">
                <div class="form-group">
                    <label for="certificate">Certificate</label>
                    <input type="text" class="form-control" id="certificate" v-model="certificate.certificate" v-on:change="descIsRequired" placeholder="Example: ATA Tutor">
                </div>

                <div class="form-group">
                    <label for="certDesc">Certificate description</label>
                    <input type="text" class="form-control" id="certDesc" v-model="certificate.certDesc" placeholder="Example: American Tutoring Association">
                </div>
            </div>

            <div class="plus-minus">
                <font-awesome-icon class="icon" icon="plus-circle" v-bind:class="[isActiveCertificatePlus ? 'active' : 'disabled']" v-on:click="addCertificate" />
                <font-awesome-icon class="icon" icon="minus-circle" v-bind:class="[isActiveCertificateMinus ? 'active' : 'disabled']" v-on:click="deleteCertificate" />
            </div>
            <p class="plus-minus-comment">Certificate</p>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('education-modal')">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
            </div>
        </form>
    </b-modal>

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
              }],
              schoolsNumber: 1,
              certificatesNumber: 1,
              isActiveSchoolPlus: true,
              isActiveSchoolMinus: true,
              isActiveCertificatePlus: true,
              isActiveCertificateMinus: true
          }
      },
      methods: {
          addSchool: function() {
              if(this.schoolsNumber < 3) {
                  this.schools.push({
                      school: "",
                      degree: ""
                  });
                  this.isActiveSchoolMinus = true;
                  this.schoolsNumber++;
              }
              if(this.schoolsNumber === 3) {
                  this.isActiveSchoolPlus = false;
              }
          },
          deleteSchool: function() {
              if(this.schoolsNumber > 1) {
                  this.schools.pop();
                  this.isActiveSchoolPlus = true;
                  this.schoolsNumber--;
              }
              if(this.schoolsNumber === 1) {
                  this.isActiveSchoolMinus = false;
              }
          },
          addCertificate: function() {
              if(this.certificatesNumber < 3) {
                  this.certificates.push({
                      certificate: "",
                      certDesc: ""
                  });
                  this.isActiveCertificateMinus = true;
                  this.certificatesNumber++;
              }
              if(this.certificatesNumber === 3) {
                  this.isActiveCertificatePlus = false;
              }
          },
          deleteCertificate: function() {
              if(this.certificatesNumber > 1) {
                  this.certificates.pop();
                  this.isActiveCertificatePlus = true;
                  this.certificatesNumber--;
              }
              if(this.certificatesNumber === 1) {
                  this.isActiveCertificateMinus = false;
              }
          },
          descIsRequired: function() {
              let x= document.getElementById('certDesc');
              let y= document.getElementById('certificate');

              if(y.value.length !== 0){
                  x.setAttribute('required', "");
              } else {
                  x.removeAttribute('required');
              }
          }
      }
  }

</script>
