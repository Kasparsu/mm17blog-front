<template>
  <div>
    <div class="section">
      <a class="button is-dark" @click="loadPrevPosts" v-if="$store.state.pagination.prev_page_url">Prev</a>
      <a class="button is-dark" @click="loadNextPosts" v-if="$store.state.pagination.next_page_url">Next</a>
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="(post,index) in $store.state.posts" :key="index">
          <card :post="post"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Card from "../components/Card";
export default {
    components: {Card},
    mounted(){
        this.$store.dispatch('loadPosts', 'http://localhost:8080/api/posts');
    },
  data(){
      return {

      }
  },
    methods:{
        loadNextPosts(){
            this.$store.dispatch('loadPosts', this.$store.state.pagination.next_page_url);
        },
        loadPrevPosts(){
            this.$store.dispatch('loadPosts', this.$store.state.pagination.prev_page_url);
        }
    }
}
</script>

<style>

</style>
