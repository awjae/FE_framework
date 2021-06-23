import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 라우터 레벨에서 코드를 스플리팅하고, 방문시 라우팅된다(lazyloading), 프리패치(app.js, about.js 별도 파일) 캐시에만 존재하다가 사용자(클라이언트)가 사용하게되면 메모리에 위치
    // ★★★ 프리패치를 할지, 그능을 끌지 적절하게 선택해야한다
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    // component: Contact
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch: true */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
