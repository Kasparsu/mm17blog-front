<template>
  <aside class="menu has-background-grey-light">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><nuxt-link to="/admin/">Dashboard</nuxt-link></li>
      <li><nuxt-link to="/admin/posts/add">Add Post</nuxt-link></li>
    </ul>
  </aside>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
aside {
  position: fixed;
  height: 100%;
  min-width: 10%;
}
</style>
