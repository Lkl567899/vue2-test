import axios from "axios";
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
import router from "@/router";
const map = new Map()
const del = (config) => {
    const { router, signal } = config
    if (!router || !map.has(router)) return
    const controllers = map.get(router)
    for (const item of controllers) {
        if (item.signal === signal) {
            controllers.delete(item)
            break
        }
    }
    if (controllers.size === 0) {
        map.delete(router)
    }
}
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    const controller = new AbortController()
    const Router = router.currentRoute.path
    config.signal = controller.signal
    config.router = Router

    if (!map.has(Router)) {
        map.set(Router, new Set())
    }
    map.get(Router).add(controller)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    del(response.config)
    return response;
}, function (error) {
    if (error.config) del(error.config)
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
    const routerPath = from.path
    if (routerPath !== '/login') {
        if (map.has(routerPath)) {
            map.get(routerPath).forEach(item => item.abort())
            map.delete(routerPath)
        }
    }
    next()
})
export default instance
// 