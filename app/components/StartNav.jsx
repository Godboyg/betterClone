import React from 'react'
import 'remixicon/fonts/remixicon.css'
import "./StartNav.css"

function StartNav() {
  return (
    <>
    <div className="start-nav">
        <div className="start-box">
            <h2>Better</h2>
            <h3>Mortgage</h3>
        </div>
        <div className="start-box-icon">
           <i class="ri-phone-fill"></i>
        </div>
    </div>
    <div className="start-nav-img">
      <img src="https://images.pexels.com/photos/2061525/pexels-photo-2061525.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
    </>
  )
}

export default StartNav