import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ChatPage from "../pages/ChatPage.vue";
import LoginPage from "../pages/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: LoginPage,
  },
  {
    path: "/chat",
    name: "Chat",
    component: ChatPage,
    beforeEnter: (to, from, next) => {
      if (to.query.username) next();
      else next({ name: "Home" });
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
