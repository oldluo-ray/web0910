import React, { Component } from 'react'
import Far from './components/Far'

// 1. 导入context对象
import context from './context'
// context对象身上有一个组件叫做Provider
let { Provider } = context
export default class App extends Component {
  state = {
    money: '5毛钱'
  }
  render() {
    return (
      // <Provider>
      <div>
        <Far></Far>
      </div>
      // </Provider>
    )
  }
}
