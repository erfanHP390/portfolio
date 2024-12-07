import React from 'react'
import "./Contact.css"
import { Helmet } from 'react-helmet';


import ContactBox from '../../Components/ContactBox/ContactBox'
import FormContact from '../../Components/FormContact/FormContact'

export default function Contact() {
  return (
    <>
    <Helmet>
    <title>تماس با من</title>
      </Helmet>  
    <section className='contact-container'>
      <div>
        <div className="container  contact">
          <div className="contact-header">
          <h2 className='about-me-title fix-contact'>تماس با من</h2>
          <div className="contact-h-content">
            <div className="contact-c-h-right">
              <ContactBox style={`contact-box  pink`}  img={`./images/contact/tel.png`}  title={`تلفن`}  subtitle={`098 996 293 9286`}  />
              <ContactBox style={`contact-box  blue-con`}  img={`./images/contact/mail.png`}  title={`ایمیل`}  subtitle={`e.hoseeini@yahoo.com`}  subtitle2={`erfanhosseini676@yahoo.com`}  />
              <ContactBox style={`contact-box  purple-con`}  img={`./images/contact/map.png`}  title={`آدرس`}  subtitle={`ایران ، خراسان رضوی ، مشهد`}  />
            </div>
            <div className="contact-c-h-left">
              <div className="form-left">
                <h3 className="form-left-title">
                  <span className="form-left-t-text">
                  من همیشه برای بحث در مورد
                  </span>
                  <br />
                  <span className="form-left-t-subtitle">
                  محصول، طراحی و یا هرگونه همکاری آمادم!
                  </span>
                </h3>
                <FormContact />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}
