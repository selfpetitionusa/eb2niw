<template>

    <div class="edit-profile">
        <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
            <div class="startp-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">

                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                        </ul>

                        <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                        <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                            <ul class="navbar-nav nav ml-auto">
                                <li><a class="btn btn-primary btn-preview">Preview</a></li>
                                <li class="nav-item"><a href="/" class="nav-link">Account</a></li>
                                <li class="nav-item"><a href="/" class="nav-link">Help</a></li>
                                <li class="nav-item"><a href="/" class="nav-link">Logout</a></li>
                            </ul>
                        </b-collapse>

                    </nav>
                </div>
            </div>
        </header>

        <Profile v-bind:cmsToggleProp="true" v-bind:tokenProp="account.user.token"></Profile>
    </div>

</template>




<script>
    import { mapState } from 'vuex'
    import Profile from "../components/profile/Profile";

    export default {
        data(){
            return {
                isSticky: false
            }
        },
        components: {Profile},
        computed: {
            ...mapState({
                account: state => state.account
            })
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
    };
</script>
