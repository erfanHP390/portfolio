import React from 'react'
import "./SocialBox.css"

export default function SocialBox({href , icon}) {
  return (
    <a href={href}  target='_blank' rel="noreferrer"> 
      <span className="social-btn">
        {icon}
      </span>
    </a>
  )
}
