import React from "react";
import "./signin.css";
const SignIn = () => {
  return (
    <div className="signin">
      <h1>E-Learning</h1>
      <div className="flex">
        <button>Sign In</button>
        <button>Sign In</button>
      </div>

      <center>OR</center>
      <input type="email" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button className="si">Sign In</button>
    </div>
  );
};

export default SignIn;
