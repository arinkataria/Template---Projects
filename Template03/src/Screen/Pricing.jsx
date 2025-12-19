import React from 'react'
import List from '../Components/List'
import './Pricing.css'
const Pricing = () => {
  return (
    <>
     <div className="price-one">
        <h1>Pay as you Grow</h1>
        <p>With our no hassle pricing plans</p>
     </div>
     <div className="lists">
        <List/>
        <List/>
        <List/>
     </div>
    </>
  )
}

export default Pricing
