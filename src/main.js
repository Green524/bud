import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import router from "@/route";
import VueResourceEsm from "vue-resource";

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResourceEsm);

Vue.http.interceptors.push(function(request, next) {
    console.log(request.headers)
    request.headers["Content-type"] = "application/json;charset=UTF-8";
    next(function(response) {
        // ...
        // 请求发送后的处理逻辑
        // ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        return response
    })
})
// Vue.interceptors.request.use(
//     config => {
//         if (config.method === "get") {
//             config.data = { unused: 0 }; // 这个是关键点，加入这行就可以了,解决get,请求添加不上Content-Type
//         }
//         config.headers["Content-type"] = "application/json;charset=UTF-8";
//         return config;
//     },
//     error => {
//         Promise.reject(error);
//     }
// )
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

