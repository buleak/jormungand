import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import router from "./router";
import './plugins/element.js'

Vue.prototype.$http = axios
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
