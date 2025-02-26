import React from 'react'
import NavBar from '../components/NavBar'
import "./about.css"

function page() {
  return (
    <>
    <div className="">
        <NavBar />
        <div className="about-con">
            <div className="about-con-text">
              <h3>Our Mission</h3>
              <p>We're making homeownership simpler, faster — <br/> and most importantly, more accessible for all <br/> Americans.</p>
            </div>
            <div className="about">
              <div className="about-left">
                  <h2>The status quo is broken</h2>
                  <span>The traditional processes around homeownership are opaque <br/> and stressful. Fees aren’t transparent and some are simply <br/> outrageous in size. Traditional mortgage lending is rife with <br/> unnecessary fees and slow, painful processes. It’s a system set <br/> up to benefit insiders — not you. Better.com CEO, Vishal Garg, <br/> set out to change that.</span>
                  <div className="flex-three">
                    <button>Read Vishal's Story</button>
                  </div>
              </div>
              <div className="about-right">
                <img src="https://images.pexels.com/photos/30419561/pexels-photo-30419561/free-photo-of-snowy-night-street-scene-in-berlin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page