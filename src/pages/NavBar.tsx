import React from 'react'
import logo from '../assets/logo.png'

import {Link,Outlet} from "react-router-dom"

function NavBar() {
  return (
    
    <>
    <div className='navbar'>
        <img id="logo" src={logo}/>
        <nav>
        <Link to="/">Home</Link>
        <Link to= "/chat">Chat</Link>
        </nav>

    </div>
    <Outlet />
    </>
  )
}

export default NavBar