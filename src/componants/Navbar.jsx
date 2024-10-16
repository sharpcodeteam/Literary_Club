import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

export default function Navbar() {
 return (
   <div className='navbar'>
     <div className='logo'>
      <img src={logo} alt="" />
       <h1>Literary Club</h1>
     </div>
     <div className='links'>
       <Link to="/signin" ><button className='signIn'>Sign In</button></Link>
     </div>
   </div>
 )
}