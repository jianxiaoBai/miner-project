import http from './http.js'

const apiCaptcha = (options) => {
  return http.get('captcha', options);
}

const apiSendSms = (options) => {
  return http.get('sendSms', options);
}

const apiLogin = (options) => {
  return http.post('login', options);
}
const apiSign = (options) => {
  return http.post('sign', options);
}
const aaa = (options) => {
  return http.post('aaa', options);
}

export {
  apiCaptcha,
  apiSendSms,
  apiLogin,
  apiSign,
  aaa
}
