/**
 * 当前环境变量
 */
// 浏览器中使用的是 import.meta
// const devMeta = import.meta.env
// console.log(devMeta)

/**
 * 接口地址
 * @description 测试地址，或者是其它地址，当前指向为：mock 的地址
 */
export const apiAddress = 'http://localhost:3030/'

/**
 * 开发环境下，代理前缀
 */
export const proxyApi = '/api'

/**
 * 接口前缀
 * 判断环境，是否需要使用前缀
 * 生产环境不需要代理，同时本地配置的代理在生产环境也是不能用的
 */
export const urlPrefix = process.env.NODE_ENV === 'development' ? proxyApi : ''
