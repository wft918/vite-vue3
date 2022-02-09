
/**
 * 深拷贝
 * 针对引用数据类型
 */

export function deepClone(source) {
  const targetObj = source.constructor === Array ? [] : {}
  for(let key in source) {
    if(source.hasOwnProperty(key)) {
      if(source[key] && typeof source[key] === 'object') {
        targetObj[key] = deepClone(source[key])
      }else {
        targetObj[key] = source[key]
      }
    }
  }
  return targetObj
}