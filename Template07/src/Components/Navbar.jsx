import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import SignIn from '../screens/SignIn'
const Navbar = () => {

  
  return (
    <>
     <nav>
        <div className="left">
            <h1>Freepik</h1>
        </div>
        <div className="mid">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Mentor</a>
            <a href="#">Group</a>
            <a href="#">Testimonial</a>
            <a href="#">Docs</a>
        </div>
        <div className="right">
            <NavLink to={'/signin'}><button >Sign In</button></NavLink>
            <NavLink to={'/signup'}><button>Sign Up</button></NavLink>
        </div>
     </nav> 
    </>
  )
}

export default Navbar
