import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";



const Modal = () => {
  return (
    <div className="modal container anim-fadeIn-03s">
      <h1>I am Modal !</h1>



      <button class="btn btn-green modal-open">Open modal</button>

      <div class="modal-container">
        <div class="modal-body-1 bg-green">
          <button class="modal-close btn pointer btn-red">Close</button>

          <h1>Modal heading...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Accusantium
            quidem corporis quas assumenda consectetur voluptatem
            exercitationem, mollitia veritatis eveniet pariatur 
            praesentium!
            Blanditiis, rem quae cumque suscipit incidunt earum 
            aperiam quasi.
          </p>
        </div>
      </div>
      <SyntaxHighlighter
  language="css"
  style={dracula}
>{`<button class="btn btn-green modal-open">Open modal</button>
<div class="modal-container">
  <div class="modal-body bg-green">
    <button class="modal-close btn btn-red">Close</button>
    <h1>Modal heading...</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Accusantium quidem corporis quas assumenda consectetur voluptatem
    exercitationem, mollitia veritatis eveniet pariatur praesentium!
    Blanditiis, rem quae cumque suscipit incidunt earum aperiam quasi.</p>
  </div>
</div>`}</SyntaxHighlighter>
    </div>
  );
};

export default Modal;
