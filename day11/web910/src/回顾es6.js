//#region
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// // 一般方法加到原型上
// Person.prototype.say = function() {
//   console.log('你好,我是' + this.name)
// }

// function Student(name, age, score) {
//   //1.call方法第一个参数是谁,前面函数中this就指向谁
//   //2.调用person函数
//   // 借用构造函数继承属性
//   Person.call(this, name, age)
//   this.scroe = score
// }
// // 原型继承-->继承方法
// Student.prototype = new Person()

// const p1 = new Person('zs', 19)
// const p2 = new Person('ls', 19)
// console.log(p1)
// p1.say()
// p2.say()

// const stu1 = new Student('wb', 20, 100)
// console.log(stu1)
// stu1.say()

//#endregion

// es6中的类其实一个js语法糖. 写的时候可以使用class去写,但是实际上执行的时候,还是转成了上面的原始写法去执行的
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 定义方法(加到原型上去了)
  say() {
    console.log('你好,我是' + this.name)
  }
}

class Student extends Person {
  constructor(name, age, score) {
    super(name, age)
    this.score = score
  }
}

const p1 = new Person('zs', 18)
console.log(p1)
p1.say()

const stu1 = new Student('哈哈', 8, 100)
console.log(stu1)
stu1.say()
