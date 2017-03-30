// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// import AMap from 'vue-amap';

import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
// Vue.use(AMap)
// AMap.initAMapApiLoader({
//   key: 'af033935ad3dbc20bc7e4e7a296d8421',
//   plugin: ['ToolBar']
// });

Vue.config.productionTip = false

// 初始化Bmob数据服务
Bmob.initialize("53cd5abd1c22bcf54c7f7042ecd26731", "ca71b913159d8c0c8a1ca1387739a771");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
