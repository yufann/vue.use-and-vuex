// vuex的使用，这里放的都是页面里的核心的数据
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
  count:10
};
const mutations={ //主要用来处理状态(数据)的变化
  increment(state){
    state.count++;
  },
  decrement(state){
    state.count--;
  }
}

const actions={
  increment:({commit})=>{   //处理你要做什么，比如异步请求，判断，流程控制等
    commit('increment');    //commit将请求提交到mutations里面
  },
  decrement:({commit})=>{
    commit('decrement');
  },
  increDouble:({commit,state})=>{
    if (state.count%2==0) {
      commit('increment');
    }
  },
  decreOnly:({commit,state})=>{
    if (state.count%2!=0) {
      commit('decrement');
    }
  },
  clickAnsy:({commit})=>{ //可以用Promise处理异步获取的数据
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        commit('increment');
        resolve();
      },1000);
    });
  }
}


//将变化的数据反映在视图上
const getters={
  nowNum(state){
    return state.count;
  },
  getOdd(state){
    return state.count%2==0 ? '偶数' : '奇数';
  }
}

//导出Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
