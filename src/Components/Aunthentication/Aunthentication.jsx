import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Aunthentication = () => {
  const isLoggedIn = localStorage.getItem("loggedin")
    
    
    if(!isLoggedIn){
        return (
        <Navigate to ="/login"
        state={{message: "You must login first"}}
        />)
        
    }
    return <Outlet/>
  return (
    <div>
      
    </div>
  )
}

export default Aunthentication
