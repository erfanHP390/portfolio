import React from 'react'
import './ContactBox.css'

export default function ContactBox ({ img, style, title , subtitle , subtitle2 }) {
  return (
    <div className={style}>
      <span className='contact-box-icon'>
        <img src={img} alt={title} className='contact-box-icon-img' />
      </span>
      <div className=''>
        <p className='contact-box-title'>{title}:</p>
        <p className="contact-box-subtitle">
            {subtitle}
        </p>
        <p className="contact-box-subtitle">
            {subtitle2}
        </p>
      </div>
    </div>
  )
}
