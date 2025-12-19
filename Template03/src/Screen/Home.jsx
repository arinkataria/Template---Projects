import React from 'react'
import './Home.css'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className="sec-one">
        <div className="one">
          <h1>A Bootstrap 5 template for modern businesses</h1>
          <p>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit!
          </p>
          <div className="btns">
            <button className="btn">
              <Link className="link gs" to="/about">
                Get Started
              </Link>
            </button>
            <button className="btn">
              <Link className="link lm" to="/">
                Learn More
              </Link>
            </button>
          </div>
        </div>
        <div className="two">600*450</div>
      </div>
      <div className="sec-two">
        <div className="lorem">A better way to start building.</div>
        <div className="first-two-div">
          <Card />
          <br />
           <Card />
        </div>
        <div className="second-two-div">
          <Card />
           <br />
          <Card />
        </div>
      </div>
      <div className="sec-three">
        <p>"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</p>
        <br />
        <p> ---- by  Tom Ato / CEO, Pomodoro</p>
      </div>
    </div>
  )
}

export default Home
