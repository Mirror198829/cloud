import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/page/home/home')
const Login = () => import('@/page/login/login')
const HomePage = () => import('@/page/home/homePage')
const ConsoleHome = () => import('@/page/console/consoleHome')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'Login'
    },
    {
      path: '/login',
      name: 'Logine',
      component: Login,
      meta: { title: '登陆页'}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'/homePage',
          name:'HomePage',
          component:HomePage,
          meta: { title: '首页'},
        }
      ]
    },
    {
      path: '/consoleHome',
      name: 'ConsoleHome',
      component: ConsoleHome
    }
  ]
})
