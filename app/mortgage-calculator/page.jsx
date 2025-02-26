"use client"
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import "./mor.css"

function page() {

    const [range,setRange] = useState()

  return (
    <div className="main">
        <NavBar />
        <div className="main-con">
            <h1>Mortgage calculator</h1>
            <span>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and <br/>private mortgage insurance (PMI).Get the whole picture and calculate your total monthly payment.</span>
            <div className="flex">
              <div className="flex-one">
                <p>Home price</p>
                <input type="text" placeholder='$' value={range}/>
              </div>
              <div className="flex-two">
                <p>Monthly payment</p>
                <h1>$677</h1>
              </div>
              <div className="flex-three">
                <button>Get pre-approved</button>
              </div>
            </div>
            <div className="inp">
                <input type="range" min="0" max="100" value="50" value={range} onChange={e => setRange(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default page