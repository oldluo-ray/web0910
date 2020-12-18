import React, { Component } from 'react'
import Home from './components/Home'
import Detail from './components/Detail'

// 导入react-router-dom中提供的组件
// BrowserRouter底层帮我们实现了监听路径变化的逻辑
// 注意: 一个react的单页面应用,只需要使用一个Router组件
// Link组件,帮我们修改浏览器地址栏的路径,最终渲染出来的是个a标签
// Route组件是用来配置路径和对应的视图(组件)的关系
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div></div>
        {/* to的值就是修改的路径 相当于a标签的href */}
        <Link to='/index'>首页</Link>
        <Link to='/detail'>详情页</Link>

        {/* Route组件,定义了路径和对应组件(视图)的对应规则 */}
        {/* 一旦路径发生变化,Router组件,就会要求我们定义的所有Route,拿着自己的path属性的值,和浏览器地址栏中url中路径部分的内容进行匹配,匹配成功,就渲染当前路径对应的组件, 然后后面的Route还会继续匹配 */}
        <Route path='/index' component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
      </Router>
    )
  }
}
