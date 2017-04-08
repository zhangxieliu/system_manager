// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'normalize.css';

import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 初始化Bmob数据服务
Bmob.initialize("53cd5abd1c22bcf54c7f7042ecd26731", "ca71b913159d8c0c8a1ca1387739a771");

// 全局导航钩子
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Bmob.User.current() != null) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
});


/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
