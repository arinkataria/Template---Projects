import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/public/brand_logo.png" alt="" />
        </div>
        <div className="center">
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
