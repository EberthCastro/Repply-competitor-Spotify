import { useState } from 'react'

import './App.css'
import LogoMenu from './components/LogoMenu'
import Hero from './views/Hero'
import Description from './views/Description'
import Footer from './views/Footer'
import Contact from './views/Contact'

function App() {
  

  return (
    <div className="App">
      <LogoMenu/>
      <Hero/> 
      <Description/> 
      <Footer/> 
      <Contact/> 
      <Footer/>   
    </div>
  )
}

export default App
