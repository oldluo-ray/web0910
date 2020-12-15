import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  // item中删除按钮的事件处理函数
  delHandle = () => {
    // 要将id传递给app组件
    let { todo, getIdDel } = this.props
    let id = todo.id

    // 调用app中传过来的函数,将id传给app组件
    getIdDel(id)
  }
  render() {
    let { todo } = this.props
    return (
      <li>
        <label>
          <input type='checkbox' checked={todo.isDone} onChange={() => {}} />
          <span className={todo.isDone ? 'done' : ''}>{todo.name}</span>
        </label>
        <button className='btn btn-danger' onClick={this.delHandle}>
          删除
        </button>
      </li>
    )
  }
}
