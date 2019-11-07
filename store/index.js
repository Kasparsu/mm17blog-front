export const state = () => ({
  posts: [],
  pagination: {},
  post:null
});

export const mutations = {
  SET_POSTS(state, payload){
    state.posts = payload;
  },
  SET_PAGINATION(state, payload){
    state.pagination = payload;
  },
  SET_POST(state,post){
    state.post = post;
  }
};

export const actions = {
  loadPosts(context, url){
    this.$axios.$get(url).then(response => {
      context.commit('SET_POSTS', response.data);
      delete response.data;
      context.commit('SET_PAGINATION', response);
    });
  },
  setPost(context, id){
    let index = context.state.posts.findIndex(post => post.id == id);
    if(index>=0) {
      context.commit('SET_POST', context.state.posts[index]);
    } else {
      this.$axios.$get('http://localhost:8080/api/posts/' + id).then(response => {
        context.commit('SET_POST', response);
      })

    }
  }
};

export const getters = {

};
