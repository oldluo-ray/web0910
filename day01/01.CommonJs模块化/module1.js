// 注意: 如果这个js文件是在node中运行,那么这个文件就默认遵循commonjs规范
// 这个js文件中,就会多了一个行代码,这行代码就是module.exports = {}
// module.exports = {} 表示module1.js这个文件,导出什么数据

const module2 = require('./module2')

// const module2 = require('./module2')
// 老王写的js文件
var demo = '测试'

// module.exports = {
//     xxx: demo
// }
// module.exports = demo
// module.exports = function() {
//   console.log('呵呵')
// }

// 注意: commonjs中提供了一个exports关键字,也可以用来导出数据,但是不可以直接赋值
// exports = {
//   xxx: demo
// }
// exports.xxx = demo

// exports = module.exports = {}
// module.exports = {}  可以
// exports = {} 不可以
// exports.xxx = 值  可以
// module.exports.xxx = 值

// module.exports.xxx = demo

// 直接给module.exports赋值,只写一次就可以了
// module.exports = demo
// module.exports = '额外的数据'

module.exports.demo = demo
module.exports.xxx = '呵呵'
