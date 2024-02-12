import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import MainVue from "./routes/Main.vue";
import NotFoundVue from "./routes/NotFound.vue";
import LoginVue from "./routes/Login.vue";

const routes: RouteRecordRaw[] = [
  { path: "", component: MainVue },
  { path: "/login", component: LoginVue },
  { path: "/:path+", component: NotFoundVue },
];

export const vrouter = createRouter({
  history: createWebHistory(),
  routes,
});
