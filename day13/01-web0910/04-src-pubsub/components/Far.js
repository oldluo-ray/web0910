import React, { Component } from 'react'
import Son from './Son'
import pubSub from 'pubsub-js'
export default class Far extends Component {
  handle = () => {
    pubSub.publish('car', ['奥迪', '奥拓'])
  }

  componentDidMount() {
    pubSub.subscribe('money', (msg, data) => {
      console.log('far组件接收到的', data)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handle}>far的按钮</button>
        <Son></Son>
      </div>
    )
  }
}
