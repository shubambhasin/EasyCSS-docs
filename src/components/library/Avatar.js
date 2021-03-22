import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Avatar = () => {
  return (
    <div className="avatar container">
      <h1 className="h1">Avatar</h1>

      <h4 className="h4 mtb1-rem">
        {" "}
        ~ Available in 4 different sizes and 4 different locations
      </h4>

      <h5 className="h4 bold mtb1-rem">
        1. Avatar That fits the container [square]
      </h5>
      <div className="avatar-container">
        <img
          className="avtr"
          src="https://semantic-ui.com/images/avatar/large/steve.jpg"
          alt="avatar"
        />
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{`<img className="avtr" src="https://your-image-source/images.jpg" alt="avatar"/>`}</SyntaxHighlighter>

      <h5 className="h4 bold mtb1-rem">
        2. Avatar That fits the container [circle]
      </h5>
      <div className="avatar-container">
        <img
          className="avtr avtr-circle"
          src="https://semantic-ui.com/images/avatar/large/steve.jpg"
          alt="avatar"
        />
      </div>
      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{`<img className="avtr avtr-circle" 
      src="https://semantic-ui.com/images/avatar/large/steve.jpg" alt="avatar"/>`}</SyntaxHighlighter>

      <h3>Avatar according to sizes</h3>

      <div className="avatar-container-1">
      {/* <img
          className="avtr avtr-circle inline"
          src="https://semantic-ui.com/images/avatar/large/steve.jpg"
          alt="avatar"
        /> */}
        <img
          className="avtr-50pc avtr-circle "
          src="https://semantic-ui.com/images/avatar/large/steve.jpg"
          alt="avatar"
        />
        <img
          className="avtr-25pc avtr-circle"
          src="https://semantic-ui.com/images/avatar/large/steve.jpg"
          alt="avatar"
        />
        <img
          className="avtr-tiny avtr-circle"
          src="https://semantic-ui.com/images/avatar/large/steve.jpg"
          alt="avatar"
        />
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{`//50% of container size
<img className="avtr-50pc avtr-circle " 
src="https://your-image-source/images.jpg" alt="avatar"/>
//25% of container size
<img className="avtr-25pc avtr-circle " 
src="https://your-image-source/images.jpg" alt="avatar"/>
//10% of container size
<img className="avtr-tiny avtr-circle " 
src="https://your-image-source/images.jpg" alt="avatar"/>`}</SyntaxHighlighter>
    </div>
  );
};

export default Avatar;
