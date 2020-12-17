import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

// withForm 是一个函数,传入需要数据的组件,返回一个新的包含了数据的组件
import withForm from './withform'

const WithLogin = withForm(Login)
const WithRegister = withForm(Register)

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin msg={'测试'} data={123} test={'test'}></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
