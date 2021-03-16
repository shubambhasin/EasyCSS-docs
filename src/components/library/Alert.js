import React, { useState } from "react";

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

      <iframe
        title="code"
        src={
          "https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-green%2520greenToastShow%2522%253EGreen%2520Toast%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-red%2520redToastShow%2522%253ERed%2520Toast%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-blue%2520blueToastShow%2522%253EBlue%2520Toast%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-yellow%2520yellowToastShow%2522%253EYellow%2520Toast%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-orange%2520orangeToastShow%2522%253EOrange%2520Toast%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-black%2520blackToastShow%2522%253EBlack%2520Toast%253C%252Fbutton%253E"
        }
        style={{ width: "100%", height: "300px", border: "0" }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

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

      <iframe
        title="code"
        src={
          "https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522toast-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522toast-green%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520style%253D%2522display%253A%2520inline%2522%253EHello%2520Green%252C%2520this%2520is%2520a%2520toast%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520greenToastClose%2522%253Eclose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522toast-red%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520style%253D%2522display%253A%2520inline%2522%253EHello%2520Red%252C%2520this%2520is%2520a%2520toast%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520redToastClose%2522%253Eclose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522toast-blue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520style%253D%2522display%253A%2520inline%2522%253EHello%2520Blue%252C%2520this%2520is%2520a%2520toast%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520blueToastClose%2522%253Eclose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522toast-yellow%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520style%253D%2522display%253A%2520inline%2522%253EHello%2520Yellow%252C%2520this%2520is%2520a%2520toast%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520yellowToastClose%2522%253Eclose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522toast-orange%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520style%253D%2522display%253A%2520inline%2522%253EHello%2520Orange%252C%2520this%2520is%2520a%2520toast%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520orangeToastClose%2522%253Eclose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522toast-black%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520style%253D%2522display%253A%2520inline%2522%253EHello%2520Black%252C%2520this%2520is%2520a%2520toast%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520blackToastClose%2522%253Eclose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A"
        }
        style={{
          width: "100%",
          height: "400px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Alert;
