import React from 'react'

// 这是一个计数器组件
class Count extends React.Component {
  // 组件内部的数据,叫做状态
  // constructor() {
  //   super()
  //   // 给类组件,添加状态.其实就是给当前组件的实例添加一个叫state的属性,值一般为一个对象
  //   this.state = {
  //     count: 0
  //   }
  // }

  state = {
    count: 0
  }

  // 方法加到原型上
  // fn() {
  //   //这里this指向undefined
  //   // 函数中this的指向,取决于函数是如何调用:
  //   // 函数调用的模式:
  //   // 1. 普通函数调用 函数名()  this ==> window ==babel编译(严格模式)===> undefined
  //   // 2. 对象方法调用 对象.函数名()  ==> 对象
  //   // 3. call,bind,apply 上下文调用 this ==> 指定的对象
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // es7中类的实例方法
  // 这个fn函数就直接添加到了实例对象身上
  fn = () => {
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
        {/* 底层在执行这个fn的时候,必须找到当前组件实例,才能调用方法---> 调用模式是对象方法调用 */}
        <button onClick={this.fn}>+</button>
      </div>
    )
  }
}

export default Count
