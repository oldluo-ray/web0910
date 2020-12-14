import React from 'react'

// 这是一个计数器组件
class Count extends React.Component {
  // 组件内部的数据,叫做状态
  constructor() {
    super()
    // 给类组件,添加状态.其实就是给当前组件的实例添加一个叫state的属性,值一般为一个对象
    this.state = {
      count: 0
    }
  }

  // 按钮点击的事件处理函数
  // 通过下面这种方式,定义的函数,实际上是添加到了类对应的原型对象上的
  fn() {
    //这里this指向undefined
    // 函数中this的指向,取决于函数是如何调用:
    // 函数调用的模式:
    // 1. 普通函数调用 函数名()  this ==> window ==babel编译(严格模式)===> undefined
    // 2. 对象方法调用 对象.函数名()  ==> 对象
    // 3. call,bind,apply 上下文调用 this ==> 指定的对象
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    // 在render函数中,可以直接通过this,访问到当前组件的实例
    return (
      <div>
        <div>{this.state.count}</div>
        {/* 下面这种形式,react底层通过组件实例,最终找到了原型,找到原型,然后找到了原型上的方法,直接普通调用 */}
        <button
          onClick={() => {
            // 由于事件处理函数是一个箭头函数,所以this是当前render函数的this,一定指向当前组件实例. 当前组件实例.fn() ==> 这时就是对象方法调用
            this.fn()
          }}
        >
          +
        </button>
      </div>
    )
  }
}

export default Count
