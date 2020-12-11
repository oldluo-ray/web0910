/**
 * 1. axios
 *      axios({
 *          method: 'get',
 *          url: '地址'
 *          params: {}  get请求上传参数的方式
 *          data: {}    post请求上传参数的方式
 *      })  返回一个promise
 *
 * 2. 模块化
 *
 *      commonjs    node默认支持
 *      AMD  require.js
 *      CMD  sea.js
 *      es6模块化   浏览器默认不支持,所以需要使用babel先编译成commonjs语法,然后再使用browserify编译 成浏览器认识的代码
 *
 *      导出:
 *          分别  export let a = 1
 *          统一  export {值,值}
 *          默认  export default 值
 *
 *      导入
 *          分别/统一:   import {} from '路径/包名'
 *          默认   import 重新起的名字 from '路径/包名'
 *
 *
 *      注意: 导入的代码一定要写在模块中的最上面. 导入的代码中不能混入业务逻辑代码
 *
 *
 * 3. gulp  前端的一个构建工具  基于nodejs中的流 主要靠插件实现 压缩,处理兼容问题,自动化等功能
 *
 *
 *
 *
 *
 */
