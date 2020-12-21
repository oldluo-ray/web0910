import React, { Component } from 'react'

class Test extends Component {
  render() {
    return (
      <div>
        <h3>test组件</h3>
        <div>{this.props.msg}</div>
      </div>
    )
  }
}

export default Test
