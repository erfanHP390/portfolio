import React from 'react'
import './HardSkill.css'

export default function HardSkill ({ title, percent , color }) {
  return (
    <div className='hard-skill'>
      <div className='hard-skill-title'>
        <span className='hard-skill-title-text'>{title}</span>
        <span className='hard-skill-title-text  percent'>{percent}%</span>
      </div>
      <svg
        class='rc-progress-line'
        viewBox='0 0 100 1'
        preserveAspectRatio='none'
      >
        <path
          class='rc-progress-line-trail'
          d='M 0.5,0.5
         L 99.5,0.5'
          stroke-linecap='round'
          stroke='#EDF2F2'
          stroke-width='1'
          fill-opacity='0'
        ></path>
        <path
          class='rc-progress-line-path'
          d='M 0.5,0.5
         L 99.5,0.5'
          stroke-linecap='round'
          stroke={color}
          stroke-width='1'
          fill-opacity='0'
          style={{strokeDasharray: `${percent}px, 100px`, strokeDashoffset: "0px", transition: "stroke-dashoffset 0.3s stroke-dasharray 0.3s stroke 0.3s linear, 0.06s"}}
        ></path>
      </svg>
    </div>
  )
}
