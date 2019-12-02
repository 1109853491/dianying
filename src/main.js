import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios

import Scroll from '@/components/Scrolld'
Vue.component('Scroller',Scroll)
//创建全局组件：第一个参数是组件名字     第二个参数是组件
// 方法写到methods下面
import Loading from '@/components/Loading'
Vue.component('Loading',Loading)




//vue过滤器 
Vue.filter('setWH',(url,arg)=>{
	return url.replace(/w\.h/,arg);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
