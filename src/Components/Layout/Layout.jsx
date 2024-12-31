import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./layout.css"
const Layout = () => {
    
  return (
    <div className="site-wrapper">
        <Navbar/>
        <main>
        <Outlet/>
        </main>
     
      <Footer/>
    </div>
  )
}

export default Layout
