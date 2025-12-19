import React from 'react'
import './Cirlce.css'
const Circle = (props) => {
  return (
    <div className='flex'>
      <div className="circle">150*150</div>
      <h1>{props.head}</h1>
      <p>{props.para}</p>
    </div>
  )
}

export default Circle
