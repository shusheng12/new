import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//user
const signin = () => import("../views/user/signin");
const forget = () => import("../views/user/forget");
const signup = () => import("../views/user/signup");
const new_user = () => import("../views/user/new_user");

//home
const Home = () => import("@/views/Home/Home");
const Search = () => import("@/views/Home/Search");
const newsDetail = () => import("@/views/Home/newsDetail");

// shop
const shop_home = () => import("@/views/Shop/shop_home");

const routes = [
  { path: "/", redirect: { name: "signin" } },
  //user
  {
    path: "/signin",
    name: "signin",
    component: signin
  },
  {
    path: "/signup",
    name: "signup",
    component: signup
  },
  {
    path: "/forget",
    name: "forget",
    component: forget
  },
  {
    path: "/new_user",
    name: "new_user",
    component: new_user
  },

  //home
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/Search",
    name: "Search",
    component: Search
  },
  {
    path: "/newsDetail",
    name: "newsDetail",
    component: newsDetail
  },

  //shop
  {
    path: "/shop_home",
    name: "shop_home",
    component: shop_home
  }
];

const router = new VueRouter({
  routes
});

export default router;
