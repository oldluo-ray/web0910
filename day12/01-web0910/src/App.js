import React from 'react'
// 引入组件
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

import './App.css'

// 一般有一个app.js文件,这个文件,定义一个根组件
class App extends React.Component {
  // 1. 其他子组件,都需要使用这个数据,所以数据存储在父组件中
  // 2. 这个数据,跟视图渲染有关,所以应该用state存储起来
  state = {
    todos: [
      {
        id: 1,
        name: '吃饭',
        isDone: true
      },
      {
        id: 2,
        name: '睡觉',
        isDone: true
      },
      {
        id: 3,
        name: '找富婆',
        isDone: false
      }
    ]
  }
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header></Header>
          <List list={this.state.todos}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App
