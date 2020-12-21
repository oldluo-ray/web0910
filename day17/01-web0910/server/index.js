const express = require('express')

const app = express()

// 启动服务器 node index.js

// 解决跨域
app.use((req, res, next) => {
  // 允许跨域的地址
  res.set('Access-Control-Allow-Origin', '*')
  // 允许跨域的请求方式
  res.set('Access-Control-Allow-Mehtods', 'GET,POST,PUT,DELETE')
  // 允许跨域的请求头
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  // 预检请求的缓存时间
  res.set('Access-Control-Max-Age', 36400)
  // 是否进行预检请求
  res.set('Access-Control-Allow-Credentials', true)

  if (req.method === 'options') {
    // 预检请求 直接返回响应
    res.end()
    return
  }

  next()
})

/*
  后台路由
    key： /search/users
    value： function () {}
*/
app.get('/search/users', function(req, res) {
  res.json({
    items: [
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308265815&di=26173fe654f82477002c4ac99a0d2d78&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F05%2F20181005145859_uwmfo.jpg',
        id: 1
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1592298182&di=df0fed3433e52e434f6a5d0968a65b01&src=http://img.jk51.com/img_jk51/331878478.jpeg',
        id: 2
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308265815&di=26173fe654f82477002c4ac99a0d2d78&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F05%2F20181005145859_uwmfo.jpg',
        id: 3
      },
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308333812&di=7a5448dfe3da8239d09d929edd02609e&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1899454885%2C893965929%26fm%3D214%26gp%3D0.jpg',
        id: 4
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1592298182&di=df0fed3433e52e434f6a5d0968a65b01&src=http://img.jk51.com/img_jk51/331878478.jpeg',
        id: 5
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308265815&di=26173fe654f82477002c4ac99a0d2d78&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F05%2F20181005145859_uwmfo.jpg',
        id: 6
      },
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308265815&di=26173fe654f82477002c4ac99a0d2d78&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F05%2F20181005145859_uwmfo.jpg',
        id: 7
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308265815&di=26173fe654f82477002c4ac99a0d2d78&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F05%2F20181005145859_uwmfo.jpg',
        id: 8
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592308265821&di=bb3faa65d3dd2064691c1c2ce3c21b3c&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F23%2F1533137219-lgdLqmcXsI.jpg',
        id: 9
      }
    ]
  })
})

app.listen(5000, 'localhost', err => {
  if (!err) console.log('服务器启动成功了，请访问 http://localhost:5000')
  else console.log(err)
})
