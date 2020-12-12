import React from 'react'

// 引入其他组件
import Header from './components/Header'

// 一般有一个app.js文件,这个文件,定义一个根组件
class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Header></Header>
      </div>
    )
  }
}

export default App
