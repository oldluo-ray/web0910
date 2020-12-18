import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    msg: 'abc'
  }
  render() {
    return (
      <div>
        <div id="count">{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              msg: '123'
            })
            this.setState({
              count: this.state.count + 2
            })
            this.setState({
              count: this.state.count + 3
            })

            // 最终的结果:
            this.setState({
              count: this.state.count + 3,
              msg: '123'
            })
          }}
        >
          按钮1
        </button>
        <button
          onClick={() => {
            // 如果第一个参数,传入的是一个回调函数,那么这个回调函数,是在上一次state修改完毕之后才触发
            this.setState((state, props) => {
              return {
                count: state.count + 1
              }
            })
            this.setState((state, props) => {
              return {
                count: state.count + 2
              }
            })
            this.setState((state, props) => {
              return {
                count: state.count + 3
              }
            })
          }}
        >
          按钮2
        </button>
        <button
          onClick={() => {
            this.setState(
              (state, props) => {
                return {
                  count: state.count + 3
                }
              },
              () => {
                // 这个回调函数,是在数据更新完毕,并且视图更新完毕之后触发
                console.log(this.state)

                console.log(document.getElementById('count'))
              }
            )
          }}
        >
          按钮3
        </button>
      </div>
    )
  }
}
