const express = require('express')

const app = express()

const router = require('./router/router')

/**
 *  全局中间件
 *  必须写在所有 接口 之前
 */
app.use((req, res, next) => {
  console.log('触发全局中间件')
  next()
})

app.use(router)

/**
 *  全局错误中间件
 *  必须写在所有接口之后
 *  捕获错误
 */
app.use((err, req, res, next) => {
  console.log('触发了全局错误中间件')
  res.send(err.message)
})

app.listen(8888, () => {
  console.log('server running at http://127.0.0.1:8888')
})