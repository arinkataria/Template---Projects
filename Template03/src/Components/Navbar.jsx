import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="left">
          <Link className="lnk"  to={"/"}>Start Bootstrap</Link>
        </div>
        <div className="right">
          <NavLink className='nl' to={"/"}>Home</NavLink>
          <NavLink className='nl' to={"/about"}>About</NavLink>
          <NavLink className='nl' to={"/contact"}>Contact</NavLink>
          <NavLink className='nl' to={"/pricing"}>Pricing</NavLink>
          <NavLink className='nl' to={"/faq"}>FAQ</NavLink>
          <NavLink className='nl' to={"/blog"}>
            Blog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NavLink>
          
          <NavLink className='nl' to={"/portfolio"}>
            Portfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NavLink>
          <div className="portfolio"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
