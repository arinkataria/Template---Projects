import React from 'react'
import Card from '../Components/Card'
import './Home.css'
const Home = () => {
  return (
    <>
     <div className="image">
      <img fetchpriority="high" decoding="async" src="https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg" data-rel="https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-2006x960.jpg" width="100%" height="300" alt="Welcome to the community!" class="gp-post-image" itemprop="image" draggable="false"></img>
      <h1>Welcome to the community !</h1>
      <br />
      <div className="mid-two">
        <h4>Latest Activity</h4>
        <Card />
        <Card/>
        <Card/>
        <Card />
        <Card />

      </div>
     </div> 
    </>
  )
}

export default Home
