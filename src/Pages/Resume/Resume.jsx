import React from 'react'
import './Resume.css'
import { Helmet } from 'react-helmet'

import ResumeContentBox from '../../Components/ResumeContentBox/ResumeContentBox'
import HardSkill from '../../Components/HardSkill/HardSkill'
import SoftSkill from '../../Components/SoftSkill/SoftSkill'

// import icons
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { GiGraduateCap } from 'react-icons/gi'
import { LiaAwardSolid } from 'react-icons/lia'

export default function Resume () {
  return (
    <>
      <Helmet>
        <title>رزومه من</title>
      </Helmet>
      <section className='resume-container'>
        <div>
          <div className='container  resume-header'>
            <div className='resume'>
              <h2 className='about-me-title  fix-after'>رزومه</h2>
              <div className='resume-h-content'>
                <div>
                  <div className='resume-h-c-title'>
                    <div className='resume-h-c-title-icon'>
                      <BiBriefcaseAlt2 />
                    </div>
                    <h4 className='resume-h-c-title-text'>تحصیلات</h4>
                  </div>
                  <ResumeContentBox
                    date={`1401 - اکنون`}
                    style={`resume-h-c-box  orange`}
                    subtitle={`دانشگاه فرهنگیان`}
                    title={`کارشناسی آموزش ابتدایی`}
                  />
                </div>
                <div>
                  <div className='resume-h-c-title'>
                    <div className='resume-h-c-title-icon'>
                      <GiGraduateCap />
                    </div>
                    <h4 className='resume-h-c-title-text'>تجربه</h4>
                  </div>
                </div>
                <div>
                  <div className='resume-h-c-title'>
                    <div className='resume-h-c-title-icon'>
                      <LiaAwardSolid />
                    </div>
                    <h4 className='resume-h-c-title-text'>جوایز</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container resume-main'>
            <div className='resume-main-container'>
              <div className='resume-m-c-right'>
                <h4 className='resume-m-c-right-title'>مهارت‌های کاری</h4>
                <HardSkill title={`HTML`} percent={`88`} color={`#dd4b25`} />
                <HardSkill title={`CSS`} percent={`93`} color={`#264ADF`} />
                <HardSkill
                  title={`Bootstrap`}
                  percent={`98`}
                  color={`#8412F4`}
                />
                <HardSkill
                  title={`Tailwind`}
                  percent={`87`}
                  color={`#3bbef8`}
                />
                <HardSkill title={`Sass`} percent={`88`} color={`#cc6699`} />
                <HardSkill
                  title={`Javascript`}
                  percent={`63`}
                  color={`#EFD81C`}
                />
                <HardSkill title={`React`} percent={`71`} color={`#5AD4F6`} />
                <HardSkill title={`Next.js(در حال یادگیری)`} percent={`35`} color={`#4c4949`} />
                <HardSkill title={`Git`} percent={`75`} color={`#E94D32`} />
                <HardSkill title={`Github`} percent={`75`} color={`#3C0092`} />
                <HardSkill
                  title={`UI/UX design`}
                  percent={`70`}
                  color={`#330057`}
                />
                <HardSkill title={`Figma`} percent={`80`} color={`#0AC87E`} />
              </div>
              <div className='resume-m-c-left'>
                <h4 className='resume-m-c-right-title'>مهارت‌های نرم</h4>
                <div className='resume-m-c-left-content'>
                  <SoftSkill title={`کارتیمی`} />
                  <SoftSkill title={`انعطاف پذیری`} />
                  <SoftSkill title={`انتقادپذیری`} />
                  <SoftSkill title={`متعهد`} />
                  <SoftSkill title={`مسئولیت پذیری`} />
                  <SoftSkill title={`ارتباطات`} />
                  <SoftSkill title={`رشد و توسعه دانش`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
