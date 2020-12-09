'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一导出
var data = 'module2 data';

function fun1() {
  console.log('module2 fun1() ' + data);
}

function fun2() {
  console.log('module2 fun2() ' + data);
}

exports.fun1 = fun1;
exports.fun2 = fun2;
exports.data = data;