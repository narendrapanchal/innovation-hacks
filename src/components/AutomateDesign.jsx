import React from 'react'
import "../styles/automatedesign.css"
function AutomateDesign() {
  return (
    <div className='automate-design'>
      <div className='header'>
        <div>
          <img className='logo' src="./images/automate-design/automate-design.png" />
          <h2>Automate Design</h2>
        </div>
        <div>
          <img className='share' src="./images/automate-design/share.png"/>
          <span className='span-share'>Share</span>
          <button className='download'><img src="./images/automate-design/download.png"/>Download</button>
        </div>
      </div>
      <div className='customer-registration'>
        <img src="./images/automate-design/customer-registration.png"/>
        <div>
          <h3>Customer Registration</h3>
          <p>Automation Steps</p>
        </div>
      </div>
    </div>
  )
}

export default AutomateDesign
