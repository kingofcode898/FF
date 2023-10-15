import React from 'react'
import {Link,Outlet} from "react-router-dom"

function NavBar() {
  return (
    
    <>
    <div className='navbar'>
        <img src={"./src/assests/logo.png"}/>
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