/*
 * 1.JS由哪几部分组成（对于浏览器说）？
    -- BOM
    -- DOM
    -- EMCSCRIPT
 *
 * 2.NodeJs由哪几部分组成？
 * 
 *  -- EMCSCRIPT
 *  -- global
 * 
 *
 * 3.global上有什么东西？
 *
 * */

//  alert(111)
// console.log(global)
// 注意: 在node中,global身上的属性和方法也可以直接使用

setTimeout(function() {
  console.log('settimeout-----')
})
// 表示立即执行函数
setImmediate(function() {
  console.log('setImmediate-----')
})

console.log('主线程')
