import React from 'react'
import ReactDOM from 'react-dom'
//导入根组件
import App from './App'

// 直接引入css 
import './index.css'

ReactDOM.render(<App test='msg'></App>, document.getElementById('root'))
