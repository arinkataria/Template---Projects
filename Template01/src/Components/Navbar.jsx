import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="left">
          <div className="logo">Start Bootstrap</div>
          <div className="left-content">
            <Link className="lnk">Home</Link>
            <Link className="lnk">About</Link>
            <Link className="lnk shop">Shop</Link>
          </div>
          <div className="dropdown">
            <span>All Products</span>
            <hr />
            <span>Popular Items</span>
            <span>New Arrivals</span>
          </div>
        </div>
        <div className="right">
          <button>
            Cart
          </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M4 5L20 5"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
