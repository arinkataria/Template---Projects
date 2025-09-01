import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="one-sec">
        <h1>Welcome to Blog Home!</h1>
        <p>A Bootstrap 5 starter layout for your next blog homepage</p>
      </section>
      <section className="two-sec">
        <div className="bb">
          <div className="gray-bb"></div>
          <p>January 1,2023</p>
          <h1>Featured Post Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
          </p>
          <button>Read More</button>
        </div>
         <div class="card">
    <div class="card-header">Search</div>
    <div class="card-body">
      <input type="text" placeholder="Enter search term..." class="search-input" />
      <button class="btn">Go!</button>
    </div>
    </div>
  

  
  <div class="card">
    <div class="card-header">Categories</div>
    <div class="card-body categories">
      <a href="#">Web Design</a>
      <a href="#">JavaScript</a>
      <a href="#">HTML</a>
      <a href="#">CSS</a>
      <a href="#">Freebies</a>
      <a href="#">Tutorials</a>
    </div>
  </div>

  
  <div class="card">
    <div class="card-header">Side Widget</div>
    <div class="card-body">
      <p>
        You can put anything you want inside of these side widgets. 
        They are easy to use, and feature the Bootstrap 5 card component!
      </p>
    </div>
  </div>
      </section>
    </>
  );
}

export default App;
