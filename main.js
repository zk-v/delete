import "../style/tailwind.scss";

import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Home from "./pages/Home";
import About from "./pages/About";

import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  components: {
    Home,
    About
  },
  router,
  render: h => h(App)
}).$mount("#app");
