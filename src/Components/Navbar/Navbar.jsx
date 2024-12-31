import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <div>
        <header>
        <Link 
        to="/" className="site-logo">#VANLIFE</Link >
        <nav className='nav'>
        <NavLink  
        to="/host"
        style={({isActive}) => isActive ? activeStyle : null }
        >Host</NavLink >
        <NavLink
         to="/about"
         style={({isActive}) => isActive ? activeStyle : null }
         >About</NavLink>
        <NavLink
         to="/vans"
         style={({isActive}) => isActive ? activeStyle : null }
         >Vans</NavLink> 

<Link to="login" className="login-link">
     <CgProfile className="login-icon" />
  </Link>

        </nav>
        </header>
        
      
    </div>
  )
}

export default Navbar
