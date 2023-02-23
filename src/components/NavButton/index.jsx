import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'

function NavButton({ to, title }) {
    const activeStyle = {
        textDecoration:'underline',
        color:'darkblue'
    }
    const navSelected = ({ isActive }) => (isActive ? activeStyle : undefined)

    return (
        <li><NavLink className="navbutton" style={navSelected} to={to}>{title}</NavLink></li>
    )
}

export default NavButton