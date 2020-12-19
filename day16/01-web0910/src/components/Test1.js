import React, { Component } from 'react'

class Test1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        test1组件
        <div>{this.props.num}</div>
        <button
          onClick={() => {
            this.props.incre(6)
          }}
        >
          按钮
        </button>
        <button
          onClick={() => {
            this.props.incre(8)
          }}
        >
          按钮1
        </button>
      </div>
    )
  }
}

export default Test1
