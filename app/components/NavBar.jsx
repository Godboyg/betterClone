import React from 'react'
import "./NavBar.css"
import 'remixicon/fonts/remixicon.css'

function NavBar() {
  return (
    <>
    <div className="nav">
        <div className="nav-left">
            <h1>Better</h1>
            <div className="nav-leftCon">
                <p>Buy</p>
                <p>Refinance</p>
                <p>HELOC</p>
                <p>Rates</p>
                <p>Better+</p>
            </div>
        </div>
        <div className="nav-right">
            <div className="nav-right-icon">
              <i class="ri-phone-fill"></i>
            </div> 
            <div className="nav-right-icon-sec">
              <i className="ri-menu-line"></i>
            </div>
            <div className="call-me">
              Call us anytime at 415-523-8837
            </div>
            <p>Sign in</p>
        </div>
    </div>
    </>
  )
}

export default NavBar