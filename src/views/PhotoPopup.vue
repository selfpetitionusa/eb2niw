<template>


    <!-- HEADLINE & EDUCATION POPUP -->
    <div class="container cms">
        <div class="row">
            <div class="col-5">

                <form id="photo-popup" @submit.prevent="crop">
                        <vue-croppie ref="croppieRef" :enableOrientation="false"  :enableResize="false" :mouseWheelZoom="true"  :boundary="{ width: 300, height: 300}" :viewport="{ width:200, height:200, 'type':'circle' }">
                        </vue-croppie>
                    <div class="photo-icons">
                        <div class="form-group icon-container">
                            <label for="upload" class="icon"><font-awesome-icon class="fas fa-camera fa-2x" icon="camera" /></label>
                            <input type="file" class="form-control-file" id="upload" @change="croppie" >
                            <p>Upload</p>
                        </div>
                        <div class="icon-container">
                            <a style="background-color:rgba(0, 0, 0, 0); border: 0px;"  v-on:click="clear">
                                <div class="icon"><font-awesome-icon class="fas fa-camera fa-2x" icon="trash" /></div>
                            </a>
                            <p>Delete</p>
                        </div>
                    </div>

                    <div class="btn-container">
                        <a class="btn btn-primary btn-border btn-cancel">Cancel</a>
                        <button type="submit" class="btn btn-primary btn-border btn-save" >Save</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions} from "vuex";

    export default {
        data() {
            return {
                default: true
            };
        },
        mounted() {
            this.$refs.croppieRef.bind({
                url: '/avatar_female.png',
            })
        },
        methods: {
            ...mapActions('account', ['uploadImage']),
            croppie (e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                var reader = new FileReader();
                reader.onload = e => {
                    this.$refs.croppieRef.bind({
                        url: e.target.result
                    });
                    this.default = false;
                };

                reader.readAsDataURL(files[0]);
            },
            clear () {
                this.$refs.croppieRef.bind({
                    url: '/avatar_female.png',
                })
                this.default = true;
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
