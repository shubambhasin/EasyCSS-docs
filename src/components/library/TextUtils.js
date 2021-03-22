import React from "react";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const TextUtils = () => {
  return (
    <div className="text-utils container anim-fadeIn-03s">
      <h1> Typography </h1>
      <p>
        By default EaseCSS comes wth margin amd padding = 0, So that you can
        design the elements the way they want to{" "}
      </p>

      <h1 className="h1">h1- This is a Typography elements check</h1>
      <h2 className="h2">h2- This is a Typography elements check</h2>
      <h3 className="h3">h3- This is a Typography elements check</h3>
      <h4 className="h4">h4- This is a Typography elements check</h4>
      <h5 className="h5">h5- This is a Typography elements check</h5>
      <h6 className="h6">h6- This is a Typography elements check</h6>
      <SyntaxHighlighter language="css" style={dracula}>
        {`<p class="h1">h1- This is a Typography elements check</p>
<p class="h2">h2- This is a Typography elements check</p>
<p class="h3">h3- This is a Typography elements check</p>
<p class="h4">h4- This is a Typography elements check</p>
<p class="h5">h5- This is a Typography elements check</p>
<p class="h6">h6- This is a Typography elements check</p>`}
      </SyntaxHighlighter>

      <h2 className="h2">1. Bold text</h2>

      <p className="bold mtb1-rem">This is bold text !</p>
      <SyntaxHighlighter language="css" style={dracula}>
        {` <p className="bold">This is bold text !</p>`}
      </SyntaxHighlighter>
      <h2 className="h2">2. Bolder text</h2>

      <p className="bolder mtb1-rem">This is bolder text !</p>
      <SyntaxHighlighter language="css" style={dracula}>
        {` <p className="bold">This is bolder text !</p>`}
      </SyntaxHighlighter>

      <h2 className="h2">3. Light text</h2>
      <p className="light mtb1-rem">This is light text !</p>
      <SyntaxHighlighter language="css" style={dracula}>
        {` <p className="light">This is light text !</p>`}
      </SyntaxHighlighter>

      <h2 className="h2">4. Lighter text</h2>
      <p className="light mtb1-rem">This is lighter text !</p>
      <SyntaxHighlighter language="css" style={dracula}>
        {` <p className="light">This is lighter text !</p>`}
      </SyntaxHighlighter>
    </div>
  );
};

export default TextUtils;
