import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: {},
    isModalOpen: false
  },
  mutations: {
    FETCHED_DATA(state, images) {
      state.images = {};
      state.images = images;
    },
    TOGGLE_MODAL(state) {
      state.isModalOpen = !state.isModalOpen;
    }
  },
  actions: {
    fetchedData(context, images) {
      context.commit("FETCHED_DATA", images);
    },
    toggleModal(context) {
      context.commit("TOGGLE_MODAL");
    }
  }
});
