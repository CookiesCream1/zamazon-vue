import AppVue from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"
import HelloWorldVue from "./components/HelloWorld.vue";

const routes = [
    { path: "", component: AppVue },
    { path: "/testing page", component: HelloWorldVue }
]

export const vrouter = createRouter({
    history: createWebHistory(),
    routes
})