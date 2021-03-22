import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Grid = () => {
  return (
    <div className="grid container anim-fadeIn-03s">
      <h1 className="h1">🌟 Simplified Grids 🌟</h1>
      <p>
        CSS grids are one the most important layout scheme. When using then it
        can be a little tedious. Dont worry we simplified it 😄😄
      </p>

      <h4 className="h2 mtb2-rem">Grid with 6 columns</h4>
      <div className="grid g-col-6 gap-1">
        <div className="grid-item bg-red">Hello</div>
        <div className="grid-item bg-green">You</div>
        <div className="grid-item bg-blue">There !</div>
        <div className="grid-item bg-orange">You</div>
        <div className="grid-item bg-yellow">Are</div>
        <div className="grid-item bg-black f-white">Awesome !</div>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{`<div class="grid g-col-6 gap-1">
      <div class="grid-item bg-red">Hello</div>
      <div class="grid-item bg-green">You</div>
      <div class="grid-item bg-blue">There !</div>
      <div class="grid-item bg-red">You</div>
      <div class="grid-item bg-green">Are</div>
      <div class="grid-item bg-blue">Awesome !</div>
</div>`}</SyntaxHighlighter>



      <h4 className="h2 mtb2-rem">Grid with 3 columns</h4>
      <div className="grid g-col-3 gap-1">
        <div className="grid-item bg-red">Hello</div>
        <div className="grid-item bg-green">You</div>
        <div className="grid-item bg-blue">There !</div>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{` <div class="grid g-col-2 gap-1">
      <div class="grid-item bg-red">Hello</div>
      <div class="grid-item bg-green">You</div>
 </div>`}</SyntaxHighlighter>

      <h4 className="h2 mtb2-rem">Grid with 2 columns</h4>
      <div className="grid g-col-2 gap-1">
        <div className="grid-item bg-red">Hello</div>
        <div className="grid-item bg-green">Awesome !</div>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{` <div class="grid g-col-2 gap-1">
      <div class="grid-item bg-red">Hello</div>
      <div class="grid-item bg-green">Awesome</div>
 </div>`}</SyntaxHighlighter>
    </div>
  );
};

export default Grid;
