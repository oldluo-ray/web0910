import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './Position'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        <Position
          render={data => {
            return <Mouse data={data}></Mouse>
          }}
        ></Position>
        <Position render={data => <Cat data={data}></Cat>}></Position>
      </div>
    )
  }
}
