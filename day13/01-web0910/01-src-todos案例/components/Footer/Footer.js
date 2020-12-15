import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    const { todos } = this.props
    // 总共多少个
    let allTotal = todos.length
    // 完成多少个
    let doneTotal = 0
    todos.forEach(item => {
      if (item.isDone) {
        doneTotal++
      }
    })

    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            checked={allTotal === doneTotal}
            onChange={this.props.updateAllTodos}
          />
        </label>
        <span>
          <span>已完成{doneTotal}</span> / 全部{allTotal}
        </span>
        <button className='btn btn-danger' onClick={this.props.delAllDones}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
