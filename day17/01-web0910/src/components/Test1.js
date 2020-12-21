import React, { Component } from 'react'

class Test1 extends Component {
  render() {
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
        <button
          onClick={() => {
            
            this.props.asyncincre(6)
          }}
        >
          按钮2
        </button>
      </div>
    )
  }
}

export default Test1
