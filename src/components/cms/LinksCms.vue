<template>

    <div class="social-links">
        <ul>
            <li v-if="!response.profile.links.facebookLink && !response.profile.links.youtubeLink && !response.profile.links.instagramLink && !response.profile.links.linkedInLink" class="cms-media">Your social media</li>
        </ul>
    </div>

</template>



<script>

    export default {
        data () {
            return {
                response: {
                    profile: {links: {}},
                }
            }
        }
    }

</script>
