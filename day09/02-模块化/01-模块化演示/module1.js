// 老王的代码

// let data = 'lwdata'
// function foo() {
//   console.log('foo--')
// }
// function bar() {
//   console.log('bar--')
// }

// 基本解决了命名冲突的问题,但是无法解析数据私有化的问题
// let module1 = {
//   data: 'lwdata',
//   foo: () => {
//     console.log('foo--')
//   },
//   bar: () => {
//     console.log('bar--')
//   },
//   getData() {
//     return this.data
//   }
// }

// 这种形式(iife) 可以解决变量名冲突,以及可以实现数据私有化. 并且把使用的window对象和第三方的对象,都显式的写在了iife的形参的位置上.其他开发者可以一目了然的知道当前你的js中使用了哪些库

// 但是这种写法.还是没有解决js文件互相依赖的问题

;(function(w, $) {
  let data = 'lwdata'

  let getData = () => {
    return data
  }

  let foo = () => {
    console.log('foo---')
  }

  w.module1 = {
    getData,
    foo
  }
})(window, $)
