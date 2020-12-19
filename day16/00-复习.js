/**
 *  1.react-router-dom
 *
 *  前端路由原理:监听浏览器地址栏路径的变化(history第三方包负责监听), 浏览器并没有给服务器发送请求. 利用监听,通过判断路径,来找到对应的视图,进行渲染
 *
 *  前端路由的作用: 实现spa(单页面应用)
 *
 *  在react中实现前端路由使用的包: react-router-dom
 *
 *  BrowserRouter: 使用: 包裹整个应用, 只使用一次 作用: 监听浏览器地址栏路径变化,让Route组件去匹配
 *  Link: 最终渲染到页面上是一个a标签, 可以修改地址栏的路径,并且阻止默认行为
 *  Route: 指定了路径和对应视图的映射规则  <Route path="" component={}></Route>
 *
 *  匹配规则:
 *  1. 模糊匹配:只要pathname以path开头  默认
 *  2. 精确匹配: pathname和path完全一致  在Route组件上加exact属性 (注意: 谁加了exact,谁才是精确匹配,没有写的,就还是模糊匹配)
 *
 *  其他组件:
 *  Switch : 包裹Route, 前面的Route匹配成功,后面就不匹配了
 *  Redirect: 重定向
 *  NavLink: 跟Link组件的作用一致. 就可以默认实现高亮
 *
 *
 *  编程式导航: 通过js实现页面切换,数据传递等工作.
 *  history: push/replace('路径',{要传递的数据})  改变路径(push往历史记录加一条,replace是替换一条)
 *  location:  pathname(路径)   search(查询字符串)   state(push/replace传递过来的 数据)
 *  match: params(获取路由参数)
 *  定义路由参数: <Route path="/路径/:参数名?" component={}></Route>
 *  如何传递路由参数: /路径/
 *
 *  只有被Route组件渲染的组件,才可以通过props对象,获取到上面的三个对象
 *
 *  在非Route组件渲染的组件中,想要通过props获取这三个对象如何实现:
 *  withRouter
 *
 *  嵌套路由: 在路由组件中,又定义了路由组件,就是嵌套路由
 *  注意: 如果想要让二级路由展示,要保证一级路由展示出来. 在写二级路由的路径的时候,要把一级路由的路径拼接上去
 *
 *
 *
 *  2.redux
 *
 *  一个状态管理工具(集中管理数据的工具)
 *  独立于任何的第三方流行框架/库. 只不过目前,一般都是在react中匹配使用
 *  三个重要的概念:
 *  action 需求   {type: '需求描述'}
 *  reducer 具体需求的执行者   函数 
 *  store  管理者  存储了数据, 然后将需要分配给reducer,让reducer执行
 *
 *
 *
 *
 *
 */
