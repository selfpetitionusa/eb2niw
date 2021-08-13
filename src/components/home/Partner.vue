<template>
    <!-- Start Partner Area -->
    <div class="partner-area partner-section">
        <div class="container">
            <h5>Learn how others use a tutoring website to find students!</h5>

            <div class="partner-inner">
                <ul class="social-links">
                    <div class="row">
                        <li class="col-4">
                            <a class="facebook" @click="$gtag.event('social-fb')" href="https://www.facebook.com/groups/fortutorsbytutors"><feather type="facebook"></feather></a>
                        </li>

                        <li class="col-4">
                            <a class="youtube" @click="$gtag.event('social-yt')" href="https://www.youtube.com/channel/UCPiCaTX8uBdnQzMO4w3QeYA"><feather type="youtube"></feather></a>
                        </li>

                        <li class="col-4">
                            <a class="linkedin" @click="$gtag.event('social-ln')" href="https://www.linkedin.cn/company/tutomy/"><feather type="linkedin"></feather></a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
    <!-- End Partner Area -->
</template>

<script>
export default {
    name: 'Partner'
}
</script>
