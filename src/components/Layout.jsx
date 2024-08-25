import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

function Layout({length}) {
  return (
    <>
     <Navbar length={length}/>
     <Outlet/>
     <Footer/> 
    </>
  )
}

export default Layout
