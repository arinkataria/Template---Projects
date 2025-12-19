import React from 'react'
import './Section-last.css'
const SectionLast = () => {
  return (
    <div>
      <div className="last">
        <div className="last-one">
          <h5>who's online</h5>
          <hr />
          <p style={{color:'gray'}}>there are no users online</p>
        </div>
        <div className="last-two">
          <h5>Recent Replies</h5>
          <hr />
          <div className="two-col">
            <div className="two-content">
              Uniquely pontificate standards compliant <span style={{color:'gray'}}> 9 years, 3 months ago</span>
            </div>
            <div className="two-content">
              Uniquely pontificate standards compliant <span style={{color:'gray'}}> 9 years, 3 months ago</span>
            </div>
            <div className="two-content">
              Uniquely pontificate standards compliant <span style={{color:'gray'}}> 9 years, 3 months ago</span>
            </div>
          </div>

        </div>
        <div className="last-three">
        <h5>Recent Topics</h5>
        <hr />
          <div className="two-col">
            <div className="two-content">
              Uniquely pontificate standards compliant <span style={{color:'gray'}}> 9 years, 3 months ago</span>
            </div>
            <div className="two-content">
              Uniquely pontificate standards compliant <span style={{color:'gray'}}> 9 years, 3 months ago</span>
            </div>
            <div className="two-content">
              Uniquely pontificate standards compliant <span style={{color:'gray'}}> 9 years, 3 months ago</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionLast
