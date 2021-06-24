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
    // 라우터 레벨에서 코드를 스플리팅하고, 방문시 라우팅된다(lazyloading), 프리패치(app.js, about.js 별도 파일) 캐시에 미리 존재하다가 사용자(클라이언트)가 사용하게되면 메모리에 위치 <=> 프리패치x 방문하는 순간 캐시에 올리고 메모리 사요
    // ★★★ 프리패치를 할지, 기능을 끌지 적절하게 선택해야한다
    // 사용자가 바로 접근할 가능성이 높은건 프리패치를 사용, 처음에 굳이 할필요없이 무겁다? 그럼 분리
    // lazyloading 을 사용하게되면 통신이 여러번가기때문에 선택이 필요하다.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // 1. 코드스플리팅 (chunk about.js)
    // 2. laztloading 캐시에 담둬놨다가 요청하면 메모리에 보내줌 (프리패치 활성화)
    // 3. 너무 분리하면 통신을 여러번하기 떄문에 오히려 느려질 수도... 
    // 4. prefetch를 꺼두면... 클릭하는 순간 about.js 를 받아서 캐시에 올린다.
    },
  {
    path: '/Contact',
    name: 'Contact',
    // component: Contact
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch: true */ '../views/About.vue')
  },
  {
    path: '/Basic',
    name: 'Basic',
    component: Basic
  },
  {
    path: '/DataBinding',
    name: 'DataBinding',
    // component: Contact
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch: true */ '../views/DataBinding.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
