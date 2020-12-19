import React, { Component } from 'react'
// 在react中哪个组件想还要使用redux中的数据,就在这个组件中引入connect函数
import { connect } from 'react-redux'

// 导入actionCreator
import { incre } from '../redux/actions'

class Test1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        test1组件
        <div>{this.props.num}</div>
        <button
          onClick={() => {
            this.props.incre(6)
          }}
        >
          按钮
        </button>
        <button
          onClick={() => {
            this.props.incre(8)
          }}
        >
          按钮1
        </button>
      </div>
    )
  }
}

//注意: 如果connect函数第一次调用时,什么都没有传,对应的react组件中只能通过props获取到dispatch方法. 无法获取到redux中的数据.如果想要获取数据,应该在第一次调用的时候,传入一个函数

// state 就是redux中的最新的数据
// function fn(state) {
//   // 只要redux中数据发生变化了,这个fn就会被调用
//   console.log('fn-----', state)
//   // return 的结果会加到props身上
//   return {
//     num: state.count
//   }
// }

// 用来封装包含dispatch这个代码的函数
// function fn1(dispatch) {
//   return {
//     increment: function(data) {
//       dispatch(incre(data))
//     }
//   }
// }

// const WithTest1 = connect(
//   fn, // 是为了给组件传递redux中的数据
//   fn1 // 是为了把调用dispatch的代码封装起来
// )(Test1)
const WithTest1 = connect(
  state => ({ num: state.count }), // 是为了给组件传递redux中的数据

  { incre } // 是为了把调用dispatch的代码封装起来
)(Test1)

export default WithTest1
