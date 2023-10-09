import request from '@/utils/reuqest'
import { getLoginWay, setLoginWay } from './storage'
/**
 * 登录认证：用来作为用户当前登录的认证（所有用户统一使用的认证方式）
 * 权限获取，来获取用户的权限
 */

/**
 * 登陆请求数据类型
 */
export interface ILogin {
  userName: string;
  pwd: string;
}

/**
 * 返回数据类型
 */
export interface ILoginData extends Record<string, unknown> {
  code: number;
  message: string;
  token: string;
}

/**
 * 登陆接口
 */

const loginApp = (params: ILogin): Promise<ILoginData> => {
  return request.get('/log', {
    headers:{}
  })
}
export {
  getLoginWay,
  setLoginWay,
  loginApp
}