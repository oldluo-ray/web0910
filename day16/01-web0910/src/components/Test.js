import React, { Component } from 'react'
import { connect } from 'react-redux'

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
function fn(state) {
  return {
    msg: state.msg
  }
}
export default connect(fn)(Test)
