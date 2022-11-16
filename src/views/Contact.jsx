import React from 'react'
import Form from '../components/Form'
import LogoMenu from '../components/LogoMenu'
import Footer from './Footer'

function Contact() {
  return (
    <div className='contact-main'>
      <LogoMenu/>
      <div className="contact">
      <div className='join'>
        <span>Join the </span><span className='join-color'>fun.</span>
      </div>
      <Form/>      
      </div>
      <Footer/>
      
    </div>
  )
}

export default Contact
