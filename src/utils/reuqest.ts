/**
 * axios 网络请求工具
 * @param url 请求的路径
 */
import axios from 'axios'
import { urlPrefix } from '../config'

// 使用前缀，配合本地代理
export const $http = axios.create({
  baseURL: `${urlPrefix}`,
  timeout: 2000
})
export default axios
