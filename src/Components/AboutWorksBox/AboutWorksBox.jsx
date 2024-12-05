import React from 'react'
import "./AboutWorksBox.css"

export default function AboutWorksBox({style ,img,title,text}) {
  return (
    <div className={style} >
      <img src={img} alt="" className='about-works-box-icon' />
      <div className="about-works-box-info">
        <h3 className="about-works-box-info-title">
            {title}
        </h3>
        <p className="about-works-box-info-text">
            {text}
        </p>
      </div>
    </div>
  )
}
