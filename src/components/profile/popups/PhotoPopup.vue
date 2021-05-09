<template>

    <b-modal static @show="initModal" id="photo-modal" title="Profile image upload" hide-footer >
        <div v-if="alert.failed" :class="`alert ${alert.type}`">{{alert.message}}</div>
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
                    <label for="upload" class="icon camera"><font-awesome-icon icon="camera" /></label>
                    <input type="file" class="form-control-file" id="upload" @change="croppie" >
                    <p>Upload</p>
                </div>
                <div class="icon-container">
                    <a class="icon trash" v-on:click="clearImage">
                        <font-awesome-icon icon="trash" />
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
    import {mapState, mapActions} from "vuex";

    export default {
        data() {
            return {
                defaultAvatar: true,
                sex: null
            };
        },
        props: ['profileProp'],
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account
            }),

        },
        watch: {
            'account.status': function (val) {
                if(val.uploadedImage)
                    this.$bvModal.hide('photo-modal');
            }
        },
        methods: {
            ...mapActions('account', ['uploadImage']),
            ...mapActions('alert', ['clear']),
            initModal() {
                this.clear();
                this.sex = this.profileProp.profile.sex;
                if(this.profileProp.profile.photo) {
                    this.defaultAvatar = false;
                    this.$refs.croppieRef.bind({
                        url: this.profileProp.profile.photo
                    }).then(document.getElementsByClassName('cr-slider')[0].style.display = '');
                } else {
                    this.handleSexChange();
                }
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
            clearImage () {
                this.handleSexChange().then(document.getElementsByClassName('cr-slider')[0].style.display = 'none')
                this.defaultAvatar = true;
            },
            crop() {
                if(this.defaultAvatar) {
                    let sex = this.sex;
                    this.uploadImage({sex});
                } else {
                    let options = {
                        type: 'base64',
                        size: { width: 400, height: 400 },
                        format: 'png'
                    };
                    this.$refs.croppieRef.result(options, image => {
                        this.uploadImage({image});
                    });
                }


            }
        }
    };

</script>
