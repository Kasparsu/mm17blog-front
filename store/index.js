export const state = () => ({
  posts: [],
  pagination: {}
});

export const mutations = {
  SET_POSTS(state, payload){
    state.posts = payload;
  },
  SET_PAGINATION(state, payload){
    state.pagination = payload;
  }
};

export const actions = {
  loadPosts(context, url){
    this.$axios.$get(url).then(response => {
      context.commit('SET_POSTS', response.data);
      delete response.data;
      context.commit('SET_PAGINATION', response);
    });
  }
};

export const getters = {

};
