// 老宋的代码

// let data = 'lsdata'
// function foo() {
//   console.log('foo--')
// }
// function bar() {
//   console.log('bar--')
// }

let module2 = {
  data: 'lsdata',
  foo: () => {
    console.log('foo--')
  },
  bar: () => {
    console.log('bar--')
  },
  getData() {
    return this.data
  }
}
