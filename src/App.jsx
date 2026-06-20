import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Services from './Hospital/Services'
import About from './Hospital/About'
import Home from './Hospital/Home'
import Doctor from './Hospital/Doctor'
import Patient from './Hospital/Patient'
import Appointment from './Hospital/Appointment'
import Contact from './Hospital/Contact'
import Profile from './Hospital/Profile'
import Billing from './Hospital/Billing'

export default function App() {
  return (
    <BrowserRouter>
    <div className="header">
      <Link to ={"/"}>Home</Link>
      <Link to ={"/about"}>About</Link>
      <Link to ={"/services"}>Services</Link>
      <Link to ={"/contact"}>Contact</Link>
      <Link to ={"/profile"}>Profile</Link>
      <Link to ={"/billing"}>Billing</Link>
    </div>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path = "/about" element ={<About/>}/>
      <Route path= "/services" element ={<Services/>}>
      <Route path = "doctor" element={<Doctor/>}/>
      <Route path ="patient" element={<Patient/>}/>
      <Route path ="appointment" element={<Appointment/>}/>
      </Route>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/billing" element={<Billing/>}/>
    </Routes>
    </BrowserRouter>   
    
  )
}
