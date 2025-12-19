import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
            <div className="logo">
                <button className='blogo'>B</button>
                <button className='domain'>Brooklyn</button>
            </div>
        </div>
        <div className="nav-right">
            <a className='bg-purple' style={{color:'white'}} href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#portfolio">Portfolio</a>
            <a className='bg-purple' style={{color:'white',fontWeight:600}} href="#contact">Contact</a>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar
