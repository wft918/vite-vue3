
import request from '@/utils/request'

export function userData(params) {
  return request({
    url: '/user',
    method: 'get',
    params
  })
}