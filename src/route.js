import MainItemList from "@/components/MainItemList";
import VueRouter from "vue-router";
import ArticleDetail from "@/components/ArticleDetail";
import ArticleArchive from "@/components/ArticleArchive";
import AboutMe from "@/components/AboutMe";

const routes = [
    {
        path: '/article/latest/',
        name: 'latest',
        component: MainItemList,
        children:[
            {
                path: ':tag/:pageName',
                name: 'latest-tag',
            }
        ]
    },
    {
        path: '/',
        name: 'home',
        component: MainItemList,
    },
    {
        path: '/article/archive/',
        name: 'archive',
        component: ArticleArchive,
    },
    {
        path: '/about/',
        name: 'aboutme',
        component: AboutMe,
    },
    {
        path: '/article/detail/:id',
        name: 'article-detail',
        component: ArticleDetail,
    }
]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;