/* eslint-disable jsx-a11y/anchor-has-content */
import './Header.css'
import { Link } from 'react-router-dom'
import NavLink from '../NavLink/NavLink'
import React, { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Outlet, useLocation } from 'react-router-dom'
import UseData from '../../Hooks/UseData'
export default function Header () {
  const [menuOpen, setMenuOpen] = useState(false)
  const { handleTheme, check, menuItem } = UseData()
  const handle = e => {
    handleTheme(e)
  }
  const linkSite = useLocation()

  

  return (
    <header className='header'>
      <div className='img-container'>
        <div className='img-cont'>
          <a href='/' className='img-link'>
            <img src='' alt='' className='img-logo' />
          </a>
          <div className='nav-mobile'>
            {!check ? (
              <span
                onClick={() => handle('dark')}
                className='DL-moon  dl-mobile'
              >
                <FiMoon className='DL-moon-icon ' />
              </span>
            ) : (
              <span
                onClick={() => handle('light')}
                className='DL-moon  DL-light  dl-mobile '
              >
                <FiSun className='DL-moon-icon Dl-light-icon' />
              </span>
            )}
            {!menuOpen ? (
              <span
                onClick={() => setMenuOpen(!menuOpen)}
                className='hamburger-menu '
              >
                <AiOutlineMenu />
              </span>
            ) : (
              <span
                onClick={() => setMenuOpen(!menuOpen)}
                className='close-btn'
              >
                <AiOutlineClose />
              </span>
            )}
          </div>
        </div>
      </div>
      <nav
        className={`${
          menuOpen ? '' : 'nav'
        }`}
      >
        <ul className={`nav-list`}>
          <NavLink className={linkSite.pathname === "/" ? `nav-link  active` : "nav-link"}
            href={`/`}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='0'
                viewBox='0 0 1024 1024'
              >
                <path
                  stroke='none'
                  d='M946.5 505 560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2M568 868H456V664h112zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3z'
                ></path>
              </svg>
            }
            title={`خانه`}
          />
          <NavLink className={linkSite.pathname === "/about" ? `nav-link  active` : "nav-link"}
            href={`/about`}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='0'
                viewBox='0 0 448 512'
              >
                <path
                  stroke='none'
                  d='M313.6 304c-28.7 0-42.5 16-89.6 16s-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4M400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144m0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96'
                ></path>
              </svg>
            }
            title={`درباره`}
          />
          <NavLink className={linkSite.pathname === "/resume" ? `nav-link  active` : "nav-link"}
            href={`/resume`}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                fill='none'
                stroke='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  stroke='none'
                  d='M6 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M6 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 13a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zM6 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1'
                ></path>
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  stroke='none'
                  d='M2 4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1'
                  clipRule='evenodd'
                ></path>
              </svg>
            }
            title={`رزومه`}
          />
          <NavLink  className={linkSite.pathname === "/works" ? `nav-link  active` : "nav-link"}
            href={`/works`}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16'></path>
                <path d='m7.5 4.21 4.5 2.6 4.5-2.6M7.5 19.79V14.6L3 12M21 12l-4.5 2.6v5.19M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12'></path>
              </svg>
            }
            title={`کارها`}
          />
          <NavLink  className={linkSite.pathname === "/contact" ? `nav-link  active` : "nav-link"}
            href={`/contact`}
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
              >
                <g stroke='none'>
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3zm4 2H5v16h2zm2 16h10V4H9zm2-4a3 3 0 0 1 6 0zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8-6h2v4h-2zm0 6h2v4h-2z'></path>
                </g>
              </svg>
            }
            title={`تماسها`}
          />
          
          {!check ? (
            <span onClick={() => handle('dark')} className='DL-moon'>
              <FiMoon className='DL-moon-icon' />
            </span>
          ) : (
            <span
              onClick={() => handle('light')}
              className='DL-moon  DL-light  '
            >
              <FiSun className='DL-moon-icon Dl-light-icon' />
            </span>
          )}
        </ul>
      </nav>
    </header>
  )
}
