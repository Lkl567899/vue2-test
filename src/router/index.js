import Vue from 'vue'
import VueRouter from 'vue-router'
import Public from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    name: 'Public',
    redirect: '/200',
    component: Public,
    children: [{
      path: '/home',
      component: () => import('@/views/layout/home/index')
    }, {
      path: '/xxx',
      component: () => import('@/views/layout/xxx/index')
    }]
  },
  {
    path: '/200',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/layout/200/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
