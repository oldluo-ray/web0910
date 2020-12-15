import React, { Component } from 'react'
import pubSub from 'pubsub-js'
export default class Son extends Component {
  state = {
    msg: '给我五毛钱'
  }

  handle = () => {
    // 发布数据的方法
    // pubSub.publish('话题', 要传递的数据)
    pubSub.publish('money', this.state.msg)
  }

  componentDidMount() {
    pubSub.subscribe('car', (msg, data) => {
      console.log(data)
    })
  }
  render() {
    return (
      <div>
        son组件
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
