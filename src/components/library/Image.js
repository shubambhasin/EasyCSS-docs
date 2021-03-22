import React from "react";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Image = () => {
  return (
    <div className="images container">
      <h1>Images</h1>
      <p>
        We know how important images are for your project, so we have added wide
        varities of images ratios
      </p>

      <h3 className="mt1-rem">1. Responsive images</h3>
      <p>Images that fit the container they are in 😄</p>

      <div className="image-container">
        <img
          src="https://semantic-ui.com/images/avatar/large/jenny.jpg"
          alt="responsive-img"
          className="responsive"
        />
      </div>

      <p>Code 👇</p>
      <SyntaxHighlighter language="css" style={dark}>
        {`<img src="https://your-image-source/pic.jpg"
      alt="responsive-img" class="responsive" />`}
      </SyntaxHighlighter>

      <h3 className="mtb2-rem">2. Round image</h3>
      <p>
        Pick any images of your choice and make it show in a perfect circle
        shape{" "}
      </p>
      <div className="image-container">
        <img
          src="https://semantic-ui.com/images/avatar/large/jenny.jpg"
          alt="responsive-img"
          className="responsive img-round"
        />
      </div>
      <p>code 👇</p>
      <SyntaxHighlighter language="css" style={dark}>
        {`<img src="https://your-image-source/pic.jpg"
      alt="responsive-img" class="responsive img-round" />`}
      </SyntaxHighlighter>

      <h3 className="mtb2-rem">3. Round Images as per your requirement</h3>


      <h4 className="mtb2-rem">75% of the container</h4>
      <div className="image-container mtb1-rem">
        <img
          src="https://semantic-ui.com/images/avatar/large/jenny.jpg"
          alt="responsive-img"
          className="responsive-75pc img-round"
        />
      </div>
      <p>code 👇</p>
      <SyntaxHighlighter language="css" style={dark}>
        {`<img src="https://your-image-source/pic.jpg"
      alt="responsive-img" class="responsive-75pc img-round" />`}
      </SyntaxHighlighter>
      <h4 className="mtb2-rem">50% of the container</h4>
      <div className="image-container mtb1-rem">
        <img
          src="https://semantic-ui.com/images/avatar/large/jenny.jpg"
          alt="responsive-img"
          className="responsive-50pc img-round"
        />
      </div>
      <p>code 👇</p>
      <SyntaxHighlighter language="css" style={dark}>
        {`<img src="https://your-image-source/pic.jpg"
      alt="responsive-img" class="responsive-50pc img-round" />`}
      </SyntaxHighlighter>
      <h4 className="mtb2-rem">25% of the container</h4>
      <div className="image-container mtb1-rem">
        <img
          src="https://semantic-ui.com/images/avatar/large/jenny.jpg"
          alt="responsive-img"
          className="responsive-25pc img-round"
        />
      </div>
      <p>code 👇</p>
      <SyntaxHighlighter language="css" style={dark}>
        {`<img src="https://your-image-source/pic.jpg"
      alt="responsive-img" class="responsive-25pc img-round" />`}
      </SyntaxHighlighter>
    </div>
  );
};

export default Image;
