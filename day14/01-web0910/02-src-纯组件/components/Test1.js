import React, { Component } from 'react'

export default class Test1 extends Component {
 
  render() {
    console.log('test1组件渲染了')
    return <div>test1组件,{this.props.count}</div>
  }
}
