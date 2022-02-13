
const express = require('express')
//  1. 导入用于生成 JWT 字符串的包
const jwt = require('jsonwebtoken')

// 定义一个 secret 密钥 本质：就是一个字符串
const secretKey = 'itheima No ^_^'

const router = express.Router()

const adminData = require('../data/admin.json')
const vipData = require('../data/vip.json')
const ordinaryData = require('../data/ordinary.json')


// 登录接口
router.post('/login', (req, res) => {
  const userInfo = req.body  // 用户信息（包含用户名、密码等）
  console.log(req.body,'body-->>')
  // 登录失败的情况
  if(userInfo.username !== 'admin' || userInfo.password !== '123456') {  // 去数据库查询 有没有这个用户 或者 密码是否正确
    return res.send({
      status: 400,
      message: '登录失败!'
    })
  }
  /**
   * 登录成功的情况
   * 调用 jsonwebtoken 中的 sign() 方法生成 jwt 字符串 发送给客户端
   * 参数1： 用户的信息对象 （为了保证安全，不要把密码加密到token字符串中）
   * 参数2： 加密的密钥
   * 参数3： 配置对象，可以配置当前token的有效期
   */
  const tokenStr = jwt.sign({username: userInfo.username}, secretKey, { expiresIn: '10h' })
  res.send({
    status: 200,
    message: '登录成功!',
    success: true,
    token: tokenStr
  })
})

router.get('/user', (req, res) => {
  if(JSON.stringify(req.query) == '{}') {
    throw new Error('找不到当前用户!')
  }else if(req.query.username == 'admin') {
    res.send(adminData)
  }else if(req.query.username == 'vip') {
    res.send(vipData)
  }else {
    res.send(ordinaryData)
  }
})

module.exports = router