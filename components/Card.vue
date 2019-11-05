<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{post.title}}
      </p>
    </header>
    <div class="card-image" v-if="post.images.length">
      <figure class="image is-4by3">
        <img :src="post.images[0].path" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{post.author.name}}</p>
        </div>
      </div>

      <div class="content">
        <p v-html="post.snippet + '...'"></p>
        <a class="button is-primary">Read more</a>
        <br>
        <time datetime="2016-1-1">{{post.human_date}}</time>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['post'],
        name: "Card",
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>
