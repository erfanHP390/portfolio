import React from 'react'
import './About.css'
import AboutMeInfosItem from '../../Components/AboutMeInfosItem/AboutMeInfosItem'
import AboutWorksBox from '../../Components/AboutWorksBox/AboutWorksBox'

// import icons
import { FaMobileAlt ,  FaMapMarkerAlt} from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";

export default function About () {
  return (
          <section>
            <div className='container  about-container'>
              <div>
                <div className='about-me'>
                  <h2 className='about-me-title'>درباره من</h2>
                  <div className='about-me-content'>
                    <div className='about-me-content-img'>
                      <img
                        src='./images/about/prof.jpg'
                        alt=''
                        className='about-me-content-image'
                      />
                    </div>
                    <div className='about-me-content-info'>
                      <div className='about-me-content-summery'>
                        <h3 className='about-me-content-summery-title'>
                          من کی هستم؟
                        </h3>
                        <p className='about-me-summery-content'>
                          به‌عنوان یک فرد پرشور و علاقه‌مند به برنامه‌نویسی، دو
                          سال گذشته را به توسعه مهارت‌هایم اختصاص داده‌ام و تسلط
                          خوبی بر HTML، CSS، JavaScript و React پیدا کرده‌ام.
                        </p>
                        <p className='about-me-summery-content'>
                          همکاری در محیط‌های تیمی را بسیار ارزشمند می‌دانم و
                          معتقدم که از طریق تعامل و مشارکت، می‌توان به بهترین
                          نتایج دست یافت. هدف من همواره یادگیری و پیشرفت مداوم
                          در دنیای فناوری است.
                        </p>
                      </div>
                      <div>
                        <h3 className="about-me-info-title">
                        اطلاعات شخصی
                        </h3>
                        <div className="about-me-info-content">
                          <AboutMeInfosItem icon={<FaMobileAlt  className='tel-icon' />}  title={`تلفن`}  subtitle={`+989962939286`} />
                          <AboutMeInfosItem icon={<FaMapMarkerAlt className='map-icon' />}  title={`مکان`}  subtitle={`ایران ، خراسان رضوی ، مشهد`}  />
                          <AboutMeInfosItem icon={<HiOutlineMailOpen className='mail-icon' />} title={`ایمیل`}  subtitle={`e.hoseeini@yahoo.com`} />
                          <AboutMeInfosItem  icon={<SlCalender className='calender-icon' />}  title={`تولد`}  subtitle={`خرداد 1382`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-works">
                  <h3 className="about-works-title">
                  کارهایی که انجام میدم!
                  </h3>
                  <div className="about-works-content">
                    <AboutWorksBox img={`./images/svg/icon-figma.svg`}  style={`about-works-box  purple`}  text={`طراحی رابط کاربری و سایت شما، دقیقاً همان طرح دلخواه شما، با رعایت استانداردها و اصول حرفه‌ای انجام می‌شود تا تجربه‌ای منحصربه‌فرد و کارآمد به ارمغان بیاورد.`}  title={`طراحی Ui/Ux`}  />
                    <AboutWorksBox img={`./images/svg/icon-code.svg`}  style={`about-works-box  blue`}  text={`طراحی سایت به صورت حرفه‌ای، اصولی و بهینه با استفاده از فریمورک‌های پیشرفته، تا بهترین تجربه کاربری را برای شما ایجاد کنیم.`}  title={`طراحی وب`}  />

                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}
