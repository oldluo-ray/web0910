import React, { Component } from 'react'
import Count from './components/count'

export default class App extends Component {
  state = {
    count: 1
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: 0
            })
          }}
        >
          app按钮,点击卸载count
        </button>
        {this.state.count && <Count></Count>}
      </div>
    )
  }
}
