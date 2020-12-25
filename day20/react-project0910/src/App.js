import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { routeArr } from './config/routers'

import './app.css'

export default class App extends Component {
  render() {
    return (
      // 懒加载的时候,加载过程中,展示的信息
      <Suspense fallback={<div>正在加载....</div>}>
        <Router>
          {/* 根据routers.js文件中的数据,动态渲染Route组件 */}
          {routeArr.map(item => {
            return (
              <Route
                key={item.path}
                path={item.path}
                component={item.component}
                exact={item.exact}
              ></Route>
            )
          })}
        </Router>
      </Suspense>
    )
  }
}
