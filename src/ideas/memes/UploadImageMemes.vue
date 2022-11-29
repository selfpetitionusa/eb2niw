<template>
    <div>
        <div class="jumbotron" style="height: 100%; background: rgb(249, 246, 246)">
            <div class="row banner-action-btns">
                <div class="col-xl-5 col-lg-5">
                    
                    <div>
                        <img id="output" width="200" />
                    </div>

                    <form id="image-upload">    
                        <div class="row justify-content-center form-group">
                            <div class="col-sm-7 col-8">
                                <label for="upload" class="btn btn-primary btn-register btn-profile">Upload image</label>
                                <input type="file" accept="image/*" name="image" id="upload" ref="upload" @change="onFileChange" style="display: none;">
                            </div>
                        </div>
                    </form>   
                    
                    <div class="row justify-content-center" style="margin-top: 1rem">
                        <div class="col-sm-4 col-6">
                            <a href="/upload-photo" class="btn btn-primary btn-cancel-dark btn-border-dark">NEXT>></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            url: null,
            }
        },
        methods: {
            onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            }
        }
    }


</script>