import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Alert = () => {
  const [green, showGreen] = useState("false");
  const [red, showRed] = useState("false");
  const [blue, showBlue] = useState("false");
  const [orange, showOrange] = useState("false");
  const [yellow, showYellow] = useState("false");
  const [black, showBlack] = useState("false");

  const handleGreen = () => {
    if (green === "false") {
      showGreen("true");
    } else {
      showGreen("false");
    }
  };

  const handleRed = () => {
    if (red === "true") {
      showRed("false");
    } else showRed("true");
  };
  const handleBlue = () => {
    if (blue === "true") {
      showBlue("false");
    } else showBlue("true");
  };
  const handleYellow = () => {
    if (yellow === "true") {
      showYellow("false");
    } else showYellow("true");
  };
  const handleOrange = () => {
    if (orange === "true") {
      showOrange("false");
    } else showOrange("true");
  };
  const handleBlack = () => {
    if (black === "true") {
      showBlack("false");
    } else showBlack("true");
  };

  return (
    <div className="toast container">
      <h1>Toast / Notifiers / Alerts</h1>
      <small>Call them how you like them 😊</small>

      <div class="toast-buttons flex-container b5px">
        <button class={`btn btn-green greenToastShow`} onClick={handleGreen}>
          Green Toast
        </button>
        <button class="btn btn-red redToastShow" onClick={handleRed}>
          Red Toast
        </button>
        <button class="btn btn-blue blueToastShow" onClick={handleBlue}>
          Blue Toast
        </button>
        <button class="btn btn-yellow yellowToastShow" onClick={handleYellow}>
          Yellow Toast
        </button>
        <button class="btn btn-orange orangeToastShow" onClick={handleOrange}>
          Orange Toast
        </button>
        <button class="btn btn-black blackToastShow" onClick={handleBlack}>
          Black Toast
        </button>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dark}
      >{`<button class="btn btn-green greenToastShow">Green Toast</button>
<button class="btn btn-red redToastShow">Red Toast</button>
<button class="btn btn-blue blueToastShow">Blue Toast</button>
<button class="btn btn-yellow yellowToastShow">Yellow Toast</button>
<button class="btn btn-orange orangeToastShow">Orange Toast</button>
<button class="btn btn-black blackToastShow">Black Toast</button>`}</SyntaxHighlighter>
      <div className="toast-container">
        <div class={`toast-green ${green}`}>
          <h1 style={{ display: "inline" }}>Hello Green, this is a toast</h1>
          <button onClick={handleGreen} className="btn greenToastClose">
            close
          </button>
        </div>

        <div className={`toast-red ${red}`}>
          <h1 style={{ display: "inline" }}>Hello Green, this is a toast</h1>
          <button onClick={handleRed} className="btn redToastClose">
            close
          </button>
        </div>
        <div className={`toast-blue ${blue}`}>
          <h1 style={{ display: "inline" }}>Hello Green, this is a toast</h1>
          <button onClick={handleBlue} className="btn blueToastClose">
            close
          </button>
        </div>
        <div className={`toast-yellow ${yellow}`}>
          <h1 style={{ display: "inline" }}>Hello Green, this is a toast</h1>
          <button onClick={handleYellow} className="btn yellowToastClose">
            close
          </button>
        </div>
        <div className={`toast-orange ${orange}`}>
          <h1 style={{ display: "inline" }}>Hello Green, this is a toast</h1>
          <button onClick={handleOrange} className="btn orangeToastClose">
            close
          </button>
        </div>
        <div className={`toast-black ${black}`}>
          <h1 style={{ display: "inline" }}>Hello Green, this is a toast</h1>
          <button onClick={handleBlack} className="btn blackToastClose">
            close
          </button>
        </div>
      </div>

      <div className="toast-container-1">
        <div className="toast-green-1">
          <h1 style={{ display: "inline" }}>Hello Green, this is a toast</h1>
          <button class="btn greenToastClose">close</button>
        </div>

        <p>When you want t0 tell, that the task was successful ☝</p>

        <div className="toast-red-1">
          <h1 style={{ display: "inline" }}>Hello Red, this is a toast</h1>
          <button class="btn redToastClose">close</button>
        </div>
        <p>When you fill like giving a warning to the user ☝</p>
        <div className="toast-blue-1">
          <h1 style={{ display: "inline" }}>Hello Blue, this is a toast</h1>
          <button class="btn blueToastClose">close</button>
        </div>
        <p>When somone is feeling the blueeees ☝</p>
        <div className="toast-yellow-1">
          <h1 style={{ display: "inline" }}>Hello Yellow, this is a toast</h1>
          <button class="btn yellowToastClose">close</button>
        </div>
        <p>When you want the user to have yellow thoughts ☝</p>
        <div className="toast-orange-1">
          <h1 style={{ display: "inline" }}>Hello Orange, this is a toast</h1>
          <button class="btn orangeToastClose">close</button>
        </div>
        <p>When there is a orange Vive around, show this ☝</p>
        <div className="toast-black-1">
          <h1 style={{ display: "inline" }}>Hello black, this is a toast</h1>
          <button class="btn blackToastClose">close</button>
        </div>
        <p>This one because we all love Black 🖤 ☝</p>
      </div>

      <SyntaxHighlighter language="css" style={dark}>
        {`<div class="toast-container">
      <div class="toast-green">
        <h1 style="display: inline">Hello Green, this is a toast</h1>
        <button class="btn greenToastClose">close</button>
      </div>
      <div class="toast-red">
        <h1 style="display: inline">Hello Red, this is a toast</h1>
        <button class="btn redToastClose">close</button>
      </div>
      <div class="toast-blue">
        <h1 style="display: inline">Hello Blue, this is a toast</h1>
        <button class="btn blueToastClose">close</button>
      </div>
      <div class="toast-yellow">
        <h1 style="display: inline">Hello Yellow, this is a toast</h1>
        <button class="btn yellowToastClose">close</button>
      </div>
      <div class="toast-orange">
        <h1 style="display: inline">Hello Orange, this is a toast</h1>
        <button class="btn orangeToastClose">close</button>
      </div>
      <div class="toast-black">
        <h1 style="display: inline">Hello Black, this is a toast</h1>
        <button class="btn blackToastClose">close</button>
      </div>
    </div>`}
      </SyntaxHighlighter>
    </div>
  );
};

export default Alert;
