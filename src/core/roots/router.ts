import { $http } from '@/utils/reuqest'

// 获取当前用户权限--权限中的路由权限

async function isSignIn():Promise<boolean> {
  // const history = useHistory()
  const logged = await $http.post('')
  if (!logged){
    // history.push('/login')
  }
  return false
}

export default isSignIn