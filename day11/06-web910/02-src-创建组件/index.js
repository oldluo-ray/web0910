import React from 'react'
import ReactDOM from 'react-dom'

// 定义了一个react元素
// let div = <div>hello react</div>

// 定义组件
// 函数组件
// react中react底层就是利用首字母是否大写,来判断当前这个对象, 是组件还是普通的react元素
// 小结:
// 1. 组件名首字母必须大小
// 2. 必须写return, return 后面返回值就是组件要渲染的结构
// 3. 组件中所有结构都必须包裹在一个根标签中
// 4. 使用组件, 当做标签使用  <组件名 />(单标签和双标签都可以)

// function Header() {
//   // 组件中返回的结构,必须有一个根标签
//   return (
//     <div>
//       <h1>header组件</h1>
//       <div>你好</div>
//     </div>
//   )
// }
// 类组件
// 类组件可以定义当前组件里面的私有的数据....
// 小结:
// 1. 组件名首字母必须大小
// 2. 类组件必须继承React.Component
// 3. 必须写render函数,函数体中必须写return, return 后面返回值就是组件要渲染的结构
// 4. 组件中所有结构都必须包裹在一个根标签中
// 4. 使用组件, 当做标签使用  <组件名 />(单标签和双标签都可以)
class Header extends React.Component {
  render() {
    return (
      <div>
        <h3>类组件</h3>
        <p>ceshi/........</p>
      </div>
    )
  }
}

ReactDOM.render(<Header></Header>, document.getElementById('root'))
