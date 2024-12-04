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
              <SocialBox href={""}  icon={<FaGithub className='github' />} />
              <SocialBox href={""}  icon={<RiInstagramFill className='instagram' />} />
              <SocialBox href={""}  icon={<FaTelegramPlane className='telegram' />} />
              <SocialBox href={""}  icon={<BsLinkedin className='linkedin' />} />

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
