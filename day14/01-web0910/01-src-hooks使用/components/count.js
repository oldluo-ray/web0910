import React, { useState, useEffect } from 'react'
import Test from './Test'

export default function Count() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('默认值')

  //useEffect //是在函数组件中使用类组件的生命周期钩子函数
  // useEffect只模拟了三个生命周期钩子函数
  // 组件挂载 componentDidMount
  // 组件更新 componentDidUpdate
  // 组件即将卸载 componentWillUnmount

  // useEffect中的这个函数,模拟了两个生命周期钩子函数1. 挂载 2. 更新
  useEffect(() => {
    // return 的这个函数模拟的是卸载
    console.log('外层函数,模拟挂载和更新')
    return () => {
      console.log('内层函数,模拟了组件卸载')
    }
  },[])

  function handle() {
    setCount(count + 1)

    setMsg(msg + count)
  }
  return (
    <div>
      <div>{count}</div>
      <div>{msg}</div>
      <button onClick={handle}>按钮</button>
    </div>
  )
}
