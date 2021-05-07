<template>

    <b-modal static @show="initModal" id="photo-modal" title="Profile image upload" hide-footer >
        <form id="photo-popup" @submit.prevent="crop">
                <vue-croppie ref="croppieRef" :enableOrientation="false" :showZoomer="false"  :enableResize="false" :mouseWheelZoom="false"  :boundary="{ width: 230, height: 230}" :viewport="{ width:200, height:200, 'type':'circle' }">
                </vue-croppie>

            <div v-if="defaultAvatar" style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="form-check-inline">
                    <label class="form-check-label"><input type="radio" class="form-check-input" @change="handleSexChange"  v-model="sex" value="Female" name="gender">Female</label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label"><input type="radio" class="form-check-input" @change="handleSexChange"  v-model="sex" value="Male" name="gender">Male</label>
                </div>
            </div>




            <div class="photo-icons">
                <div class="form-group icon-container">
                    <label for="upload" class="icon"><font-awesome-icon class="fas fa-camera fa-2x" icon="camera" /></label>
                    <input type="file" class="form-control-file" id="upload" @change="croppie" >
                    <p>Upload</p>
                </div>
                <div class="icon-container">
                    <a class="icon" v-on:click="clear">
                        <font-awesome-icon class="fas fa-camera fa-2x" icon="trash" />
                    </a>
                    <p>Delete</p>
                </div>
            </div>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('photo-modal')" style="margin-right: 20px">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save" >Save</button>
            </div>
        </form>
    </b-modal>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        data() {
            return {
                defaultAvatar: true,
                sex: 'Female'
            };
        },
        methods: {
            ...mapActions('account', ['uploadImage']),
            initModal() {
                this.handleSexChange()
            },
            croppie (e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                var reader = new FileReader();
                reader.onload = e => {
                    this.defaultAvatar = false;
                    this.$refs.croppieRef.bind({
                        url: e.target.result
                    }).then(document.getElementsByClassName('cr-slider')[0].style.display = '');

                };

                reader.readAsDataURL(files[0]);

            },
            handleSexChange() {
                if (this.sex === 'Female') {
                   return this.$refs.croppieRef.bind({
                        url: '/avatar_female.png',
                    })
                } else {
                    return this.$refs.croppieRef.bind({
                        url: '/avatar_male.png',
                    })
                }
            },
            clear () {
                this.handleSexChange().then(document.getElementsByClassName('cr-slider')[0].style.display = 'none')
                this.defaultAvatar = true;
            },
            crop() {
                let options = {
                    type: 'base64',
                    size: { width: 400, height: 400 },
                    format: 'png'
                };
                this.$refs.croppieRef.result(options, output => {
                    const id = 'id';
                    this.uploadImage({id, output});
                });
            }
        }
    };

</script>
