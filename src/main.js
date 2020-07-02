import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//重置样式
import "@/assets/css/normalize.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
