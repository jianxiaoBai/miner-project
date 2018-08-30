'use strict'

import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import { apiUrl } from '../config/index.js'
import { getStore } from '~/util';
const that = Vue.prototype

const service = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  withCredentials: true
})

service.interceptors.request.use(config => {
  const token = getStore('token');
  if (token) {
    config.headers['token'] = token;
  }
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(res => {
  return res.data
}, ({ response: { data , status } }) => {
  console.log(status);

  if(status === 401) {
    location.href = '/sign-in'
  } else {
    that.$message({
      message: data.message,
      type: 'error'
    });
  }
  return Promise.reject({
    status: status,
    message: data.message
  })
})

export default {
  post (url, data = {}) {
    return service({
      method: 'post',
      url,
      data: qs.stringify(data),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'withCredentials': true,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  delete (url, data = {}) {
    return service({
      method: 'delete',
      url,
      data: qs.stringify(data),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'withCredentials': true,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get (url, params = {}) {
    return service({
      method: 'get',
      url,
      params, // get 请求时带的参数
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}
