import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import ElementUI from "element-ui";

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css';
import router from "@/route";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
