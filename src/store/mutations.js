/*
  mutations
  是actions里的commit对象(参数)提交的地方,对数据进行处理
 */

//这里只是导出来一个INCREMENT
import {INCREMENT,DECREMENT} from './types.js'

/* getters.js最后是给mutations使用的 */
import getters from './getters.js'
const state={
  count:20
};

const mutations={
  [INCREMENT](state){ //INCREMENT是一个变量，使用时要加[]
    state.count++;
  },
  [DECREMENT](state){
    return state.count--;
  }
}

export default{ //这时mutations导出的是一个模块
  state,
  mutations,
  getters
}
