const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/test', (req, res) => {
  res.send(req.query)
})

app.post('/test', (req, res) => {
  setTimeout(() => {
    console.log('post')
    res.send(req.body)
  }, 4000)
})

app.listen(5000)
