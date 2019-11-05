<template>
  <div>
    <div class="section">
      <a class="button is-dark" @click="loadPrevPosts" v-if="pagination.prev_page_url">Prev</a>
      <a class="button is-dark" @click="loadNextPosts" v-if="pagination.next_page_url">Next</a>
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="(post,index) in posts" :key="index">
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
        this.loadPosts('http://localhost:8080/api/posts');
    },
  data(){
      return {
          posts: [],
          pagination: {}
      }
  },
    methods:{
        loadPosts(url){
            this.$axios.$get(url).then(response => {
                this.posts = response.data;
                delete response.data;
                this.pagination = response;
                console.log(response);
            });
        },
        loadNextPosts(){
            this.loadPosts(this.pagination.next_page_url);
        },
        loadPrevPosts(){
            this.loadPosts(this.pagination.prev_page_url);
        }
    }
}
</script>

<style>

</style>
