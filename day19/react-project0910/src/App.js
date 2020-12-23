import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { routeArr } from './config/routers'

import './app.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div></div>
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
    )
  }
}
