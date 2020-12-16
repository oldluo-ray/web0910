import React, { Component } from 'react'

export default class Test1 extends Component {
  shouldComponentUpdate(nextProps) {
    // 判断最新一次传过来的props数据,和上一次传过来的props数据是否相同,如果相同就不重新渲染,如果不同才重新渲染
    // console.log(nextProps) //获取到最新的props
    // console.log(this.props) // 获取到原来的props
    if (nextProps.count !== this.props.count) {
      return true
    }
    return false
  }
  render() {
    console.log('test1组件渲染了')
    return <div>test1组件,{this.props.count}</div>
  }
}
