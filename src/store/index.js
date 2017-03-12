/* 必须有index.js，它是我们组装模块并导出 store 的地方 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations.js'
import actions from './actions.js'

export default new Vuex.Store({
  modules:{ //将引入的模块再次导出
    mutations
  },
  actions
});
