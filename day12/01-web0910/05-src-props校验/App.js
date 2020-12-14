import React from 'react'

// 使用propsTypes校验:
// 1. 引入propTypes
// 2. 配置校验规则
import PropTypes from 'prop-types'

// 一般有一个app.js文件,这个文件,定义一个根组件
class App extends React.Component {
  static demo = 123 //静态属性
  state = {} // 实例属性
  render() {
    return (
      <div id='app'>
        <ul>
          {this.props.list.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

// 配置校验规则是给当前组件直接添加静态属性
// 直接添加到类的身上的属性,叫做静态属性
// 直接添加到构造函数身上的属性,叫做静态属性
// 添加到类的实例/构造函数的实例属性,叫做实例属性
App.propTypes = {
  // 表示这个list是必须要写的, 然后list属性的值是数组
  list: PropTypes.array.isRequired
}

console.log(App.demo)

export default App
