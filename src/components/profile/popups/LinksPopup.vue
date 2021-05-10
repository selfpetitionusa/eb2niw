<template>

    <b-modal static id="links-modal" title="Social media" hide-footer>
        <form id="links-popup" class="cms">
            <div class="form-title">
                <div>Include social media to help website visitors learn more:</div>
                <ul>
                    <li>Open your social media profile</li>
                    <li>Copy profile link from the browser (https:/www.facebook.com/...)</li>
                </ul>
            </div>

            <div class="form-group">
                <label for="facebook">Facebook</label>
                <div class="link-popup">
                    <div class="logo"><feather type="facebook"></feather></div>
                    <input type="text" class="form-control" id="facebook" placeholder="https://www.facebook.com/YOUR-PROFILE-OR-PAGE">
                </div>
            </div>

            <div class="form-group">
                <label for="instagram">Instagram</label>
                <div class="link-popup">
                    <div class="logo"><feather type="instagram"></feather></div>
                    <input type="text" class="form-control" id="instagram" placeholder="https://www.instagram.com/YOUR-PROFILE">
                </div>
            </div>

            <div class="form-group">
                <label for="youtube">YouTube channel</label>
                <div class="link-popup">
                    <div class="logo"><feather type="youtube"></feather></div>
                    <input type="text" class="form-control" id="youtube" placeholder="https://www.youtube.com/c/YOUR-CHANNEL/featured">
                </div>
            </div>

            <div class="form-group">
                <label for="linkedin">LinkedIn</label>
                <div class="link-popup">
                    <div class="logo"><feather type="linkedin"></feather></div>
                    <input type="text" class="form-control" id="linkedin" placeholder="https://www.linkedin.com/in/YOUR-PROFILE">
                </div>
            </div>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('links-modal')">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
            </div>
        </form>
    </b-modal>

</template>
