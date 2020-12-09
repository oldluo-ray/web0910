'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo)();

// 如果是统一导出,导入的时候也必须写一个{}
// 导入
// 如果是分别导出,导入的时候必须写一个{}


// 如果是默认导出,就不需要写{}
// 注意: 如果使用的是默认导出,名字可以重新定义. 如果使用其他的两种方式导出,那么名字要跟木块中导出的名字一致


(0, _module2.fun1)();
(0, _module4.default)();
console.log(_module2.data);
console.log(_module3.msg);
(0, _module3.fn)();