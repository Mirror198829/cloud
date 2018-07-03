// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import NProgress from 'nprogress'
import i18n from './i18n/i18n.js'
import $ from 'jquery'

import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

axios.interceptors.request.use(
	config => {
	    NProgress.start()
	    return config
	},
	err => {
	    return Promise.reject(err)
})
axios.interceptors.response.use(
  response => {
  	  NProgress.done()
      return response
  },
  error => {
      return Promise.reject(error.response.data)   // 返回接口返回的错误信息
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = '阿里云 - '+to.meta.title
    }
    next()
})

Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

