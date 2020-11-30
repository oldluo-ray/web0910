// commomjs
// 导入: require('模块名/路径')
// 自定义的模块写 路径
// 系统级的模块/第三方的模块 写模块名
// 导出: moudle.exports / exports
// 不同点: moudle.exports 可以直接赋值, exports 不可以
// 相同点: 他们都指向同一个对象. 可以直接添加属性

// nodejs是一个基于v8引擎的一个js运行环境
// nodejs可以写后台.
// 优点: 异步i/o,所以适用于i/o密集型
// 缺点: 因为是单线程. 所以不适用与cpu密集型

// npm node package manager
// 就是包管理工具(一般用于下载第三方的包)
// 包 一个项目如果有package.json,就可以称之为是一个包
// 初始化一个包: npm init -y
// 下载包: npm i/install 包名
// 下载指定包: npm i 包名@xx.xx.xx
//  默认都是下载到了生产环境下
// 开发环境使用的包下载的方式: npm i 包名 -D
// 移除包: npm remove 包名

// 一次性下载项目中所有依赖的包: npm i
// 根据package.json或package-lock.json中 dependencies/devDependencies 去下载依赖包

// 下载的包都是存储在了node_modules这个文件夹下面
// 在项目中,如果使用了require要引入一个第三方包. 那么如果查找.
// 先从当前项目的根目录中查找node_modules,从node_modules中找.如果当前目录下没有node_modules, 就沿着层级目录,一直找到盘符根路径
// 注意: 虽然可以沿着层级目录往上找,但是,开发的时候,还是最好将需要的包,放在项目的根目录中

// 下载包:
// 本地包: npm i 包名   项目中需要用到一个包的方法或属性就是本地包
// 全局包: npm i 包名 -g  工具包下载到全局
