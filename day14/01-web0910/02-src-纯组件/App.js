import React, { Component, PureComponent } from 'react'
import Test from './components/Test'
import Test1 from './components/Test1'
import Test2 from './components/Test2'

export default class App extends PureComponent {
  state = {
    count: 0
  }
  render() {
    console.log('app渲染了')
    return (
      <>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: 1
            })
          }}
        >
          按钮
        </button>
        <p>app组件的代码</p>
        {/* <Test></Test> */}
        {/* <Test1 count={this.state.count}></Test1> */}
        <Test2 count={this.state.count}></Test2>
      </>
    )
  }
}
