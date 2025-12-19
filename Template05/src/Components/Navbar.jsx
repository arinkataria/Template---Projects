import React from 'react'
import { Link, NavLink, Routes } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav>
      <div className="nav-left">
        <img src="https://buddy.ghostpool.com/wp-content/themes/buddy/lib/images/logo.png" width="108" height="25" alt="Buddy"></img>
      </div>
      <div className="nav-right">
        <NavLink className="nl" to={"/home"} >Home</NavLink>
        <NavLink className="nl ft" to={"/features"} >Features
        <div className="features">
          <Link to={"/galleries"} className='lik'>Galleries/Portfolios</Link>
          <Link className='lik'>ShortCodes</Link>
          <Link className='lik'>Styling</Link>
        </div>
        </NavLink>

        
        <NavLink className="nl pg" to={"/pages"} >Pages
        <div className="pages ">
          <Link className='lik'>Page with Left Sidebar</Link>
          <Link className='lik'>Page with Right Sidebar</Link>
          <Link className='lik'>Page with two Sidebar</Link>
          <Link className='lik'>Full width page</Link>
          <Link className='lik'>404 error page</Link>
          <Link className='lik'>Attachment page</Link>
          <Link className='lik'>Pasword Protected page</Link>
          <Link className='lik'>Blank page</Link>
          <Link className='lik'>Level 2 menu</Link>
        </div>
        </NavLink>
        <NavLink className="nl bp" to={"/buddypress"} >BuddyPress
        <div className="buddypress">
          <Link className='lik'>Activity</Link>
          <Link className='lik'>Members</Link>
          <Link className='lik'>Groups</Link>
          <Link className='lik'>Forums</Link>
        </div>
        </NavLink>
        <NavLink className="nl" to={"/blog"} >Blog</NavLink>
        <NavLink className="nl"  to={"/contact"} >Contact</NavLink>
        <NavLink className="nl btn-in"  to={"/contact"} >Login</NavLink>
        <NavLink className="btn-up nl"  to={"/contact"} >Sign Up</NavLink>
        
      </div>
    </nav>
    </>
  )
}

export default Navbar
