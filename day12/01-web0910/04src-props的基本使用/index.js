import React from 'react'
import ReactDOM from 'react-dom'
//导入根组件
import App from './App'
import Test from './components/Test'

let arr = [1, 2, 3]
let msg = 'hello'

ReactDOM.render(
  <App list={arr} com={Test} msg={msg} obj={{ name: 'zs' }}></App>,
  document.getElementById('root')
)
