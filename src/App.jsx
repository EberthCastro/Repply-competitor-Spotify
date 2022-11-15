import { useState } from 'react'
import './App.css'
import LogoMenu from './components/LogoMenu'
import Hero from './views/Hero'
import Description from './views/Description'

function App() {
  

  return (
    <div className="App">
      <LogoMenu/>
      <Hero/> 
      <Description/>     
    </div>
  )
}

export default App
