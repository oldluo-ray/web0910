import React from 'react'
import Count from './components/count'

// 一般有一个app.js文件,这个文件,定义一个根组件
class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Count></Count>
      </div>
    )
  }
}

export default App
