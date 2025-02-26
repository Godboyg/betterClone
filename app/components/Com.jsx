import React from 'react'
import "./Com.css"

function Com({p, img}) {
  return (
    <>
    <div className="com">
        <div className="left">
            <img src={img} alt="" />
        </div>
        <div className="right">
            <p>{p}</p>
        </div>
    </div>
    </>
  )
}

export default Com