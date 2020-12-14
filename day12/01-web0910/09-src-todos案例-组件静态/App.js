import React from 'react'
// 引入组件
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

import './App.css'

// 一般有一个app.js文件,这个文件,定义一个根组件
class App extends React.Component {
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header></Header>
          <List></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App
