import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// 使用:
// 1. 下载包: npm i redux
// 2. 引入 createStore函数, 这个函数用来创建store对象
// 3. 创建store
// 4. 注意: 在创建store的时候,需要将reducer函数,传入到函数中,所以先定义reducer函数
// reducer函数必须是一个纯函数(输入相同的值,一定会得到相同的结果)(肯定不能写异步操作)
// 注意: state的默认值就是给store对象初始化数据
function fn(state = 0, action) {
  console.log(action, state)
  // state就是redux中存储的源数据
  // action就是需求
  switch (action.type) {
    case 'INCREMENT':
      // 在reducer函数中,将计算后的结构return出去,就相当于把结果返回给store对象
      return state + 1
    // 按照reducer函数要求: 必须要写default: 必须返回state
    default:
      return state
  }
}
// 注意: reducer函数执行,有两种情况: 1. 调用了dispatch  2. createStore的时候也会调用一次
const store = createStore(fn)

// 获取store对象中的数据
// store.subscribe() 可以监听state的变化
store.subscribe(() => {
  console.log(store.getState())
})
// store对象的dispatch方法
// dispatch函数执行,reducer函数就会被调用
// 需要传入需求对象
// store.dispatch({ type: 'INCREMENT' })

// store.dispatch({ type: 'INCREMENT' })
