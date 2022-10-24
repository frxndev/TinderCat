import React from 'react'

export interface LayoutInterface {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return <div className='p-3 '>{children}</div>
}

export default Layout
