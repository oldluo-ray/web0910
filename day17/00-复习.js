/**
 * 1. redux
 *
 * 是一个状态管理工具(集中管理数据)
 *
 * 独立于任何的第三方框架和库
 *
 * store(仓库) 有一个state管理了数据, 并且将action交给reducer执行
 *
 * action(需求) 一个对象,用来描述需求. 至少有一个type属性
 *
 * reducer(执行者) 函数 function fn (state, action) {}
 *
 * 2. react-redux
 *
 *  用于关联react和redux
 *
 *  1. 需要在项目中新建redux文件夹,里面存放更redux相关的代码
 *     actions.js  写一些actionCreator
 *     reducer.js  定义reducer函数
 *     store.js    创建store对象
 *     constants.js 用于定于一些redux中使用的常量
 *
 *  2. react中的组件叫做展示组件
 *  3. 在react中,必须在根组件中/入口文件中使用react-redux包里面的Provider组件,包裹整个应用. Provider组件上要加一个属性store,值为store对象
 *  4. 那个redux组件,需要使用redux数据,就使用connect创建容器组件,容器组件会把数据/操作数据的方法,传递给展示组件
 *
 *      容器组件中:
 *      const 容器组件 = connect(state=>({属性名: state.属性名}), {actionCreator})
 * (展示组件)
 *
 *      注意: connect函数,会将传入的actionCreator进行封装,得到过一个和actionCreator名字一样的函数,将这个函数,传给展示组件.
 *
 *
 *      展示组件: 通过props获取数据和方法
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
