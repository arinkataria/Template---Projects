import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <div className="left">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="btns">
            <button className='btn'>SHOP NOW</button>
            <button className='black-white'>Category</button>
          </div>
          <p>Also Available On</p>
          <div className="links">
            <img src="/public/flipkart.png" alt="" />
            <img src="/public/amazon.png" alt="" />
          </div>
        </div>
        <div className="right">
          <img src="/public/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  )
}

export default App
