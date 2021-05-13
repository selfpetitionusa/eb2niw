<template>
    <div class="nav-cms">
        <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
            <div class="startp-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md">
                        <ul>
                            <li class="nav-item"><a href="/dashboard" class="nav-link">Home</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <Profile v-bind:cmsToggleProp="false" v-bind:tokenProp="this.$route.params.token" class="nav-margin"></Profile>
    </div>
</template>


<script>
    import Profile from "../components/profile/Profile";

    export default {
        components: {Profile}
    };
</script>
