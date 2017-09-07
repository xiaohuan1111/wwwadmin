// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'
import App from './App'
import routes from './router/index'
import Mock from './mock/mock'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

Mock.bootstrap()
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    sessionStorage.removeItem('user');
  }
  let loginUser = sessionStorage.getItem('user');
  if (!loginUser && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

