import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Buttons = () => {
  return (
    <div id="primary-button" className="buttons container anim-fadeIn-03s">
      <div className="btn-main">
        <h1>Buttons</h1>
        <p>
          Use EaseCSSs' custom button styles for actions in forms, dialogs, and
          more with support for multiple sizes, states, and more.
        </p>
        <p>
          <strong className=" mtb1-rem">
            Make any div, span etc etc a button by using simple meaningful class
            names from EaseCSS
          </strong>
        </p>
      </div>

      <div className="btn-types">
        <h2 className="h2  mtb2-rem">Primary button</h2>

        <button className="btn btn-prim">Primary Button</button>
        <br />

        <span className="mb3-rem"></span>
        <SyntaxHighlighter
          language="css"
          style={dracula}
        >{`<button className="btn btn-prim">Primary Button</button>`}</SyntaxHighlighter>

        <span id="secondary-button "></span>
        <h2 className="h2 mtb2-rem">Secondary button</h2>
        <button className="btn btn-sec ">Secondary Button</button>

        <SyntaxHighlighter
          language="css"
          style={dracula}
        >{`<button className="btn btn-sec ">Secondary Button</button>
      `}</SyntaxHighlighter>
      </div>

      <div className="btn-with-types">
        <h2 className="h2  mtb2-rem">Buttons, size wise</h2>
        <div className="btn-container p1-rem">
          <button className="btn btn-xsm anim-fadeIn-4 s">x-small</button>
          <button className="btn btn-sm m1-rem">small</button>
          <button className="btn btn-md">medium</button>
          <button className="btn btn-lg m1-rem">large</button>
          <button className="btn btn-xlg">x-large</button>
          <button className="btn btn-xxlg m1-rem">xx-large</button>
          <button className="btn btn-xxxlg ">xxx-large</button>
        </div>

        <SyntaxHighlighter
          language="css"
          style={dracula}
        >{`    <button class="btn btn-xsm">x-small</button>
      <button class="btn btn-sm">small</button>
      <button class="btn btn-md">medium</button>
      <button class="btn btn-lg">large</button>
      <button class="btn btn-xlg">x-large</button>
      <button class="btn btn-xxlg">xx-large</button>
      <button class="btn btn-xxxlg ">xxx-large</button>
      `}</SyntaxHighlighter>
      </div>
      <div className="btn-by-color">
        <h2 className="h2  mtb2-rem">Buttons according to Vibe</h2>

        <div className="btn-with-filled mtb2-rem">
          <div className="btn-container p1-rem">
            <button className="btn btn-red m1-rem">Red</button>
            <button className="btn btn-blue">Blue</button>
            <button className="btn btn-yellow m1-rem">Yellow</button>
            <button className="btn btn-orange">Orange</button>
            <button className="btn btn-green m1-rem">Green</button>
            <button className="btn btn-black">Black</button>
          </div>

          <SyntaxHighlighter
          language="css"
          style={dracula}
>{`<button class="btn btn-red">Red</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-yellow">Yellow</button>
<button class="btn btn-orange">Orange</button>
<button class="btn btn-green">Green</button>
<button class="btn btn-black">Black</button>`}</SyntaxHighlighter>

         
        </div>

        <div className="btn-with-outline">
          <h2 className="h2  mtb2-rem">Button Outline</h2>

          <div className="btn-container m1-rem">
            <button className="btn btn-outline-red m1-rem">Button</button>
            <button className="btn btn-outline-blue">Button</button>
            <button className="btn btn-outline-yellow m1-rem">Button</button>
            <button className="btn btn-outline-orange">Button</button>
            <button className="btn btn-outline-greenm1-rem">Button</button>
            <button className="btn btn-outline-black">Button</button>
          </div>

          <SyntaxHighlighter
          language="css"
          style={dracula}
>{`<button class="btn btn-outline-red">Button</button>
<button class="btn btn-outline-blue">Button</button>
<button class="btn btn-outline-yellow">Button</button>
<button class="btn btn-outline-orange">Button</button>
<button class="btn btn-outline-green">Button</button>
<button class="btn btn-outline-black">Button</button>`}</SyntaxHighlighter>


         
        </div>
        <div>
          <h2 className="h2  mtb2-rem">Button with icon</h2>
        </div>
      </div>
    </div>
  );
};
