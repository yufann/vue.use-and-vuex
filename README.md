# custom

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
------------------------------------------------------------------------------------

vue.use()示例介绍：
自定义vue全局组件use使用(解释vue.use()的原理)
我们在前面学习到是用别人的组件：Vue.use(VueRouter)、Vue.use(Mint)等等。
其实使用的这些都是全剧组件，这里我们就来讲解一下怎么样定义一个全局组件,并解释vue.use()的原理
而我们再用Axios做交互，则不能使用Vue.use(Axios)，因为Axios没有install


自定义一个全局Loading组件，并使用：
总结目录：
	|-components
		|-loading
			|-index.js		导出组件，并且install
			|-loading.vue		定义Loading组件，这里面基本的style ,script中之前讲的methods,data方法都可以使用

	index.js中的代码：
		import LoadingComponent from './loading.vue'
		const Loading={
			install:function(Vue){  //核心部分，在我们使用Vue.use()时，自动调用的是install，而install导出的必须是的组件
				Vue.component('loading',LoadingComponent);
			}
		};
		export default Loading;

	main.js中要使用：
		import loading from './components/loading'
		Vue.use(loading);   //调用的是install里面的组件

------------------------------------------------------------------------------------------------

vuex示例介绍：
项目中有一个src1,是我们在使用vuex的时候，并没有拆分的写法，将actions.js/mutations.js/getters.js
合并写到一个文件store.js里面
1)启动一个项目
2)安装vuex：cnpm install vuex -D

3）vuex提供了两个非常好的方法：
  mapActions():可以将所有methods里面的方法，进行打包。即对所有的事件(或我们的行为)进行管理
  mapGetters：获取所有的数据，对所有的数据进行管理

4）vuex的工作过程：
  1.当用户点击时，会调用increment函数(即用户有一个动作dispatch)
    mapActions将函数(动作dispatch)提交到actions里面，并且传了commit这个参数(也是一个函数)
  2.commit主要处理你要做什么，比如异步请求，判断，流程控制等，commit会将这些请求、状态提交到mutations里面
  3.mutations主要用来处理状态(数据)的变化
  4.mapGetters获取目前数据，将状态(数据)提交到getters上面，给mutations使用，让数据发生变化，
    并返回(render)，从而更新视图


5）actions里面除了含有commit这的对象参数以外，还有另一个参数state(Vue组件中展示的数据源)
    在这个过程中可以对数据进行判断，并作出相应的操作


官方的文档中指出，vuex工作的各个过程是拆分开来实现的，下面我们就来进行一些分文件实现
  项目的目录：
      |--src文件夹
          |--App.vue
          |--main.js
          |--store文件夹
              |--index.js			//必须有index.js，它是我们组装模块并导出 store 的地方
              |--actions.js		//是我们有动作触发之后，dispatch提交的地方
              |--mutations.js	//commit提交的地方
              |--types.js			//存放的是控制数据状态的地方，即控制数据如何变化
              |--getters.js		//获取数据的目前状态，给mutations使用
