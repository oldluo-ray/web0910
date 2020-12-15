import React, { Component } from 'react'

export default class Test extends Component {
  // 创建阶段
  constructor() {
    super()
    console.log('创建阶段===', 'constructor')
    this.state = {
      test: ''
    }
  }
  render() {
    console.log('创建阶段/更新阶段', 'render')
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              test: 1
            })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
  componentDidMount() {
    console.log('创建阶段', '挂载成功')
  }

  componentDidUpdate() {
    console.log('更新阶段', '重新渲染完成')
  }

  componentWillUnmount() {
    console.log('卸载阶段', '组件即将卸载')
  }
}
