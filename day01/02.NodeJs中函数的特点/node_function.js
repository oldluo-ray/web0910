//#region
//  * 1.在NodeJS中，所有的模块（js文件），都被自动包裹了一个外层函数
//  * 2. 外层函数：function (exports, require, module, __filename, __dirname) {...}
//  *       -- exports : 用于暴露模块
//  *       -- require ：用于引入模块
//  *       -- module ： 用于暴露了模块
//  *       -- __filename ：当前文件的路径（绝对路径）
//  *       --__dirname ：当前文件所在文件夹的路径（绝对路径）
//  *
//  * 3.这个外层函数有什么用？
//  *     1.让我们可以直接使用CommonJs语法。
//  *     2.隐藏内部实现（作用域）
//  *     3.处于安全性考虑
//  *
//  * arguments.callee.toString 在函数内部执行,用于查看当前函数
//  *
//  * */
//#endregion

// 如果一个js文件是在node环境执行, 那么这个文件,在执行的时候,里面代码,会自动被一个函数包裹起来

// let demo = '哈哈'
// 在node中执行,会被一个函数包裹
// function (){
//     let demo = '哈哈'
// }

// function fn() {
//   console.log('fn---')
//   //想要在当前函数体中,查看我是被哪个函数包裹的
//   // arguments.callee这个属性可以返回当前函数
//   console.log(arguments.callee.toString())
// }
// fn()

let demo = 'haha'
console.log(arguments.callee.toString())
console.log(__filename) // 返回当前js文件的绝对路径
console.log(__dirname) // 返回当前js文件所处的目录的绝对路径
