const express = require('express')
const cors = require('cors')
//  2. 导入用于将客户端发过来的 JWY 字符串 解析还原还原成 JSON 对象的包
const expressJWT = require('express-jwt')

const app = express()

const router = require('./router/router')
// 定义一个 secret 密钥 本质：就是一个字符串  和 路由里面的secret一致
const secretKey = 'itheima No ^_^'

// 注册解析 jwt 字符串还原成json对象的 中间件
app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: ['/login'] }))

//  配置解析 application/json 格式数据的中间件
app.use(express.json())

// 配置解析 application/x-www-form-urlencoded 格式数据的中间件（固定写法）
app.use(express.urlencoded({ extended: false }))

// 配置cors中间件  解决跨域问题 客户端不需要做处理
app.use(cors())

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
  //  token 解析失败导致的错误
  if(err.name == 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token'
    })
  }
  // 其他错误
  res.send({
    status: 500,
    message: err.message || '未知错误'
  })
})

app.listen(8888, () => {
  console.log('server running at http://127.0.0.1:8888')
})