import React from 'react'
import Album from '../assets/img/covers.jpg'


function Description() {
  return (
    <div className='description'>
      <div className='section'>
        <h2>Discover new music</h2>
        <div className='icons'>

        </div>
        <p>By joining you can benefiit by listening to the
          latest albums released.
        </p>
      </div>
      <div className='album'>
        <img src={Album} className='album-img' />
      </div>
      
      
    </div>
  )
}

export default Description
