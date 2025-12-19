import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="con-one">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you</p>
      </div>
      <div className="form">
        <input type="text" className="input-small" placeholder="Full Name" />
        <br />
        <input
          type="email"
          className="input-small"
          placeholder="Email Address"
        />
        <br />
        <input
          type="number"
          className="input-small"
          placeholder="Phone Number"
        />
        <br />
        <section className="msg">Message</section>
        <br />
        <button className="submit">Submit</button>
      </div>
      <div className="boxs">
        <div className="box1">
          <h1>Chat with us</h1>
          <p>Chat live with one of our support specialists.</p>
        </div>
        <div className="box2">
          <h1>Ask the community</h1>
          <p>Explore our community forums and communicate with other users.</p>
        </div>
        <div className="box3">
          <h1>Support center</h1>
          <p>Browse FAQ's and support articles to find solutions.</p>
        </div>
        <div className="box4">
          <h1>Call us</h1>
          <p>Call us during normal business hours at (555) 892-9403.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
