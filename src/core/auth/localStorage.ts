const setLoginWay = (way: string): boolean => {
  try {
    localStorage.setItem('login__Login__way', way)
  } catch (err) {
    throw new Error('配置本地认证信息错误：' + err)
  }
  return true
}

const getLoginWay = (): string => {
  const result = localStorage.getItem('login__Login__way')
  if (result) {
    return result
  }
  return ''
}
export {
  getLoginWay,
  setLoginWay
}