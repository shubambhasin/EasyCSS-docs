import React from "react";

export const Buttons = () => {
  return (
    <div id="primary-button" className="buttons container">
      <div className="btn-main">
        <h1>Buttons</h1>
        <p>
          Use EaseCSSs' custom button styles for actions in forms, dialogs, and
          more with support for multiple sizes, states, and more.
        </p>
        <p>
          <strong>
            Make any div, span etc etc a button by using simple meaningful class
            names from EaseCSS
          </strong>
        </p>
      </div>

      <div className="btn-types">
        <h2>Primary button</h2>

        <button className="btn btn-prim">Primary Button</button>
        <br />

        <span className="mb3-rem"></span>

        <iframe
          title="code"
          src={`https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Cbutton%2520className%253D%2522btn%2520btn-prim%2522%253EPrimary%2520Button%253C%252Fbutton%253E`}
          style={{
            width: "600px",
            height: "300px",
            backgroundColor: "transparent",
            border: 0,
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
        <span id="secondary-button"></span>
        <h2>Secondary button</h2>
        <button className="btn btn-sec ">Secondary Button</button>
        <iframe
          title="code"
          src={`https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520className%253D%2522btn%2520btn-sec%2520%2522%253ESecondary%2520Button%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520`}
          style={{
            width: "400px",
            height: "300px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <div className="btn-with-types">
        <h2>Buttons, size wise</h2>
       <div className="btn-container p1-rem">
       <button className="btn btn-xsm anim-fadeIn-4 s">x-small</button>
        <button className="btn btn-sm m1-rem">small</button>
        <button className="btn btn-md">medium</button>
        <button className="btn btn-lg m1-rem">large</button>
        <button className="btn btn-xlg">x-large</button>
        <button className="btn btn-xxlg m1-rem">xx-large</button>
        <button className="btn btn-xxxlg ">xxx-large</button>
       </div>

        <iframe
          title="code"
          src={`https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-xsm%2522%253Ex-small%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-sm%2522%253Esmall%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-md%2522%253Emedium%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-lg%2522%253Elarge%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-xlg%2522%253Ex-large%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-xxlg%2522%253Exx-large%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-xxxlg%2520%2522%253Exxx-large%253C%252Fbutton%253E%250A`}
          style={{
            width: "600px",
            height: "400px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <div className="btn-by-color">
        <h2>Buttons according to Vibe</h2>

        <div className="btn-with-filled">
         <div className="btn-container p1-rem">
         <button className="btn btn-red m1-rem">Red</button>
          <button className="btn btn-blue">Blue</button>
          <button className="btn btn-yellow m1-rem">Yellow</button>
          <button className="btn btn-orange">Orange</button>
          <button className="btn btn-green m1-rem">Green</button>
          <button className="btn btn-black">Black</button>
         </div>

         <iframe
          title="code"
          src={
            "https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-red%2522%253ERed%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-blue%2522%253EBlue%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-yellow%2522%253EYellow%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-orange%2522%253EOrange%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-green%2522%253EGreen%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-black%2522%253EBlack%253C%252Fbutton%253E%250A%2520%2520%2520%2520"
          }
          style={{
            width: "600px",
            height: "320px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
        </div>

       

        <div className="btn-with-outline">

          <h2>Button Outline</h2>

          <div className="btn-container m1-rem">
          <button className="btn btn-outline-red m1-rem">Button</button>
          <button className="btn btn-outline-blue">Button</button>
          <button className="btn btn-outline-yellow m1-rem">Button</button>
          <button className="btn btn-outline-orange">Button</button>
          <button className="btn btn-outline-greenm1-rem">Button</button>
          <button className="btn btn-outline-black">Button</button>
          </div>

          <iframe
            title="code"
            src={
              "https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-outline-red%2522%253EButton%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-outline-blue%2522%253EButton%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-outline-yellow%2522%253EButton%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-outline-orange%2522%253EButton%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-outline-green%2522%253EButton%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-outline-black%2522%253EButton%253C%252Fbutton%253E"
            }
            style={{
              width: "100%",
              height: "100%",
              border: "0",
              transform: "scale(1)",
              
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <div>
            <h2>Button with icon</h2>

        </div>
      </div>
    </div>
  );
};
