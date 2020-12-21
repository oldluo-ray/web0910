import { INCREMENT, ASYNCINCREMENT } from './constants'
// action对象  {type: ....}

// actionCreator
function incre(data) {
  return { type: INCREMENT, data }
}

// // 异步增加的actionCreator
// function asyncincre(data) {
//   return { type: ASYNCINCREMENT, data }
// }

// 如果使用了redux-thunk这个中间件,那么我们就可以在redux中实现异步操作了,但是redux-thunk按照要求,异步的操作要写在actions.js文件中.要定义一个异步action的函数
function asyncincre() {
  return dispatch => {
    // 异步操作,异步操作成功之后,盗用dispatch
    setTimeout(() => {
      dispatch(incre(7))
    }, 1000)
  }
}

export { incre, asyncincre }

//review
