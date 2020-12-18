import React, { Component } from 'react'
import Home from './components/Home'
import Detail from './components/Detail'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

import './css/index.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div></div>
        {/* NavLink作用和Link一样,但是可以自动添加类名. activeClassName 可以自定义类名 */}
        <NavLink to='/index' activeClassName='abc'>
          首页
        </NavLink>
        <NavLink to='/detail' activeClassName='abc'>
          详情页
        </NavLink>
        <NavLink to='/test' activeClassName='abc'>
          测试
        </NavLink>

        {/* 默认路径发上变化,所有的Route排队和pathname进行比较,就算前面比较成功,后面的也还会进行比较 */}
        {/* Switch 组件,用于包裹Route组件,前面的匹配成功了,后面的就不进行匹配 */}
        {/* <Switch>
          <Route path='/index' component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
          <Route path='/' component={Home}></Route>
        </Switch> */}
        {/* pathname以path开头. 所以pathname至少和path的长度是一样的 */}
        {/* pathname: / */}

        {/* Redirect 重定向组件, 默认直接重定向. 配合Switch使用,可以写from属性,写from属性,就根据当前地址栏路径,去进行重定向 */}
        <Switch>
          <Redirect from='/test' to='/index'></Redirect>
          <Route path='/index' component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
        </Switch>
      </Router>
    )
  }
}
