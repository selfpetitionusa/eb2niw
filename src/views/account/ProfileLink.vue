<template>

    <div class="container-fluid pt-3">
        <form class="cms">
            <div class="form-group row">
            <label for="profileLink" class="col-lg-12 col-form-label">For marketing and sharing with your clients</label>
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-11">
                        <input type="text" class="form-control" disabled v-model="profileLink" id="profileLink" >
                    </div>

                    <div class="col-lg-1">
                        <a  href="#" v-on:click="doCopy">
                            <font-awesome-icon   style="font-size: 35px;margin-top: 5px;" icon="copy" />
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </form>
    </div>

</template>



<script>

    import {mapActions} from "vuex";

    export default {
       computed: {
         profileLink: function () {
             return `https://www.tutomy.com/tutor/${this.model.profile.token}`
         }
       },
        props: ['model'],
        mounted() {
            this.clear();
        },
        methods: {
            ...mapActions('account', ['copyProfileLink']),
            ...mapActions('alert', ['clear']),
            doCopy: function () {
                const self = this;
                this.$copyText(this.profileLink).then(() => self.copyProfileLink());
            }

        }
    }
</script>
