import React from 'react'
import ResponsiveAppBar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <Outlet/>
    </div>
  )
}

export default Layout
