<template>
    <router-view></router-view>
</template>
<script>

  import { mapActions } from 'vuex'

  export default {
  name: 'app',
  components: {

  },
    methods: {
      ...mapActions({
        clearAlert: 'alert/clear'
      })
    },
    watch: {
      $route (){
        this.clearAlert();
      }
    },
    metaInfo() {
    return {
      title: "Self-petition green card for professionals"
    }
  }
}
</script>
