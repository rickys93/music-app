import React from 'react'
import { NavLink, useLocation, Outlet } from 'react-router-dom'

import { NavButton } from '../../components'
import "./index.css"

function NavBar() {
    
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>Palace</div>
                <ul className="navlinks">
                    <NavButton to={"/"} title={"Home"}/>
                    <NavButton to={"/bio"} title={"Bio"}/>
                    <NavButton to={"/albums"} title={"Albums"}/>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default NavBar