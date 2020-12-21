import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'

import WithTest from './container/TestContainer'
import WithTest1 from './container/Test1Container'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          app根组件
        </div>
        <WithTest></WithTest>
        <WithTest1></WithTest1>
      </Provider>
      
    )
  }
}
