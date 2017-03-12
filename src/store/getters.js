/*
  mapGetters获取数据状态state之后，将数据提交到getters,
  获取数据新状态之后，返回更新视图
 */

export default{
  nowNum(state){
    return state.count;
  },
  getOdd(state){
    return state.count%2==0 ? '偶数':'奇数';
  }
}
