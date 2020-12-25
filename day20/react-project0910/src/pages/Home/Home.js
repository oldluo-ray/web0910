import React, { Component } from 'react'
console.log('Home的代码执行了')
export default class Home extends Component {
  render() {
    return (
      <div>
        首页
        <button
          onClick={() => {
            this.props.history.replace('/register/phone', { from: '/home' })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
