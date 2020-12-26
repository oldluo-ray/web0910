;(function() {
  // 使用常量定义promise状态
  const PENDING = 'PENDING'
  const RESOLVED = 'RESOLVED'
  const REJECTED = 'REJECTED'
  // promise构造函数
  // executor 执行器函数
  window.Promise = function(executor) {
    // 解决this指向问题
    //   1. 使用变量存储promise实例对象
    // 2. 箭头函数
    // const that = this
    // 定义promise实例的状态和结果
    this.state = PENDING
    this.result = undefined
    this.container = [] //用来存储成功和失败的回调函数

    //当resolve函数被调用的时候,要做的 事情就是改变状态以及修改结果
    const resolve = value => {
      // 如果当前状态不等于pending,直接return(因为promise状态只能改一次)
      if (this.state !== PENDING) return
      this.state = RESOLVED
      this.result = value

      //成功了,在这里调用then函数中的第一个参数(onResolved)
      // 注意: 因为有可能then被调用多次,所以遍历数组,从数组中,拿到所有的成功,然后调用
      this.container.forEach(item => {
        item.onResolved(this.result)
      })
    }

    // reject中将状态改成失败
    const reject = error => {
      if (this.state !== PENDING) return
      this.state = REJECTED
      this.result = error
      // 失败了,在这里调用then函数的第二个参数(onRejected)
      this.container.forEach(item => {
        item.onRejected(this.result)
      })
    }

    // executor是promise的执行器,在new promise的时候,立即调用(同步回调)
    executor(resolve, reject)
  }

  // then函数,添加到原型上
  window.Promise.prototype.then = function(onResolved, onRejected) {
    return new Promise((resolve, reject) => {
      // 如果执行到then函数的时候,状态已经变了,就立刻执行成功或失败的回调
      if (this.state === RESOLVED) {
        const res = onResolved(this.result)
        //如果res是一个具体的值,就直接传递下去,如果res是一个promise对象,就传递promise的结果
        if (res instanceof Promise) {
          //是promise实例
          resolve(res.result)
        } else {
          //不是promise实例
          resolve(res)
        }
      } else if (this.state === REJECTED) {
        const res = onRejected(this.result)
        //如果res是一个具体的值,就直接传递下去,如果res是一个promise对象,就传递promise的结果
        if (res instanceof Promise) {
          //是promise实例
          reject(res.result)
        } else {
          //不是promise实例
          reject(res)
        }
      } else {
        // 如果执行then的时候,promise状态还是pending,就把
        // onResolved, onRejected添加到promise实例身上
        this.container.push({ onResolved, onRejected })
      }
    })
  }
})()
