import React, { Component } from 'react'
import Count from './components/count'

// react中函数组件默认不可以直接写ref属性.如果要写,可以用forwardRef
// react中类组件可以写ref.但是如果在类组件上写了ref.通过ref对象,拿到的其实是类组件的实例对象
export default class App extends Component {
  // 把ref对象,加到了当前组件实例身上
  xxxRef = React.createRef()
  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log(this.xxxRef.current)
          }}
        >
          按钮
        </button>
        <Count aaa={this.xxxRef}></Count>
      </div>
    )
  }
}
