import React, { ReactNode } from 'react'

/**
 * 该组件包裹的组件，只有符合认证，才能查看组件内的 children
 * @param children token
 * @returns @ReactNode
 */
const AuthContainer: React.FC<{ token: string, children: ReactNode }> = ({ children, token }) => {
  const currentList: string[] = ['button']
  if (!currentList.includes(token)) {
    return (<div>
      {/* null */}
    </div>)
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthContainer
