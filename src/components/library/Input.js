import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Input = () => {
  return (
    <div className="input-page container">
      <h1>Inputs</h1>
      <p>Note: Inputs by default have outline ,border as none.</p>

      <h3 className="mtb1-rem">1. Simple inputs</h3>
      <h3 className="h3 mtb1-rem">Email input</h3>
      <input className="input" type="email" placeholder="Email..." />
      <br />
      <h3 className="h3 mtb1-rem">Text input</h3>
      <input className="input" type="text" placeholder="Enter here..." />
      <br />
      <h3 className="h3 mtb1-rem">Password input</h3>
      <input className="input" type="password" placeholder="Password" />

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{`<input class="input" type="email" placeholder="Email..." />
<br />
<h3 class="h3 mtb1-rem">Text input</h3>
<input class="input" type="text" placeholder="Enter here..." />
<br />
<h3 class="h3 mtb1-rem">Password input</h3>
<input class="input" type="password" placeholder="Password" />`}</SyntaxHighlighter>

      <h3 className="mtb1-rem">1. Not so simple inputs</h3>
      <h3 className="h3 mtb1-rem">Email input</h3>
      <input className="input input-red" type="email" placeholder="Email..." />
      <br />
      <h3 className="h3 mtb1-rem">Text input</h3>
      <input
        className="input input-green"
        type="text"
        placeholder="Enter here..."
      />
      <br />
      <h3 className="h3 mtb1-rem">Password input</h3>
      <input
        className="input input-blue"
        type="password"
        placeholder="Password"
      />

      
<SyntaxHighlighter
        language="css"
        style={dracula}
>{`<input class="input input-red" type="email" placeholder="Email..." />
<br />
<h3 class="h3 mtb1-rem">Text input</h3>
<input class="input input-green" type="text" placeholder="Enter here..." />
<br />
<h3 class="h3 mtb1-rem">Password input</h3>
<input class="input input-blue" type="password" placeholder="Password" />`}</SyntaxHighlighter>
    </div>
  );
};

export default Input;
