/**
 * 按照commonjs模块化的方式:
 * 1. 在一个js文件中,引入另一个js文件
 * require('js文件的路径') 返回对应js文件中导出的结果
 * 2. 在具体的js文件中,一定要通过module.exports将需要暴露的数据,导出来.这样其他js中才可以导入,并且使用
 *
 * 注意点:
 * 1. commonjs底层实现: exports = module.exports = {}
 * 合法的书写方式
 * module.exports = {xxx: 值}
 * moudle.exports = 值
 * exports.xxx = 值
 *
 * 2.如果直接个module.exports赋值,只需要写一次,如果写多次,后面的会覆盖前面的
 *
 */
// const module1 = require('./module1')
// const module2 = require('./module2')
// // module1()
// console.log(module1)
// console.log(module2)

// 测试
// 使用uniq
const uniq = require('uniq')
console.log(uniq)
