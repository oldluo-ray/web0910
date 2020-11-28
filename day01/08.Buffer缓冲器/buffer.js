/*
 * 1.什么是Buffer？
 *     1.它是一个类数组的对象，用于存储数据（存储的全部是二进制数据）(像一双万能的手,用来接收任何类型的数据)
 *     2.Buffer的效率很高，存储和读取的速度都很快，本质就是对内存的直接操作
 *     3.Buffer的大小一旦确定了，不可修改。
 *     4.每个元素占用内存的空间是1字节。
 *     5.Buffer是Node中非常核心的模块，无需下载，无需引入，直接可以使用
 * */

// console.log(Buffer)
// 弃用了
// const buf = new Buffer(10)
// console.log(buf)

// Buffer.alloc() 性能较高,也比较安全
// const buf = Buffer.alloc(10)
// console.log(buf)
// Buffer.allocUnsafe() 性能最高,但是不安全
// const buf = Buffer.allocUnsafe(10)
// console.log(buf)

// 直接把一个数据转成buffer
const buf = Buffer.from('hello nodexxx')
console.log(buf)
