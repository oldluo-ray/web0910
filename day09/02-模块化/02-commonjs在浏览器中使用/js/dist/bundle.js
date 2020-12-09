(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//导入模块的代码
const module1 = require('./module1')
const module2 = require('./module2')

const res = module1.getData()
console.log(res)

},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
let data = 'lwdata'
function getData() {
  return data
}

function foo() {
  console.log('foo----')
}

module.exports = {
  getData,
  foo
}

},{}],3:[function(require,module,exports){
let data = 'lsdata'
function getData() {
  return data
}

function bar() {
  console.log('bar----')
}

exports.getData = getData
exports.bar = bar

},{}]},{},[1]);
