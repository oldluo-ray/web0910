import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    msg: 'msg',
    info: '文本域',
    eat: '1',
    ischeck: false
  }

  // onchange的事件处理函数,只要在文本框中输入内容,就可以触发
  handle = e => {
    // 在这个事件处理函数中,应该获取用户输入的内容,然后设置给state
    // console.log(e.target.value)
    this.setState({
      msg: e.target.value
    })
  }

  // 文本域的事件处理函数
  textHandle = e => {
    this.setState({
      info: e.target.value
    })
  }

  // 下拉框的事件处理函数
  sHandle = e => {
    this.setState({
      eat: e.target.value
    })
  }

  // 复选框的事件处理函数
  chandle = e => {
    this.setState({
      ischeck: e.target.checked
    })
  }

  // 将上面的函数,封装成一个
  // 高阶函数--> 函数柯里化
  allHandle = name => e => {
    let value = name === 'ischeck' ? e.target.checked : e.target.value
    this.setState({
      //1. 在这个函数体中,获取到要动态修改的属性是谁
      //2. 判断要使用value还是checked
      [name]: value
    })
  }

  render() {
    return (
      <div>
        文本框:
        <input
          type='text'
          value={this.state.msg}
          onChange={this.allHandle('msg')}
        />
        文本域:
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          value={this.state.info}
          onChange={this.allHandle('info')}
        ></textarea>
        下拉框:
        <select
          name=''
          id=''
          value={this.state.eat}
          onChange={this.allHandle('eat')}
        >
          <option value='1'>泡面</option>
          <option value='2'>猪脚饭</option>
          <option value='3'>辣条</option>
        </select>
        多选框:
        <input
          type='checkbox'
          checked={this.state.ischeck}
          onChange={this.allHandle('ischeck')}
        />
      </div>
    )
  }
}
