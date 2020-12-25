//定义一个数组,数组里面存储了要写多少个Route组件,以及对应的每一个Route组件的path和component. 最后根据这个数组动态的渲染Route
import { lazy } from 'react'

// 引入Route组件要渲染的视图组件
// 只要routers.js文件执行,所有导入的组件,都会加载到内存中

// import Home from '../pages/Home/Home'
// import Login from '../pages/Login/Login'

// // 所以,需要懒加载组件
// 懒加载的方式导入组件
// 注意: 要配合suspense组件使用.否则会报错
const Home = lazy(() => import('../pages/Home/Home'))
const Login = lazy(() => import('../pages/Login/Login'))
const RegisterPhone = lazy(() =>
  import('../pages/Register/RegisterPhone/RegisterPhone')
)
const RegisterCode = lazy(() => import('../pages/Register/RegisterCode'))

// 路由表
const routeArr = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register/phone',
    component: RegisterPhone
  },
  {
    path: '/register/code',
    component: RegisterCode
  }
]

export { routeArr }
