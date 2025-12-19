import React from "react";
import './Galleries.css'
import Box from "../../Components/Box";
const Galleries = () => {
  return (

    <div className="gall" style={{ padding: "20px" }}>
      <h1>Galleries / Portfolios</h1>
      <p className="para">
        You can create galleries and portfolios using the powerful <code>[posts]</code> 
        shortcode that comes with Buddy. Below are a few examples of what you can do 
        with the shortcode, but it is capable of doing much more. 
        For all the shortcode options <a className="anchor" href="#">click here</a>.
      </p>
      <div className="gall-two">
        <h1>Gallery Example 1</h1>
        <div className="boxes">
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
        </div>
      </div>

    </div>
  );
};

export default Galleries;
