import React from 'react'
// 这是一个计数器组件
class Count extends React.Component {
  // 组件内部的数据,叫做状态
  constructor() {
    super()
    // 给类组件,添加状态.其实就是给当前组件的实例添加一个叫state的属性,值一般为一个对象
    this.state = {
      count: 10
    }
  }
  render() {
    // 在render函数中,可以直接通过this,访问到当前组件的实例

    return (
      <div>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            // 修改state里面的值
            // 注意: 在react中,不建议直接修改数据,因为这样直接修改数据,数据会发生变化,但是视图不会跟着发生变化
            // this.state.count = this.state.count + 1
            // console.log(this.state.count)
            // 应该使用react中提供的setState方法,去修改数据,并且重新渲染视图
            // setState两个作用: 1. 修改数据 2. 重新渲染视图
            this.setState({
              // 修改哪个属性,就写哪个属性
              // count: 最新的值
              count: this.state.count + 1
            })
          }}
        >
          +
        </button>
      </div>
    )
  }
}

export default Count
