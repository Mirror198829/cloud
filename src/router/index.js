import Vue from 'vue'
import Router from 'vue-router'
import consoleRouter from './console.js'
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  //mode: 'history',
  routes: [
    {
      path: '',
      redirect: 'Login'
    },
    {
      path: '/login',
      name: 'Logine',
      component: () => import('@/page/login/login'),
      meta: { title: '登陆页'}
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/page/home/home'),
      children:[
        {
          path:'/homePage',
          name:'HomePage',
          component:() => import('@/page/home/homePage'),
          meta: { title: '首页'},
        }
      ]
    },
    ...consoleRouter
  ]
})
