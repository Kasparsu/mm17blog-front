<template>
    <div>
      <card :post="post" v-if="post"></card>
    </div>
</template>

<script>
    import Card from "../../components/Card";
    export default {
        name: "_id",
        components: {Card},
        created(){
          this.$axios.$get('http://localhost:8080/api/posts/' + this.$route.params.id).then(resp=>{
            this.post = resp;
          });

        },
        data() {
            return {
                post:null
            }
        }
    }
</script>

<style scoped>

</style>
