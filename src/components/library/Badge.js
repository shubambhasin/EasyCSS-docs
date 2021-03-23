import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";


import joe from "../images/joe.jpg";
const Badge = () => {
  return (
    <div className="badge container anim-fadeIn-03s">
      <h1 className="h1 mtb1-rem">I am badge !</h1>

      <h3 className="h3 mtb2-rem"> Round badge </h3>

      <div className="flex gap-1  b1pxgrey p1-rem f-wrap">
        <div className="badge-container">
          <img src={joe} className="badge-circle-lg" alt="badge" />
          <span className="badge-icon bg-red"> </span>
        </div>
        <div className="badge-container">
          <img src={joe} className="badge-circle-lg" alt="badge" />
          <span className="badge-icon bg-green"> </span>
        </div>
        <div className="badge-container">
          <img src={joe} className="badge-circle-lg" alt="badge" />
          <span className="badge-icon bg-blue"> </span>
        </div>
        <div className="badge-container">
          <img src={joe} className="badge-circle-lg" alt="badge" />
          <span className="badge-icon bg-orange"> </span>
        </div>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{`
<div class="badge-container">
    <img src={joe} class="badge-circle-lg" alt="badge" />
    <span class="badge-icon bg-red"> </span>
</div>
<div class="badge-container">
    <img src={joe} class="badge-circle-lg" alt="badge" />
    <span class="badge-icon bg-green"> </span>
</div>
<div class="badge-container">
    <img src={joe} class="badge-circle-lg" alt="badge" />
    <span class="badge-icon bg-blue"> </span>
</div>
<div class="badge-container">
    <img src={joe} class="badge-circle-lg" alt="badge" />
    <span class="badge-icon bg-orange"> </span>
</div>`}</SyntaxHighlighter>
    
    
    </div>
  );
};

export default Badge;
