
const express = require('express')

const router = express.Router()

const adminData = require('../data/admin.json')
const vipData = require('../data/vip.json')
const ordinaryData = require('../data/ordinary.json')

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