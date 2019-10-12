import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // 状态 --> data
    count: 1
  },
  mutations: { // 变化 --> methods
    increment(state) {
      state.count++
    }
  },
  actions: {}
});
