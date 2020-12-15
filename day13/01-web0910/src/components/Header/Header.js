import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todo: ''
  }

  // 文本框输入的事件处理函数
  handle = e => {
    this.setState({
      todo: e.target.value.trim()
    })
  }
  // 键盘的事件处理函数
  keyUpHandle = e => {
    //判断按下的是否是回车键
    if (e.keyCode === 13) {
      // 判断todo是否为空,如果为空就什么都不做
      if (!this.state.todo) return

      // 将用户输入的内容,添加到todos里面
      this.props.getTodoName(this.state.todo)
      // 清空文本框
      this.setState({
        todo: ''
      })
    }
  }
  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
          value={this.state.todo}
          onChange={this.handle}
          onKeyUp={this.keyUpHandle}
        />
      </div>
    )
  }
}
