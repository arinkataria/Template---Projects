import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <>
     <div className="Card">
        <div className="crd">450*300</div>
        <h1>{props.tagline}</h1>
        <p>40$-50$</p>
        <button>Add to Cart</button>
     </div> 
    </>
  )
}

export default Card
