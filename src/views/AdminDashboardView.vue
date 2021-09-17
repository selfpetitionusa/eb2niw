<template>
    <div class="jumbotron" style="height: 100%">
        <b-table striped hover :items="leads"></b-table>
        <b-table striped hover :items="users"></b-table>
    </div>


</template>



<script>


    import { mapState, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapState({
                leads: state => state.admin.leads,
                users: state => state.admin.users
            })
        },
        methods: {
            ...mapActions('admin', ['getUsers', 'getLeads'])
        },
        created() {
            this.getUsers();
            this.getLeads();
        }
    };

</script>
