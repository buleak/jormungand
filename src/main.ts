import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import store from "./stores/store";
import router from "./routes/index";
import "./plugins/element.js";

// Vue.use(VueSocketIO, socketio("http://localhost:3000"));
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

store.commit('increment')
console.log(store.state.count)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
