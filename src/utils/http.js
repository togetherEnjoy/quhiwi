const config = require('./config')

import axios from 'axios'

let mm = `http://m.news.qhiwi.com`
let host = 'http://120.78.158.34/'
let dhr = '/dhr/'
// axios.defaults.baseURL = host
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}