import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/axios",
      name: "axios",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AxiosView.vue"),
    },
    {
      path: "/counter",
      name: "counter",
      component: () => import("../views/CounterView.vue"),
    },
    {
      path: "/pinia",
      name: "pinia",
      component: () => import("../views/PiniaView.vue"),
    },
    {
      path: "/ciclos",
      name: "ciclos",
      component: () => import("../views/CiclosView.vue"),
    },
  ],
});

export default router;
