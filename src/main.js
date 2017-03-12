import Vue from 'vue'
import App from './App.vue'
import loading from './components/loading'
Vue.use(loading);   //调用的是install里面的组件

import store from './store/index'

new Vue({
  store,  //将Store里面的数据，最终放入到App.vue 里面
  el: '#app',
  render: h => h(App)
})
