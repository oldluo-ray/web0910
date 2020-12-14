import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    let { todo } = this.props
    return (
      <li>
        <label>
          <input type='checkbox' checked={todo.isDone} />
          <span className={todo.isDone ? 'done' : ''}>{todo.name}</span>
        </label>
        <button className='btn btn-danger'>删除</button>
      </li>
    )
  }
}
