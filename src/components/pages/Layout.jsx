import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/> {/* This navbar is shared in each pages */}
      <Outlet/>   {/** This outlet is actual page which will we render with along navbar,Outlet is inbuilt in react-router-dom  */}
      
    </>
  )
}

export default Layout
