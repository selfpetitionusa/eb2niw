<template>

    <b-modal static id="youtube-modal" title="Introduction video" hide-footer>
        <form id="youtube-popup" class="cms">
            <div class="form-title">
                <p>Paste video link with your introduction, lesson tutorial, presentation of your tutoring style, or other</p>
            </div>

            <div class="form-group">
                <label for="youtube">Video - for example link to your YouTube video</label>
                <input type="text" class="form-control" id="youtube" placeholder="https://www.youtube.com/YOUR-VIDEO">
            </div>

            <div class="btn-container">
                <a class="btn btn-primary btn-border btn-cancel" @click="$bvModal.hide('youtube-modal')">Cancel</a>
                <button type="submit" class="btn btn-primary btn-border btn-save">Save</button>
            </div>
        </form>
    </b-modal>

</template>
