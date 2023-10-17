import React from 'react'
import logo from '../assets/logo.png'
import gear from '../assets/gear.png'
import {Link,Outlet} from "react-router-dom"

function NavBar() {
  return (
    
    <>
    <div className='navbar'>
        <img className="logo" src={logo}/>
        <nav>
        <Link to="/">Home</Link>
        <Link to= "/chat">Chat</Link>
        </nav>
        <img className='logo' src={gear}/>
    </div>
    <Outlet />
    </>
  )
}

export default NavBar