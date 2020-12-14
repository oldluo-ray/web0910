import React from 'react'

// 一般有一个app.js文件,这个文件,定义一个根组件
class App extends React.Component {
  render() {
    return <div id='app'>{this.props.test}</div>
  }
}

App.defaultProps = {
  test: 'hello'
}

export default App
