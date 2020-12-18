import React, { Component } from 'react'
import Test from './components/Test'

export default class App extends Component {
  render() {
    return (
      <div>
        <p>123</p>
        {/* react中组件写在什么位置,组件的结构就渲染到什么位置 */}
        <Test></Test>
        <h2>456</h2>
      </div>
    )
  }
}
