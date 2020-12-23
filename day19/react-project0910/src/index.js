import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// 引入fixed.js, 让rem适配的代码执行
// 这样导入,表示只是把这个文件中的代码,执行一次.不导入任何内容
import './utils/fiexed'

ReactDOM.render(<App />, document.getElementById('root'))
