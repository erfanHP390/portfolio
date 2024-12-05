import React from 'react'
import "./ResumeContentBox.css"

export default function ResumeContentBox({style , date , title , subtitle}) {
  return (
    <div  className={style}>
      <span className="resume-h-c-box-date">
        {date}
      </span>
      <h3 className="resume-h-c-box-title">
        {title}
      </h3>
      <p className="resume-h-c-box-subtitle">
        {subtitle}
      </p>
    </div>
  )
}
