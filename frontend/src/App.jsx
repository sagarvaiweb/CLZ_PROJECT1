import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'

import Navbar from './Landing_Page/Navbar'
import Footer from './Landing_Page/Footer'
import HomePage from './Landing_Page/Home/HomePage'
import AboutPage from './Landing_Page/About/AboutPage'
import ServicesPage from './Landing_Page/Services/ServicesPage'
import SignUpPage from './Landing_Page/SignUp/SignUpPage'
import LoginPage from './Landing_Page/Login/LoginPage'
import SupportPage from './Landing_Page/Support/SupportPage'


function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/services' element={<ServicesPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/support' element={<SupportPage/>} />
     </Routes>
    <Footer/>
        
    </>
  )
}

export default App
