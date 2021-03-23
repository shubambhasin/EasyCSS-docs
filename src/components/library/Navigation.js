import React from 'react'
import { Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Navigation = () => {
    return (
        <div className="navigation container anim-fadeIn-03s">

<h1 className="h1 mtb1-rem">Navigation</h1>

<h3 className="h3 mtb1-rem">1. Navbar with links and search</h3>
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
            
    <SyntaxHighlighter
  language="css"
  style={dracula}
>{`
<div class="nav">
  <div class="nav-links-container">
    <a href="#" class="nav-links">Home</a>
    <a href="#" class="nav-links">Link1</a>
    <a href="#" class="nav-links">Link2</a>
    <a href="#" class="nav-links">Link3</a>
  </div>
  <div class="nav-links-container">
    <input type="text" class="br5px" />
    <button class="btn btn-red">Search</button>
  </div>
</div>`}</SyntaxHighlighter>

        </div>
    )
}
export default Navigation
