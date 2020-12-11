const path = require('path')

console.log(__dirname)

// 导入编译html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 分离css的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 压缩css插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  // 声明入口文件
  // entry: './src/js/app.js',
  // 配置多个入口文件
  entry: ['./src/js/app.js', './src/index.html'],
  // 声明输入的文件路径
  output: {
    // path: '打包后js文件存放的文件夹的路径',
    // filename: '具体打包后js的文件名'
    path: path.resolve(__dirname, '../dist'),
    filename: './js/main.js'
  },
  mode: 'production',
  // 所有的loader都配置在module中
  module: {
    rules: [
      // 处理less的loader配置
      {
        test: /\.less$/, // 检查文件是否以.less结尾（检查是否是less文件）
        use: [
          // 数组中loader执行是从下到上，从右到左顺序执行
          // 'style-loader', // 创建style标签，添加上js中的css代码
          MiniCssExtractPlugin.loader, // 将css以外链的形式引入
          'css-loader', // 将css以commonjs方式整合到js文件中
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  stage: 3 // 兼容性程度: 0, 1, 2, 3 值越大,表示兼容的程度越高
                }),
                require('postcss-normalize')()
              ]
            }
          },
          'less-loader' // 将less文件解析成css文件
        ]
      },
      // 通过eslint检查js是否符合规范
      {
        test: /\.js$/, //只检测js文件
        exclude: /node_modules/, //排除node_modules文件夹
        enforce: 'pre', //提前加载使用 1. pre 优先处理 2. normal 正常处理（默认)3. inline 其次处理 4. post 最后处理
        use: {
          //使用eslint-loader解析
          loader: 'eslint-loader'
        }
      },
      // 利用babel,将es6代码编译成es6之前的浏览器认识的代码(默认只能编译普通的es6语法)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // 注意: presets是一个数组,里面又套了一个数组
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage', // 按需引入(需要使用polyfill)
                  corejs: { version: 3 }, // 解决warning警告
                  targets: {
                    // 指定兼容性处理哪些浏览器
                    chrome: '58',
                    ie: '9'
                  }
                }
              ]
            ],
            cacheDirectory: true // 开启babel缓存
          }
        }
      },

      // 让webpack处理图片文件
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // 8kb --> 8kb以下的图片会base64处理
            outputPath: 'imgs', // 决定文件本地输出路径
            publicPath: './imgs', // 决定图片的url路径
            name: '[hash:8].[ext]' // 修改文件名称 [hash:8] hash值取8位  [ext] 文件扩展名
          }
        }
      },

      // 出路html中img标签的loader
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      // 打包其他文件资源
      {
        test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理其他资源
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[hash:8].[ext]'
        }
      }
    ]
  },

  //插件
  plugins: [
    // 打包html文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    // 将less编译成css之后,将css写入到一个单位css文件中
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),

    // 压缩css
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      cssProcessorOptions: {
        // 解决没有source map问题
        map: {
          inline: false,
          annotation: true
        }
      }
    })
  ]
}
