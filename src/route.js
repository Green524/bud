import MainItemList from "@/components/MainItemList";
import VueRouter from "vue-router";

const routes = [
    {
        path: '/article/latest/',
        name: 'latest',
        component: MainItemList,
    },
    {
        path: '/article/archive/',
        name: 'archive',
        component: MainItemList,
    },
    {
        path: '/about',
        name: 'aboutme',
        component: MainItemList,
    },
    {
        path: '/article/detail',
        name: 'articledetail',
        component: MainItemList,
    }
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;