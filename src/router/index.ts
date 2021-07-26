import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details",
    name: "Details",
    component: Details
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
