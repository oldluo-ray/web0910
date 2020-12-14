import React from 'react'

// 一般有一个app.js文件,这个文件,定义一个根组件
class App extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props)
  }
  render() {
    // console.log(this.props.list)
    // this.props.msg = 'react'
    // this.props.obj.name = 'ls'
    const Test = this.props.com
    return (
      <div id='app'>
        <div>{this.props.list}</div>
        <Test></Test>
      </div>
    )
  }
}

// function App(props) {
//   console.log(props)
//   return <div>{props.list}</div>
// }

// 总结:
// 1. props可以接收任何数据
// 2. props里面的值是只读的. 但是react检查也只是浅层对比
// 3. 在constructor中,使用props.需要让constructor接收props,然后传递给super(只在构造器中是这样,render中没有这个问题)
export default App
