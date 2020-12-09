(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// foo()

// 如果是统一导出,导入的时候也必须写一个{}
(0, _module2.fun1)();

// 如果是默认导出,就不需要写{}
// 注意: 如果使用的是默认导出,名字可以重新定义. 如果使用其他的两种方式导出,那么名字要跟木块中导出的名字一致
// 导入
// 如果是分别导出,导入的时候必须写一个{}

(0, _module4.default)();
console.log(_module2.data);
console.log(_module3.msg);
(0, _module3.fn)();
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
exports.bar = bar;
// 分别导出
function foo() {
  console.log('module1 foo()');
}
function bar() {
  console.log('module1 bar()');
}
var DATA_ARR = exports.DATA_ARR = [1, 3, 5, 1];
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xxx;
function xxx() {
  console.log('module3----');
}

// export default function() {
//   console.log('module3----123')
// }

var fn = function fn() {
  console.log('fn----');
};

var msg = exports.msg = '呵呵';
exports.fn = fn;
},{}]},{},[1]);
