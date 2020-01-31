const express = require('express')
const {join} = require('path')
const path = require('path')
const history = require('connect-history-api-fallback')

const Port = process.env.PORT || 3000
const app = express()

app.use(history())

app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/javascript')
  next()
})

app.get('*.css', (req, res, next) => {
  req.url = `${req.url}.gz`
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/css')
  next()
})

app.use(express.static(join(__dirname, 'dist')))

app.listen(Port, () => console.log('start server'))
