import React from 'react'
import Girl from '../assets/img/girl.png'

function Hero() {
  return (
    <div className='hero'>
      <div className='banner'>
        <img src={Girl} className='girl' />
      </div>
      <div className='cta'>
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand song with a single click</p>
        <button className='button-cta'>Join Now</button>
      </div>
      
    </div>
  )
}

export default Hero
