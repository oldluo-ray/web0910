import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'

import Test from './components/Test'
import Test1 from './components/Test1'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          app根组件
        </div>
        <Test></Test>
        <Test1></Test1>
      </Provider>
      
    )
  }
}
