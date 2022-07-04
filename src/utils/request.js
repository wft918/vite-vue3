 
import axios from 'axios'
// import qs from 'querystring'
 
// 根据环境变量 统一设置 域名 前缀
axios.defaults.baseURL = import.meta.env.MODE !== 'production' ? import.meta.env.VITE_APP_BASE_API : import.meta.env.VITE_APP_SERVER_URL
// 设置超时时间
axios.defaults.timeout = 10000
 // 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
// axios.defaults.headers = {'Content-Type': 'application/json; charset=utf-8'}
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
// axios.defaults.transformRequest = data => qs.stringify(data)   //针对POST请求
 
// 请求拦截
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if(token) config.headers.Authorization = token
 
  return config
})
 
// 响应拦截
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  if(error.response) {
    if(error.response.status === 401) {
      // 权限
    }else if(error.response.status === 402 || error.response.status === 403) {
      // 服务器拒绝  token过期
    }else if(error.response.status === 404) {
      // 路径错误  跳转到404页面  path -> *
    }
  }else {
    if(!window.navigator.onLine) {
      // 断网处理
      // 跳转到断网页面
    }
    return Promise.reject(error)
  }
})
 
export default axios