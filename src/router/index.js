import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//const Home = () => import("../views/Home.vue");
const Login = () => import("../views/Login/Login");

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
