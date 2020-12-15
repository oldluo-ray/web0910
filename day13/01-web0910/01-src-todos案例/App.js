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
      }
    ]
  }

  // 在app组件中定义一个函数,用来接收header里面传过来的任务名称
  getTodoName = todo => {
    // console.log(todo)
    // 根据任务名,创建一个任务对象
    let { todos } = this.state
    // 动态的计算id: 永远找到todos最后一个元素,通过最后一个元素的id,加一,得到新的数据的id. 如果todos是空的,第一个数据的id指定为1
    let id = todos.length ? todos[todos.length - 1].id + 1 : 1
    let todoObj = {
      id,
      name: todo,
      isDone: false
    }

    // 因为react中不建议直接修改state.所以根据原来state的值,创建一个新的值
    const newTodos = [...todos]
    // 修改新的值
    newTodos.push(todoObj)

    // 调用setState
    this.setState({
      todos: newTodos
    })
  }

  // 定义一个函数,用来接收item中删除逻辑传递过来的id
  getIdDel = id => {
    // 根据id删除指定数据
    let { todos } = this.state
    // forEach, map, filter
    // 返回一个新的数组,新数组存储着过滤之后剩余的数据
    const arr = todos.filter((item, index) => {
      // 这个回调函数,对应数组中每一条数据,第一次调用对应第一个数组, 第二次调用,对应第二条数据, 以此类推. 如果当前调用返回true,表示保留当前数据,如果返回false,表示删除当前数据
      return item.id !== id
    })

    this.setState({
      todos: arr
    })
  }

  // 定义一个函数,用来接收item中切换任务是否完成传递过来的id
  getIdUpdate = id => {
    // console.log(id)
    // 直接从todos中根据id,找到要修改的那条数据,然后修改isDone的值就可以了
    let { todos } = this.state

    let newTodos = [...todos]

    newTodos.forEach(item => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })

    this.setState({
      todos: newTodos
    })
  }
  //定义一个函数
  updateAllTodos = () => {
    //修改todos里面数据的代码
    // 咋修改数据

    let { todos } = this.state
    // 如果数组中都符合要求,返回true,有一个不符合要求返回false
    const flag = todos.every(item => {
      return item.isDone
    })

    // 如果todos中所有数据都选中了,那么表示,全选按钮肯定也是选中的.然后需要将所有的todos中的isDone改成false
    // 如果todos中有一条不选中,那么表示,全选按钮也不选中的.然后需要将所有的todos中的isDone改成true
    let newTodos = [...todos]
    newTodos.forEach(item => {
      item.isDone = !flag
    })

    this.setState({
      todos: newTodos
    })
  }

  // 调用了这个函数,就需要将todos中所有的完成项删除掉
  delAllDones = () => {
    let { todos } = this.state
    let newTodos = todos.filter(item => {
      return !item.isDone
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    let { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header getTodoName={this.getTodoName}></Header>
          {todos.length ? (
            <div>
              <List
                list={this.state.todos}
                getIdDel={this.getIdDel}
                getIdUpdate={this.getIdUpdate}
              ></List>
              <Footer
                todos={todos}
                updateAllTodos={this.updateAllTodos}
                delAllDones={this.delAllDones}
              ></Footer>
            </div>
          ) : (
            <h3>暂无任务</h3>
          )}
        </div>
      </div>
    )
  }
}

export default App
