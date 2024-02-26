<template>
    <!-- Start Navbar Area -->
    <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img width="150px" src="./../resources/selfpetitionusa-logo.svg" alt="Self-Petition USA"/>
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>


                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav nav ml-auto" style="margin-top: 15px">
                            <li class="nav-item">
                                <a href="/" class="nav-link" v-scroll-to="'#templates'">Templates</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link" v-scroll-to="'#ai'">Artificial Intelligence</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link" v-scroll-to="'#bio'">My story</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link" v-scroll-to="'#timeline'">Timeline</a>
                            </li>
                        </ul>
                    </b-collapse>

                    <div class="others-option">

                    </div>
                </nav>
            </div>
        </div>
    </header>
    <!-- End Navbar Area -->
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            isSticky: false
        }
    },

    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            // eslint-disable-next-line no-console
            if(scrollPos >= 100){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    }
}
</script>
