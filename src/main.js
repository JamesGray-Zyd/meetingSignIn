// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/**
 * 引入elementUI组件并注册
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/**
 * 引入VUEX并注册
 */
import Vuex from 'vuex'

/**
 * 引入公共方法
 */
import '@/assets/js/common.js'

// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

import store from '@/store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
