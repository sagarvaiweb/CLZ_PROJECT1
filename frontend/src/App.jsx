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
import ShowPage from './Landing_Page/Show/ShowPage'
import NewListingPage from './Landing_Page/NewListing/NewListingPage'
import EditPage from './Landing_Page/Edit/EditPage'


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
      <Route path='/listings/:id' element={<ShowPage/>} />
      <Route path='/newlisting'  element={<NewListingPage/>}/>
      <Route path='/listings/:id/edit' element={<EditPage/>} />
     </Routes>
    <Footer/>
        
    </>
  )
}

export default App
