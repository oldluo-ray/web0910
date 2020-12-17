import React from 'react'
export default function withForm(WrappedComponent) {
  return class extends React.Component {
    // react调试工具,优先展示组件的静态属性displayName属性的值,如果没有展示静态属性name的值. 通过给高阶组件添加静态属性的方法,来控制调试工具中高阶组件展示的名字

    // 组件.name 返回组件的名称
    static displayName = 'with' + WrappedComponent.name
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
          {...this.props}
          handleChange={this.handleChange}
        ></WrappedComponent>
      )
    }
  }
}
