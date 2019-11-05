<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt />
  </div>
</template>

<style lang="scss">
  @import '~bulma/sass/utilities/initial-variables.sass';
  html, body{
    background-color: $grey-dark;
    color: $white-ter;
  }
</style>
<script>
    import NavBar from "../components/NavBar";
    export default {
        components: {NavBar}
    }
</script>
