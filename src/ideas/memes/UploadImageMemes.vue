<template>
  <div>
    <div class="jumbotron" style="height: 100%; background: rgb(249, 246, 246)">
        <div class="row banner-action-btns">
            <div class="col-xl-5 col-lg-5">
                
                 <form id="image-upload" @submit.prevent="crop">
                    <vue-croppie ref="croppieRef" :enableOrientation="false" :showZoomer="false"  :enableResize="false" :mouseWheelZoom="false"  :boundary="{ width: 230, height: 230}" :viewport="{ width:200, height:200, 'type':'circle' }">
                    </vue-croppie>

                    <div class="row justify-content-center">
                        <div class="col-sm-7 col-8 form-group">
                            <label for="upload" class="btn btn-primary btn-register btn-profile">UPLOAD IMAGE</label>
                            <input type="file" class="form-control-file" id="upload" ref="upload" @change="croppie" >
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
