<template>
    <div>
      <card :post="$store.state.post" v-if="$store.state.post"></card>
    </div>
</template>

<script>
    import Card from "../../components/Card";
    export default {
        name: "_id",
        components: {Card},
        created(){
            this.$store.dispatch('setPost', this.$route.params.id);
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
