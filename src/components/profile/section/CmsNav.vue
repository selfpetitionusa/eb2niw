<template>

    <div class="nav-cms">
        <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
            <div class="startp-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md">

                        <ul>
                            <li class="nav-item"><a href="/dashboard" class="nav-link">Home</a></li>
                        </ul>

                        <div v-if="previewToggle" class="mr-auto">
                            <a href="/preview" class="btn btn-primary btn-preview">Preview</a>
                        </div>

                        <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                        <b-collapse class="collapse" id="navbarSupportedContent" is-nav>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><a href="/account/profile-link" class="nav-link">My account</a></li>
                                <li class="nav-item"><a href="/help" class="nav-link">Help</a></li>
                                <li class="nav-item"><a class="nav-link"><router-link to="/login">Logout</router-link></a></li>
                            </ul>
                        </b-collapse>

                    </nav>
                </div>
            </div>
        </header>
    </div>

</template>




<script>

    export default {
        props: ['previewToggleProp'],
        data() {
            return {
                isSticky: false,
                previewToggle: this.previewToggleProp
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
    };

</script>
