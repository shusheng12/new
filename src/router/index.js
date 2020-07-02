import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const signin = () => import("../views/user/signin");
const forget = () => import("../views/user/forget");

const Home = () => import("@/views/Home/Home");

const routes = [
  {
    path: "/",
    name: "signin",
    component: signin
  },
  {
    path: "/forget",
    name: "forget",
    component: forget
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
