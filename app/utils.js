'use strict';
const crypto = require('crypto');
const getAothCode = (n = 6) => {
  let randomStr = [];
  for (let i = 0; i < n; i++) {
    randomStr += Math.floor(Math.random() * 10);
  }
  return randomStr;
};

const getRandomStrArr = (n = 1000) => {
  return new Array(n).fill(0).map(() => Math.random().toString(36).substr(2));
};

const getLocalTime = () => {
  // 参数i为时区值数字，比如北京为东八区则输进8,西5输入-5
  const d = new Date();
  // 得到1970年一月一日到现在的秒数
  const len = d.getTime();
  // 本地时间与GMT时间的时间偏移差
  const offset = d.getTimezoneOffset() * 60000;
  // 得到现在的格林尼治时间
  const utcTime = len + offset;
  const date = new Date(+new Date(utcTime + 3600000 * 8));
  const Y = date.getFullYear();
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  const D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return `${Y + M + D + h + m + s}`;
};

const aesEncrypt = (data, key) => {
  const cipher = crypto.createCipher('aes192', key);
  let crypted = cipher.update(data, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const aesDecrypt = (data, key) => {
  const decipher = crypto.createDecipher('aes192', key);
  let decrypted = decipher.update(data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

module.exports = {
  getAothCode,
  getLocalTime,
  getRandomStrArr,
  aesEncrypt,
  aesDecrypt,
};
