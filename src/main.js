import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//重置样式
import "@/assets/css/normalize.css";
import "@/assets/css/icon/iconfont.css";

// vant
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

// 引入自定义弹出框
import popup from "@/components/common/Popup/Popup.js";
Vue.use(popup);

// 轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper);

// 视频播放插件
import VideoPlayer from "vue-video-player";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
