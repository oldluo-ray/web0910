import React from 'react'
import Form from './components/Form'

// 一般有一个app.js文件,这个文件,定义一个根组件
class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Form></Form>
      </div>
    )
  }
}

export default App
