import { arr, fn } from './module1'
import { username, bar } from './module2'
import obj from './module3'

import jsonobj from '../json/data.json'

// 引入babelpolyfill
import '@babel/polyfill'

//导入less
import '../less/index.less'
import '../less/iconfont.less'

console.log(arr)
fn()
console.log(username)
bar()
console.log(obj)
console.log(jsonobj)
console.log(1 === 2)
// alert(1)

const fn1 = () => {
  console.log('箭头函数--fn1----')
}
fn1()

console.log(a)

new Promise(resolve => {
  setTimeout(() => {
    resolve('promise执行成功了')
  }, 1000)
}).then(res => {
  console.log(res)
})


