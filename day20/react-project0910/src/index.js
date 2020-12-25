import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// 引入fixed.js, 让rem适配的代码执行
// 这样导入,表示只是把这个文件中的代码,执行一次.不导入任何内容
import './utils/fiexed'

//导入antd-mobile的样式问题件
// 按需加载antd之后,css不需要自己引入了
// import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(<App />, document.getElementById('root'))
