<template>

    <div>
        <YouTubePopup class="cms"></YouTubePopup>
        <div class="YT-cms">
            <a href="#" v-b-modal.youtube-modal>
                <font-awesome-icon class="fas fa-plus-circle fa-3x" icon="plus-circle" />
            </a>
            <p>Do you have a YouTube video?</p>
            <p>Show parents and students your value and tutoring style.</p>
        </div>
    </div>

</template>




<script>

        import YouTubePopup from '../../profile/popups/YouTubePopup';

    export default {
        components: {
            YouTubePopup
        }
    }

</script>
