import React, { Component } from 'react'
// 在react中哪个组件想还要使用redux中的数据,就在这个组件中引入connect函数
import { connect } from 'react-redux'

class Test1 extends Component {
  render() {
    console.log(this.props)
    return <div>test1组件</div>
  }
}

//注意: 如果connect函数第一次调用时,什么都没有传,对应的react组件中只能通过props获取到dispatch方法. 无法获取到redux中的数据.如果想要获取数据,应该在第一次调用的时候,传入一个函数

// state 就是redux中的最新的数据
function fn(state) {
  // return 的结果会加到props身上
  return {
    num: state
  }
}

const WithTest1 = connect(fn)(Test1)

export default WithTest1
