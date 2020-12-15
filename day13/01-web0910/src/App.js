import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      // fragment完整写法
      // <React.Fragment>
      //   <h3>haha</h3>
      //   <p>app组件的代码</p>
      // </React.Fragment>

      // 简写
      <>
        <h3>haha</h3>
        <p>app组件的代码</p>
      </>
    )
  }
}
