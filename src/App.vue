<template>
  <div id="app">
    <h2>vue全局组件use使用</h2>
    <loading></loading>
    <!-- <loading></loading> -->
    <h2>vuex的使用</h2>
    <input type="button" value="增加" @click="increment"/>
    <input type="button" value="减少" @click="decrement"/>
    <input type="button" value="偶数时可点击+" @click="increDouble"/>
    <input type="button" value="奇数时可点击-" @click="decreOnly"/>
    <input type="button" value="异步处理" @click="clickAnsy"/>
    <div>现在的数字为：{{nowNum}}  它现在是{{getOdd}}</div>

  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  /*
  vuex的工作过程：
  1.当用户点击时，会调用increment函数(即用户有一个动作dispatch)
    mapActions将函数(动作dispatch)提交到actions里面，并且传了commit这个参数(也是一个函数)
  2.commit主要处理你要做什么，比如异步请求，判断，流程控制等，commit会将这些请求、状态提交到mutations里面
  3.mutations主要用来处理状态(数据)的变化
  4.mapGetters获取目前状态(数据)，将状态(数据)提交到getters上面，最后在getters里面处理Status的变化，并返回(render)
   */
  computed:mapGetters([
    'nowNum',
    'getOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'increDouble',
    'decreOnly',
    'clickAnsy'
  ])
}
</script>

<style>

</style>
