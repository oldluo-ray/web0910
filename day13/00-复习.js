/**
 * 1. this指向
 *  问题原因: react组件中,事件处理函数,本身应该指向window,但是babel编译,执行严格模式,所以指向了undefined
 *
 *  解决问题:希望事件处理函数中this指向当前组件实例
 *  1. bind  在构造函数中 this.handle = this.handle.bind(this)
 *  2. 类的实例方法  handle = () => {}  直接给实例添加方法
 *  3. 箭头函数    ()=>{this.handle()}
 *
 
 * 2. props : 接收组件外部的数据  (父组件的数据,传递给子组件)

     接收数据: 1. 函数组件  形参接收   3. 类组件中  this.props 
     传递数据: <组件名 属性={值}/>

     props的特点: 1.可以接收任何数据 2. props数据是只读的  3. 不能直接在构造器中使用this.props

     props校验: 使用组件时,如果没有给组件传递应该传递的props数据,就可以报出更加清晰的错误
     使用: 1. 导入  import PropTypes from 'prop-types'
*          2. 给组件添加静态属性  组件名.propTypes = {

                                        属性名: PropTypes.数据类型.isRequired


                                 }
 *
    props默认值: 没有传递对应的props,就使用默认值
            组件名.defaultProps = {属性: 值}
 *
 * 3. 表单处理
 * 
 *    受控组件: 表单项的值,被组件的状态控制.
 *          表单项的值被状态控制, 然后配合onchange事件,在事件处理函数中,获取用户输入,修改状态
 * 
 *    非受控组件: 直接操作dom   利用ref对象,直接获取dom,操作dom
 *
 *
 *
 *
 *
 *
 *
 */
