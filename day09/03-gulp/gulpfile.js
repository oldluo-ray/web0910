// 写gulp代码
const gulp = require('gulp')

// 引入插件
// jshint
const jshint = require('gulp-jshint')

// babel
const babel = require('gulp-babel')
//browserify
const browserify = require('gulp-browserify')
// rename 给文件重命名的
const rename = require('gulp-rename')
// 压缩js
const uglify = require('gulp-uglify')
// 将less装成css
const less = require('gulp-less')
// 给css样式加前缀(解决css兼容问题)
const LessAutoprefix = require('less-plugin-autoprefix')
// 配置具体兼容浏览内核的版本
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }) // 所有内核的浏览器往前兼
//  合并文件的插件
const concat = require('gulp-concat')
// 压缩
const cssmin = require('gulp-cssmin')
// 压缩html
const htmlmin = require('gulp-htmlmin')

const livereload = require('gulp-livereload')
const connect = require('gulp-connect')
const opn = require('opn')

// 配置任务
// 使用jshint检查js中语法是否规范
gulp.task('jshint', function() {
  // 将你的任务的任务代码放在这
  return gulp
    .src('./src/js/*.js')
    .pipe(
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default')) // gulp插件中查看
    .pipe(livereload())
})

// 使用babel将es6的语法,转成浏览器认识的语法(es6模块化==>commonjs语法)
gulp.task('babel', () =>
  gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        //进行语法转换
        presets: ['@babel/env']
      })
    )
    .pipe(gulp.dest('build/js')) //输出到指定目录
    .pipe(livereload())
)

// 将commonjs语法编译成浏览器任务的语法
gulp.task('browserify', function() {
  return gulp
    .src('./build/js/*.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(gulp.dest('dist/js')) //输出到指定位置
    .pipe(livereload())
})

// 压缩js
gulp.task('uglify', function() {
  return gulp
    .src('dist/js/app.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

// 将less编译成css, 并且帮助我们解决兼容问题
gulp.task('less', function() {
  return gulp
    .src('./src/less/*.less')
    .pipe(
      less({
        plugins: [autoprefix] //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 合并css文件
gulp.task('concat', function() {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 压缩css
gulp.task('cssmin', function() {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

// 压缩html
gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

//自动执行任务，编译代码
gulp.task('watch', function() {
  //1. 在所有可能要执行任务后面加上 .pipe(livereload());
  //2. 配置watch任务
  livereload.listen()
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true // 自动刷新
  })
  //自动打开浏览器
  opn('http://localhost:3000/index.html')
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']))
  gulp.watch(
    './src/js/*.js',
    gulp.series(['jshint', 'babel', 'browserify', 'uglify'])
  )
  gulp.watch('./src/index.html', gulp.series('htmlmin'))
})
// 给gulp定义了一个默认的任务. 在命令行工具中,执行gulp 任务名,指定的任务就会执行
// 注意: 如果任务名是default 那么执行gulp指令的时候,可以忽略任务名
// 注意:  gulp.series可以自动调用之前配置好的任务执行. 按照传入的任务名的顺序执行
//        这个任务必须写在其他的任务的后面
gulp.task(
  'default',
  gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'
  )
)
