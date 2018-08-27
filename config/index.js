/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * test
 */

let apiUrl

switch (process.env.NODE_ENV) {
  case 'development':
    apiUrl = 'http://127.0.0.1:7001'
    // apiUrl = 'http://39.105.125.189:7001/api'
    break
  case 'production':
    // articleUrl = 'http://39.105.125.189:8001/'
    // apiUrl = 'http://39.105.125.189:7001/'
    // articleUrl = 'https://www.truechain.pro/api2/'
    // apiUrl = 'https://www.truechain.pro/api/'
    break
}

export {
  apiUrl
}
