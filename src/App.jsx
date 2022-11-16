import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

import './App.css'
import LogoMenu from './components/LogoMenu'
import Hero from './views/Hero'
import Description from './views/Description'
import Footer from './views/Footer'
import Contact from './views/Contact'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Hero/>} />
        <Route path='/description' element ={<Description/>} />
        <Route path='/contact' element ={<Contact/>} />
      </Routes>
      
        
    </div>
  )
}

export default App
