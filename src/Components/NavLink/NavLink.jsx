import React from 'react'
import "./NavLink.css"
import { Link } from 'react-router-dom'

export default function NavLink({href , title , icon,className}) {
  return (
    <li>
    <Link to={href} className={className}>
      <span className='nav-link-icon'>
        {icon}
      </span>
      {title}
    </Link>
  </li>
  )
}
