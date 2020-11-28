// let arr = [2, 6, 9, 7, 4, 3, 5, 9, 7, 6]

// const uniq = require('uniq')
// console.log(uniq)

// console.log(uniq(arr))

// 使用uniq第三方库,帮我们实现去重和排序
// 指令: npm
// npm install 包名   下载指定包(下载的是最新的包)
// npm install 根据package.json/package-lock.json 去下载项目中所有的依赖包
// npm remove 包名  删除指定包
// npm init 初始化包(不常用)
// npm install 包名 -g 表示下载全局包
// 会下载到这个地址中: C:\Users\你自己的用户名\AppData\Roaming\npm\node_modules
// 当前项目中要使用某个包的函数或者是对象,一般下载到本地(项目目录中)
// 如果是一个工具包,就应该下载到全局 (在命令行窗口的任何路径下都可以执行)
// npm install 包名 --save  表示在package.json中添加dependencies字段
// dependencies 表示生产环境下,依赖哪些包
// npm install 包名 --save-dev 表示在package.json中添加devDependencies字段
// devDependencies 表示开发环境下,依赖那些包 项目完毕打包的时候,不会将这个包打包进去

// 举例: 在开发的时候,可能要用到一个babel的包.这个包只有在开发的时候用. 在代码写完之后,测试完毕,打包上线的时候,是不需要使用这个包的
// 开发过程中--> 开发环境
// 开发完毕,打包上线之后 --> 生产环境

// 注意点:
// npm install ==简写==> npm i
// npm install 包名 默认会去下载最新版
// 需要下载指定版本 npm install 包名@x.x.x
// npm install 包名  --save 可以简写. 简写的时候,就是忽略--save
// npm install 包名 --save-dev 可以简写, 简写成一个-D
