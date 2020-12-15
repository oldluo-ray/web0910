import React, { Component } from 'react'
import Far from './components/Far'
import pubSub from 'pubsub-js'
export default class App extends Component {
  componentDidMount() {
    // 如果当前组件要订阅话题,要写在组件挂载成功的钩子函数中
    // pubSub.subscribe('话题', 回调函数)
    this.token = pubSub.subscribe('money', (msg, data) => {
      // 当money话题发布了之后触发
      // msg 就是话题名称
      // data 才是真正传过来的数据

      console.log(data)
    })

    this.tokenCar = pubSub.subscribe('car', (msg, data) => {
      console.log('app接收到car话题', data)
    })
  }
  componentWillUnmount() {
    //取消订阅
    pubSub.unsubscribe(this.token)
    pubSub.unsubscribe(this.tokenCar)
  }
  handle = () => {
    // 传入token,取消指定的订阅
    // pubSub.unsubscribe(this.token)
    // 取消整个话题
    // pubSub.unsubscribe('money')
    // 取消所有订阅
    // pubSub.clearAllSubscriptions()
  }
  render() {
    return (
      <div>
        <Far></Far>
        <button onClick={this.handle}>app组件按钮</button>
      </div>
    )
  }
}
