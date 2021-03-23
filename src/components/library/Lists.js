import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Lists = () => {
  return (
    <div className="list container anim-fadeIn-03s">
      <h1 className="h1 mtb1-rem">Lists</h1>

      <h3 className="h3 mtb1-rem">Unordered list (stacked)</h3>

      <ul className="list-item-group">
        <li className="list-item">List item 1</li>
        <li className="list-item">List item 2</li>
        <li className="list-item">List item 3</li>
        <li className="list-item">List item 4</li>
      </ul>

      <SyntaxHighlighter
        language="css"
        style={dracula}
>{`<ul class="list-item-group">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
    <li class="list-item">List item 4</li>
</ul>`}</SyntaxHighlighter>

      <h3 className="h3 mtb1-rem">Unordered list without bullets (stacked)</h3>

      <ul className="list-item-group no-style">
        <li className="list-item">List item 1</li>
        <li className="list-item">List item 2</li>
        <li className="list-item">List item 3</li>
        <li className="list-item">List item 4</li>
      </ul>

      <SyntaxHighlighter
        language="css"
        style={dracula}
>{`<ul class="list-item-group no-style">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
    <li class="list-item">List item 4</li>
</ul>`}</SyntaxHighlighter>


      <hr className="mtb2-rem" />

      <h3 className="h3 mtb1-rem">Ordered list (stacked)</h3>
      <ol className="list-item-group">
        <li className="list-item">List item 1</li>
        <li className="list-item">List item 2</li>
        <li className="list-item">List item 3</li>
        <li className="list-item">List item 4</li>
      </ol>

      <SyntaxHighlighter
        language="css"
        style={dracula}
>{`<ol class="list-item-group">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List item 3</li>
    <li class="list-item">List item 4</li>
</ol>`}</SyntaxHighlighter>

<h3 className="h3 mtb1-rem">Unordered list (not stacked)</h3>

<ul className="list-item-group no-style no-list-pad">
  <li className="list-item-gap">List item 1</li>
  <li className="list-item-gap">List item 2</li>
  <li className="list-item-gap">List item 3</li>
  <li className="list-item-gap">List item 4</li>
</ul>

<SyntaxHighlighter
  language="css"
  style={dracula}
>{`<ul class="list-item-group no-style no-list-pad">
    <li class="list-item">List item 1</li>
    <li class="list-item">List item 2</li>
    <li class="list-item">List it
    <li class="list-item">List item 4</li>
</ul>`}</SyntaxHighlighter>

<h3 className="h3 mtb1-rem">Unordered list (horizontal)</h3>

<ul className="list-horizontal">
  <li className="list-item-h">List item 1</li>
  <li className="list-item-h">List item 2</li>
  <li className="list-item-h">List item 3</li>
  <li className="list-item-h">List item 4</li>
</ul>

<SyntaxHighlighter
  language="css"
  style={dracula}
>{`<ul class="list-horizontal">
    <li class="list-item-h">List item 1</li>
    <li class="list-item-h">List item 2</li>
    <li class="list-item-h">List item 3</li>
    <li class="list-item-h">List item 4</li>
</ul>`}</SyntaxHighlighter>


    </div>
  );
};

export default Lists;
