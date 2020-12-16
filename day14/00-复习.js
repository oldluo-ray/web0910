/**
 *
 * 1. 组件的生命周期钩子函数
 *
 *  创建阶段
 *      constructor   1. 定义状态  2. 绑定函数中this的指向
 *      render   开始渲染页面 不要执行setState
 *      componentDidMount 1. 操作dom 2. 发送请求 ...
 *  更新阶段
 *      render  1. 传入了新的props 2. setState 3. 强制更新(forceUpdate) 会让组件重新更新
 *      componentDidUpdate  更新成功 可以执行setState,但是要有出口(if)
 *  卸载阶段
 *      componentWillUnmount 清除动作
 *
 * 2. 组件之间传递数据
 *
 *  props(react) 1. 嵌套 2. 直接传递不能跨级 3. 从上往下
 *
 *  context(react) 1. 嵌套  2. 可以跨级  3. 从上往下
 *      1. 创建context对象  const xxxContext = React.createContext('默认值')
 *      2. 从context对象上,结构两个组件 一个是Provider,另一个Consumer
 *      3. 在需要传递数据的组件中,使用Provider包裹结构,Provider上写一个value属性值就是要传递的数据
 *      4. Consumer在需要接收数据的组件中使用 <Consumer>{(接收的数据)=>{return 组件的结构}}</Consumer>
 *      5. 其他接收数据的写法: 给组件添加静态属性 组件名.contextType = context对象 . 然后通过this.context获取值
 *
 *  pubsub(第三方js库) 1. 没有限制要嵌套  2. 没有限制传递
 *  发布订阅机制
 *
 *   1. 下包 : npm i pubsub-js
 *   2. 在需要的地方引包: import pubSub from 'pubsub-js'
 *   3. pubsub.publish('话题', 数据)
 *   4. const token = pubsub.subscribe('话题', (话题, 数据)=>{})
 *   5. 取消订阅
 *      pubsub.unsubscribe(token) 取消指定订阅
 *      pubsub.unsubscribe('话题') 取消当前话题的所有订阅
 *      pubsub.clearAllSubscriptions() 取消所有订阅
 *
 * 3.fragment
 *
 *      作用: 包裹jsx结构,但是不渲染到页面上  <></>
 *
 *
 *
 *
 *
 */

import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.token = pubsub.subscribe()
  }
  render() {
    return <div></div>
  }
}
