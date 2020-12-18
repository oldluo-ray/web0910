import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Test extends Component {
  constructor() {
    super()
    this.container = document.createElement('div')
  }
  componentDidMount() {
    document.body.appendChild(this.container)
  }
  render() {
    let node = <div>这是test组件</div>
    return ReactDOM.createPortal(node, this.container)
  }
}
