<template>

    <b-modal static id="name-modal" title="Main information about you" hide-footer>
        <form id="name-popup" class="cms">
            <div class="form-group">
                <label for="firstName">First name *</label>
                <input type="text" class="form-control" id="firstName" v-model="firstName" required>
            </div>

            <div class="form-group">
                <label for="lastName">Last name *</label>
                <input type="text" class="form-control" id="lastName" required>
            </div>

            <div class="form-group">
                <label for="email">E-mail *</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                <small id="emailHelp" class="form-text text-muted">For website visitors to contact you</small>
            </div>

            <div class="form-title">
                <p>Name and subject list will be automatically populated after you complete “Subjects” section.</p>
            </div>

            <div class="form-group">
                <label for="shortBio-1">Introduction - first row</label>
                    <div v-if="firstName">
                        <input type="text" class="form-control" id="shortBio-1" :placeholder="'Hi, my name is ' + firstName + '.'">
                    </div>
                    <div v-else>
                        <input type="text" class="form-control" id="shortBio-1" placeholder="Hi, my name is <name>.">
                    </div>
            </div>

            <div class="form-group">
                <label for="shortBio-2">Introduction - second row</label>
                <input type="text" class="form-control" id="shortBio-2" placeholder="I teach <Subject 1>.">
            </div>

            <div class="form-group">
                <label for="shortBio-3">Introduction - third row</label>
                <input type="text" class="form-control" id="shortBio-3" placeholder="Welcome to my website!">
            </div>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('name-modal')">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
            </div>
        </form>
    </b-modal>

</template>




<script>

export default {
    data () {
        return {
            firstName: ""
        }
    }
}

</script>
