import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import router from "@/route";
import VueResourceEsm from "vue-resource";
import { DropdownMenu, DropdownItem } from 'vant';

import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/index.css';
import './assets/css/global.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResourceEsm);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

const vm = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

export default vm;

