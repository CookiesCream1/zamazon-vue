import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import HelloWorldVue from "./components/HelloWorld.vue";
import MainVue from "./routes/Main.vue";
import TestVue from "./routes/Test.vue";
import NotFoundVue from "./routes/NotFound.vue";

const routes: RouteRecordRaw[] = [
    { path: "", component: MainVue },
    { path: "/test", 
        component: TestVue,
        children: [
            { path: "hworld", component: HelloWorldVue }
        ] 
    },
    { path: "/:path+", component: NotFoundVue }
]

export const vrouter = createRouter({
    history: createWebHistory(),
    routes
})