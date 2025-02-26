import React from 'react'
import NavBar from './components/NavBar'
import "./globals.css"

function page() {
  return (
    <>
    <div className=''>
      <NavBar />
      <div className="first-page">
        <h1>Mortgages</h1>
        <h1>made simple</h1>
      </div>
    </div>
    </>
  )
}

export default page