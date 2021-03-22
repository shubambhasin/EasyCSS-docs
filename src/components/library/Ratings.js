import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Ratings = () => {
  return (
    <div className="rating container">
      <h1>Ratings</h1>
      <p>
        We know how important is to give ratings to your Cards/ products etc
        etc. So we have implemented rating scheme in the most easy way...
      </p>
      <p>
        Just write the rating num e.g., <code> class = "star-5"</code> Thats it
        !! 😄😄
      </p>

      <h3 className="mt1-rem">For 5 ratings</h3>

      <div className="star-5 "></div>
      
      <SyntaxHighlighter
        language="css"
        style={dark}
      >{`<div class="star-5"></div>`}</SyntaxHighlighter>

      <hr style={{margin: "2rem 0 2rem 0"}}/>

      <h3 className="mt1-rem">For 4 ratings</h3>
      <div className="star-4 mb3-rem"></div>
      <SyntaxHighlighter
        language="css"
        style={dark}
      >{`<div class="star-4"></div>`}</SyntaxHighlighter>
            <hr style={{margin: "2rem 0 2rem 0"}}/>
      <h3 className="mt1-rem">For 3 ratings</h3>
      <div className="star-3  mb3-rem"></div>
      <SyntaxHighlighter
        language="css"
        style={dark}
      >{`<div class="star-3"></div>`}</SyntaxHighlighter>
            <hr style={{margin: "2rem 0 2rem 0"}}/>
      <h3 className="mt1-rem">For 2 ratings</h3>
      <div className="star-2  mb3-rem"></div>
      <SyntaxHighlighter
        language="css"
        style={dark}
      >{`<div class="star-2"></div>`}</SyntaxHighlighter>
            <hr style={{margin: "2rem 0 2rem 0"}}/>
      <h3 className="mt1-rem">For 1 ratings</h3>
      <div className="star-1  mb3-rem"></div>

      <SyntaxHighlighter language="css" style={dark}>
        {`<div class="star-1"></div>`}
      </SyntaxHighlighter>
    </div>
  );
};

export default Ratings;
