import React, { Component, PureComponent } from 'react'

export default class Test2 extends Component {
  state = {
    msg: 'hello'
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 判断最新一次传过来的props数据,和上一次传过来的props数据是否相同,如果相同就不重新渲染,如果不同才重新渲染
    // console.log(nextProps) //获取到最新的props
    // console.log(this.props) // 获取到原来的props
    // props和state有一个数据发生变化了,就应该重新渲染
    if (
      nextProps.count !== this.props.count ||
      nextState.msg !== this.state.msg
    ) {
      return true
    }
    return false
  }
  render() {
    console.log('test2组件渲染了')
    return (
      <>
        <div>test2组件,{this.props.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            this.setState({
              msg: '你好'
            })
          }}
        >
          test2的按钮
        </button>
      </>
    )
  }
}
