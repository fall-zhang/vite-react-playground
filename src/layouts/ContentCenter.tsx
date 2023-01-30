import React from 'react'
import type { ReactNode,FC } from 'react'
import clsx from 'clsx'
const ContentCenter:FC<{children:ReactNode}> = function({children}){
  return (<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
    {children}
  </div>)
}
export default ContentCenter