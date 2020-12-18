/**
 *
 *
 * 1. 性能优化
 * 1.1 减轻state. 跟视图渲染无关的数据,不要存储在state中. 可以直接存储到组件实例上面
 * 1.2 shouldComponentUpdate(nextProps, nextState) 更新阶段执行. 返回值决定render函数是否执行. 返回true,就渲染,否则就不渲染
 * 1.3 纯组件 PureComponent 重写了shouldComponentUpdate, 里面帮我们比较的所有的state和props. 但是,是浅层比较
 *
 * 2. 高阶组件
 *  作用: 复用状态和逻辑
 *  function withxxx(需要使用状态和逻辑的组件){
 *
 *      return class extends React.Component{
 *
 *              定义公用的状态和逻辑
 *
 *
 *              render(){
 *
 *                  return 需要使用状态和逻辑的组件
 *
 *              }
 *
 *      }
 *
 *  }
 *
 *
 *
 * 3. renderprops
 *
 *    作用: 复用状态和逻辑
 *
 *
 *    class XXX extends React.Component {
 *
 *          定义状态和逻辑
 *
 *          render(){
 *              return this.props.render(数据)/ this.props.children(数据)
 *          }
 *
 *     }
 *
 *     <XXX render={(数据)=>{return 需要使用状态的组件}}></XXX>
 *     <XXX >{(数据)=>{return 需要使用状态的组件}}</XXX>
 *
 *
 *
 *
 * 4.  hooks
 * 
 *     hooks是react中提供的可以在函数组件中使用类组件功能的一堆钩子函数
 * 
 *      useState(函数组件中使用状态), useEffect(函数组件中使用生命周期钩子函数)
 * 
        const [xxx, setXX] = useState(默认值)


        外层函数,表示挂载和更新完毕
        useEffect(()=>{

            // 内层函数表示即将卸载
            return ()=>{

            }
        },[监听的数据])

        默认情况: 外层函数在挂载和更新的时候,都会触发 
        如果在useEffect的第二个参数的位置上,传一个空的数组,就表示外层只模拟挂载
        如果在useEffect的第二个参数的位置上,传了一个监听了数据的数组,只有监听的数据发生变化的时候,才会模拟更新的生命周期钩子函数
 *
 *      
 *      hooks是有是有使用规则: 
 *      1. 只能在函数组件和自定义hooks中使用 
 *      2. 必须在最外层作用域,不能嵌套在 if/for/while/普通函数
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
 *
 *
 *
 */
