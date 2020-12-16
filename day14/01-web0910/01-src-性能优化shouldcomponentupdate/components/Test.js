import React, { Component } from 'react'

export default class Test extends Component {
  // 因为当前组件只有静态结构(写死的),没有数据,所以后期都不需要动态的去更新
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('test组件渲染了')
    return <div>test组件</div>
  }
}
