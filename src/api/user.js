
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}

export function userData(params) {
  return request({
    url: '/user',
    method: 'get',
    params
  })
}