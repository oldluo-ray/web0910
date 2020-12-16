import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    username: '',
    password: '',
    repassword: ''
  }

  handleChange = name => {
    return e => {
      this.setState({
        [name]: e.target.value
      })
    }
  }
  render() {
    return (
      <div>
        <h1>注册</h1>
        <form>
          用户名:
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
          <br />
          密码:
          <input
            type='password'
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <br />
          确认密码:
          <input
            type='password'
            value={this.state.repassword}
            onChange={this.handleChange('repassword')}
          />
          <br />
          <input type='button' value='注册' />
        </form>
      </div>
    )
  }
}
