import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import login from "../components/login/login.vue";
const routes: Array<RouteRecordRaw> = [
  {
    //登录
    path: "/",
    name: "login",
    component: login
    },
  {
    //主页
    path: '/',
    name: 'Home',
    component: Home,
    //登录拦截
    meta: {
      requireAuth: true
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
// routes.beforeEach((to, from, next) => {
//   if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
//     if (localStorage.getItem('token')) {// 判断是否登录
//       next()
//     } else {// 没登录则跳转到登录界面
//       next({
//         path: '/Login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next()
//   }
// })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
