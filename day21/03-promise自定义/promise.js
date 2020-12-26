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

    //当resolve函数被调用的时候,要做的 事情就是改变状态以及修改结果
    const resolve = value => {
      // 如果当前状态不等于pending,直接return(因为promise状态只能改一次)
      if (this.state !== PENDING) return
      this.state = RESOLVED
      this.result = value
    }

    // reject中将状态改成失败
    const reject = error => {
      if (this.state !== PENDING) return
      this.state = REJECTED
      this.result = error
    }

    // executor是promise的执行器,在new promise的时候,立即调用(同步回调)
    executor(resolve, reject)
  }
})()
