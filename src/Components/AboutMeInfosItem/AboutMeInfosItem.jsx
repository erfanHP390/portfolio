import React from 'react'
import "./AboutMeInfosItem.css"

export default function AboutMeInfosItem({icon ,title , subtitle}) {
  return (
    <div className='about-me-info-content-item'>
      <span className="about-me-info-content-item-icon">
        {icon}
      </span>
      <div className="">
        <p className="about-me-info-item-title">
            {title}
        </p>
        <h6 className="about-me-info-item-subtitle">
            <a href="#" className="about-me-info-item-subtitle-link">{subtitle}</a>
        </h6>
      </div>
    </div>
  )
}
