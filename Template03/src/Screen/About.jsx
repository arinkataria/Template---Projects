import React from "react";
import { Link } from "react-router-dom";
import Circle from "../Components/Circle";
import "./About.css";
const About = () => {
  return (
    < >
      <div  className="about-one">
        <h1>Our mission is to make building websites easier for everyone.</h1>
        <p>
          Start Bootstrap was built on the idea that quality, functional website
          templates and themes should be available to everyone. Use our open
          source, free products, or support us by purchasing one of our premium
          products or services
        </p>
        <center>
          <button>
            <a href="#about-two" className="about-btn">
              Read our Story{" "}
            </a>
          </button>{" "}
        </center>
      </div>
      <div className="about-two" id="about-two">
        <div className="first">
          <div className="block">600*400</div>
          <div className="content">
            <h1>Our founding</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
          </div>
        </div>
        <div className="second">
          <div className="content">
            <h1>Growth & beyond</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
          </div>
          <div className="block">600*400</div>
        </div>
      </div>
      <div className="about-three">
        <div className="div1">
         <h1>Our team</h1>
          <p>Dedicated to quality and your success</p> 
        </div>
        <div className="circles">
          <Circle para='Founder & CEO' head='Ibbie Eckart'/>
          <Circle para='CFO' head='Arden Vasek'/>
          <Circle head='Toribio Nerthus' para='Operations Manager' />
          <Circle  head='Malvina Cilla' para='CTO'/>
        </div>
      </div>
    </>
  );
};

export default About;
