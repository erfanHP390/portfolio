import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import SocialBox from '../../Components/SocialBox/SocialBox';

// import icons 
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <div className='bg-homeBg'>
      <div className='z-50'>
        <div className='container'>
          <Header />
          <div className="home-container">
            <img src="./images/profile/profile.jpg" alt="" className='img-profile' />
            <h3 className="title-profile">
              عرفان حسینی
            </h3>
            <p className="subtitle-profile">برنامه نویس فرانت اند</p>
            <div className="social-profile">
              <SocialBox href={"https://github.com/erfanHP390"}  icon={<FaGithub className='github' />} />
              <SocialBox href={"https://instagram.com/eh_programmer_23"}  icon={<RiInstagramFill className='instagram' />} />
              <SocialBox href={"https://t.me/ErfanH_programmer_390"}  icon={<FaTelegramPlane className='telegram' />} />
              <SocialBox href={"https://www.linkedin.com/in/erfan-hosseini-480b15325"}  icon={<BsLinkedin className='linkedin' />} />
            </div>
            <a href="" className="download-btn">
              <img src="./images/download.png" alt="" className='img-download' />
              دانلود رزومه
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
