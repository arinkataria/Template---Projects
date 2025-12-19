import React from "react";
import './List.css'
const List = () => {
  return (
    <div className="list">
      <div className="price">
        <h1>Free</h1>
        <div className="big">
          $0
        </div>
      </div>
          <span>/ mo.</span>
      <br />
      <p>1 users</p>
      <p>5GB users</p>
      <p>Unlimited Public projects</p>
      <p>Community access</p>
      <p>Unlimited Private projects</p>
      <p>Dedicated support</p>
      <p>free linked domain</p>
      <p>Monthly status reports</p>
      <button className="btn">Choose Plan</button>
    </div>
  );
};

export default List;
