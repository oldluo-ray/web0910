import React, { Component, PureComponent } from 'react'

export default class Test2 extends PureComponent {
  state = {
    msg: 'hello',
    obj: {
      name: 'zs'
    }
  }
  render() {
    console.log('test2组件渲染了')
    return (
      <>
        <div>test2组件,{this.props.count}</div>
        <div>test2组件,{this.state.obj.name}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            // let { obj } = this.state
            // obj.name = 'ls'

            let obj = { ...this.state.obj }
            obj.name = 'ls'
            this.setState({
              obj
            })
          }}
        >
          test2的按钮
        </button>
      </>
    )
  }
}
