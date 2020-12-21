import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// 在redux中使用中间件:
// 了解: redux中中间件: 是在dispatch之前执行的. redux中间件是洋葱模型的
// const store = createStore(reducer, applyMiddleware(thunk,log,中间件))
const store = createStore(reducer, applyMiddleware(thunk))
export default store
