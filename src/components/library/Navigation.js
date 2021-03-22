import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation container anim-fadeIn-03s">

<div className="nav">
      <div className="nav-links-container">
        <Link href="#" className="nav-links">Home</Link>
        <Link href="#" className="nav-links">Link1</Link>
        <Link href="#" className="nav-links">Link2</Link>
        <Link href="#" className="nav-links">Link3</Link>
      </div>
      <div className="nav-links-container">
        <input type="text" className="br5px" />
        <button className="btn btn-red">Search</button>
      </div>
    </div>
            
        </div>
    )
}
export default Navigation
