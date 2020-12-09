// 统一导出
let data = 'module2 data'

function fun1() {
  console.log('module2 fun1() ' + data)
}

function fun2() {
  console.log('module2 fun2() ' + data)
}

export { fun1, fun2 }
export { data }
