import React from 'react'
import "./Index.css"
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'

export default function Index() {
  return (
    <div className='bg-homeBg'>
      <div className="z-50">
        <div className="container">
      <Header />
      {<Outlet />}
        </div>
      </div>
    </div>
  )
}
