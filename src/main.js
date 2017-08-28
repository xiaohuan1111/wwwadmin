// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'
import App from './App'
import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false

/*router.beforeEach((to, from, next) => {
  console.log(to)
  // NProgress.start();
  if (to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});