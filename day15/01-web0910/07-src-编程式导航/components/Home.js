import React, { Component } from 'react'

export default class Home extends Component {
  handlePush = () => {
    // console.log(this.props)
    this.props.history.push('/detail/1/10?name=ls')
  }
  handleReplace = () => {
    // console.log(this.props)
    this.props.history.replace('/detail', { name: 'zs', age: 18 })
  }
  render() {
    return (
      <div>
        首页
        <button onClick={this.handlePush}>push</button>
        <button onClick={this.handleReplace}>replace</button>
      </div>
    )
  }
}
