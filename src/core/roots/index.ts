/**
 * 用户的权限，包括路由权限，和组件的权限（不同的人物有不同的权限）
 * 根据权限生成对应内容
 */

import AuthContainer from './AuthJudge'

import getUserRoot from './router'


export {
  getUserRoot,
  AuthContainer
}