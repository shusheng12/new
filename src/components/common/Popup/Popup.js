const obj = {};
import Vue from "vue";
import Popup from "./Popup.vue";

obj.install = function () {
  const newPopup = Vue.extend(Popup);
  const popup = new newPopup();
  popup.$mount(document.createElement("div"));
  document.body.appendChild(popup.$el);
  // console.log(Toast.$el);
  Vue.prototype.$popup = popup;
};

export default obj;
