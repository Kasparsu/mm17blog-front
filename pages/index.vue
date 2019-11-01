<template>
  <div>
    <ul>
      <li v-for="(el, key) in list" :key="key">{{el}}</li>
    </ul>
  </div>
</template>

<script>

export default {
    mounted(){
      this.$axios.$get('http://localhost:8080/api/posts').then(response => {
          response.data.forEach(data => {
              this.list.push(data.title);
          });
          console.log(response);
      });
    },
  data(){
      return {
          list: []
      }
  },
    methods:{

    }
}
</script>

<style>

</style>
