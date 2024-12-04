import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'


export default function Home() {
  return (
    <div className='bg-homeBg'>
      <div className='z-50'>
        <div className='container'>
          <Header />
        </div>
      </div>
    </div>
  )
}
