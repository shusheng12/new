import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//user
const signin = () => import("../views/user/signin"); //登录
const forget = () => import("../views/user/forget");
const signup = () => import("../views/user/signup");
const new_user = () => import("../views/user/new_user");

//home
const Home = () => import("@/views/Home/Home"); //新闻首页
const Search = () => import("@/views/Home/Search"); //搜索页
const newsDetail = () => import("@/views/Home/newsDetail"); //详情页

// shop
const shop_home = () => import("@/views/Shop/shop_home"); //购物首页

const routes = [
  { path: "/", redirect: { name: "signin" } },
  //user
  {
    path: "/signin",
    name: "signin",
    component: signin,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },
  {
    path: "/forget",
    name: "forget",
    component: forget,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },

  //home
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      footShow: true // true显示，false隐藏
    }
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },
  {
    path: "/newsDetail",
    name: "newsDetail",
    component: newsDetail,
    meta: {
      footShow: true // true显示，false隐藏
    }
  },
  {
    path: "/new_user",
    name: "new_user",
    component: new_user,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },

  //shop
  {
    path: "/shop_home",
    name: "shop_home",
    component: shop_home,
    meta: {
      footShow: false // true显示，false隐藏
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
