import LoadingComponent from './loading.vue'

const Loading={
  install:function(Vue){  //核心部分，在我们使用Vue.use()时，自动调用的是install，而install导出的必须是的组件
    Vue.component('loading',LoadingComponent);
  }
};

export default Loading;
