import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div>
       <div className="card">
        <img decoding="async" loading="lazy" src="//www.gravatar.com/avatar/adc22c98c2a6d2bbbb2966b469965c3a?s=58&amp;r=g&amp;d=mm" class="avatar user-13-avatar avatar-58 photo" width="65" height="75" alt="Profile picture of Michellie Jones"></img>
        <div className="col">
            <h4>Michellie Jones posted an update in the group The Social Network</h4>
            <span style={{color:"gray"}}>9 years,9 months ago</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore</p>
        </div>
       </div> 
    </div>
  )
}

export default Card
