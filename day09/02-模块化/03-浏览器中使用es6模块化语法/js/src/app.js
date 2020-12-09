// 导入
// 如果是分别导出,导入的时候必须写一个{}
import { foo, bar, DATA_ARR } from './module1'

// 如果是统一导出,导入的时候也必须写一个{}
import { fun1, fun2, data } from './module2'

// 如果是默认导出,就不需要写{}
// 注意: 如果使用的是默认导出,名字可以重新定义. 如果使用其他的两种方式导出,那么名字要跟木块中导出的名字一致
import module3, { msg, fn } from './module3'

// 注意: 在es6中,所有导入的代码,必须写在最上面. 不能再逻辑业务代码的后面,写导入的代码

foo()
fun1()
module3()
console.log(data)
console.log(msg)
fn()
