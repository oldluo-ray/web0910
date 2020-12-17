import React from 'react'
export default function withForm(WrappedComponent) {
  return class extends React.Component {
    // 公共的状态
    state = {
      username: '',
      password: '',
      repassword: ''
    }

    // 公共的逻辑
    handleChange = name => e => {
      this.setState({
        [name]: e.target.value
      })
    }

    render() {
      return (
        //   需要状态和逻辑的组件
        <WrappedComponent
          // {...this.state} 其实就是 username={this.state.username} .....
          {...this.state}
          handleChange={this.handleChange}
        ></WrappedComponent>
      )
    }
  }
}
