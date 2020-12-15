import React, { Component } from 'react'
import Test from './components/Test'
export default class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: 1
            })
          }}
        >
          app按钮
        </button>
        {this.state.count === 0 ? <Test></Test> : ''}
      </div>
    )
  }
}
