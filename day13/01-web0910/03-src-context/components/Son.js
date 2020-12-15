import React, { Component } from 'react'

// Son组件里面接收数据,需要用到context对象的 一个Consumer组件
// 传递数据的context和接收数据的context必须是同一个context
import context from '../context'
let { Consumer } = context
// export default class Son extends Component {
//   render() {
//     return (
//       <Consumer>
//         {/* data可以接收到app组件传过来的数据 */}
//         {data => {
//           return <div>son组件, {data}</div>
//         }}
//       </Consumer>
//     )
//   }
// }

export default class Son extends Component {
  // 第二种使用方法:
  // 给需要使用数据的组件,添加静态属性contextType,值必须是context对象
  static contextType = context
  render() {
    // 当前组件实例身上,就可以从context属性上,直接获取到数据
    console.log(this)
    return <div>son组件,{this.context}</div>
  }
}
