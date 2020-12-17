import React, { Component } from 'react'

export default class Position extends Component {
  state = {
    x: 0,
    y: 0
  }

  handleMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
    // window.onmousemove = this.handleMove
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
    // window.onmousemove = null
  }

  render() {
    // this.porps.children可以获取到当前组件子节点位置的值
    return this.props.children(this.state)
  }
}
