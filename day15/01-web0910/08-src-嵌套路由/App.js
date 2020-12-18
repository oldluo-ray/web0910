import React, { Component } from 'react'
import Home from './components/Home'
import Detail from './components/Detail'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  NavLink,
  withRouter
} from 'react-router-dom'

import './css/index.css'

class App extends Component {
  render() {
    return (
      <>
        <NavLink to='/index' activeClassName='abc'>
          首页
        </NavLink>
        <NavLink to='/detail' activeClassName='abc'>
          详情页
        </NavLink>

        <Route path='/' component={Home} exact></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/detail/:page?/:pageSize?' component={Detail}></Route>
      </>
    )
  }
}

// 通过withRouter,得到一个高阶组件,返回这个高阶组件. 高阶组件中会将history,location,match传给app组举荐
// 注意: 对使用withRouter的组件有一个要求,就是被Router组件包裹
const WithApp = withRouter(App)
export default WithApp
