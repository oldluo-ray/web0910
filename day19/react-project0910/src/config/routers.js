//定义一个数组,数组里面存储了要写多少个Route组件,以及对应的每一个Route组件的path和component. 最后根据这个数组动态的渲染Route

// 引入Route组件要渲染的视图组件
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

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
  }
]

export { routeArr }
