
// 导入mysql模块
const mysql = require('mysql')
 
// 建立 Mysql 数据库的连接关系
const db = mysql.createPool({   //或者createConnection
  host: '127.0.0.1',   //数据库的 IP 地址
  user: 'root',  // 登陆数据的账号
  password: 'admin',  // 登录数据库的密码
  database: 'my_db_01'  // 指定要操作哪个数据库
})


module.exports = db