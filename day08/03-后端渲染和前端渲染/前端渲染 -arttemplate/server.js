const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/test', (req, res) => {
  let arr = [
    { name: '海静', age: 38 },
    { name: '呸华', age: 8 },
    { name: 'zs', age: 27 }
  ]
  res.send(arr)
})

app.listen(5000)
