
const express = require('express')

const router = express.Router()

const userHandler = require('../router_handler/user')




// 登录接口
router.post('/login', userHandler.loginHandler)

// user接口
router.get('/user', userHandler.userHandler)

module.exports = router