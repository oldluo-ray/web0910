import React, { Component } from 'react'

//控制表单: 1. 受控组件  2. 非受控组件
// 受控组件: 表单项的值,被组件的state控制,最终想要获取表单项的值,就直接从state中获取
// 非受控组件: 在react中,直接操作dom
export default class Form extends Component {
  // 创建一个ref对象,添加到当前组件实例身上
  inputRef = React.createRef()
  textRef = React.createRef()
  render() {
    return (
      <div>
        文本框:
        <input type='text' ref={this.inputRef} />
        文本域: 
        <textarea name="" id="" cols="30" rows="10" ref={this.textRef}></textarea>
        <button
          onClick={() => {
            // 点击按钮,获取input的值
            console.log(this.inputRef.current.value)
            console.log(this.textRef.current.value)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
