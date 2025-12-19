import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Card from "./Components/Card";
import About from "./Screen/About";
import Home from "./Screen/Home";
import Contact from "./Screen/Contact";
import Pricing from "./Screen/Pricing";
function App() {
  return (
    <>
      <Navbar />
      
      <Routes >
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/> } />
        <Route path ="/contact" element={<Contact />}/>
        <Route path ="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
