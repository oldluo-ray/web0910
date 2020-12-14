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

  // 在app组件中定义一个函数,用来接收header里面传过来的任务名称
  getTodoName = todo => {
    // console.log(todo)
    // 根据任务名,创建一个任务对象
    let todoObj = {
      id: Date.now(),
      name: todo,
      isDone: false
    }

    // 因为react中不建议直接修改state.所以根据原来state的值,创建一个新的值
    const newTodos = [...this.state.todos]
    // 修改新的值
    newTodos.push(todoObj)

    // 调用setState
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header getTodoName={this.getTodoName}></Header>
          <List list={this.state.todos}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App
