<template>
  <div>
    <nav-bar></nav-bar>
    <div class="columns">
      <div class="column is-one-fifth">
        <side-bar></side-bar>
      </div>
      <div class="column">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
    import NavBar from "../components/NavBar";
    import SideBar from "../components/SideBar";
    export default {
        components: {SideBar, NavBar}
    }
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/initial-variables.sass';
  html, body{
    background-color: $grey-dark;
    color: $white-ter;
  }
</style>
