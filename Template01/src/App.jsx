import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mid-content">
          <div className="box">600*800</div>
          <div className="mid">
            <h1>Shop item template</h1>
            <p>$45.00 $40.00</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at dolorem quidem modi. Nam sequi consequatur
              obcaecati excepturi alias magni, accusamus eius blanditiis
              delectus ipsam minima ea iste laborum vero?
            </p>
            <div className="btn">
              <button>1</button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      <cards>
      <Card className='card' tagline='Fancy product'/>
      <Card className='card' tagline='Special Item'/>
      <Card className='card' tagline='Sale item'/>
      <Card className='card' tagline='popular item'/>

      </cards>
      </main>
    </>
  );
}

export default App;
