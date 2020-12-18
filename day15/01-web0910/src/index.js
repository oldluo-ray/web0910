import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// 演示redux的使用
// 3. 创建reducer
// 注意: 定义reducer的时候,给state设置默认值就是给仓库设置初始数据
const fn = (state = { count: 0, msg: '123' }, action) => {
  switch (action.type) {
    default:
      return state
  }
}
// 1. 引入createStore函数 import {createStore} from 'redux'
// 2. 创建store对象
const store = createStore(fn)

console.log(store)
console.log(store.getState())
