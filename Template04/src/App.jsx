import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
const btnref = useRef()
const sideref = useRef()
  function drpclick(){
    btnref.current.style.display = "Block"
  }
  function toggle(){
sideref.current.style.display = "none"
  }
  return (
    <>
      <div className="bars">
        <div ref={sideref} className="sidebar">
          <h3>Start Bootstrap</h3>
          <h4>Dashboard</h4>
          <h4>Shortcuts</h4>
          <h4>Overview</h4>
          <h4>Events</h4>
          <h4>Profile</h4>
          <h4>Status</h4>
        </div>
        <div className="main">
          <div className="navbar">
            <div className="left">
              <button onClick={toggle}>Toggle Menu</button>
            </div>
            <div className="right">
              <h4>Home</h4>
              <h4>Link</h4>
              <h4  onClick={drpclick}>Dropdown</h4>
            </div>
          </div>
          <div ref={btnref} className="drpdown">
            <h5>Action</h5>
            <h5>Another action</h5>
            <hr />
            <h5>Something Else here</h5>
          </div>
          <h1>Simple Sidebar</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change. Make sure to
            keep all page content within the #page-content-wrapper . The top
            navbar is optional, and just for demonstration. Just create an
            element with the #sidebarToggle ID which will toggle the menu when
            clicked.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
