/*
  根级别的 action
  是我们有动作触发之后，dispatch提交的地方
 */

//一般来说将一个文件全部导出，这个文件被看作是一个模块/大对象
//这里将types.js里的所有内容导出来
import * as types from './types'
export default{
  increment:({commit})=>{
    commit(types.INCREMENT);
  },
  decrement:({commit})=>{
    commit(types.DECREMENT);
  },
  increDouble:({commit,state})=>{
    console.log(state);
    console.log(state.mutations.count);
    if (state.mutations.count%2==0) {
      commit(types.INCREMENT);
    }
  },
  decreOnly:({commit,state})=>{
    if (state.mutations.count%2!=0) {
      commit(types.DECREMENT);
    }
  },
  clickAnsy:({commit})=>{
    new Promise((resolve,reject)=>{
      setTimeout(function(){
        commit(types.INCREMENT);
        resolve();
      },1000);
    });
  }
}
