import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Card = () => {
  return (
    <div className="card container anim-fadeIn-03s">
      <h1>Cards</h1>

      <p>Make amazing cards just by added few classes to you existing code</p>

      <h2>Text only card</h2>

      <div className="text-card">
        <h1 className="card-title">Card title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus mollitia commodi recusandae ea aut eos labore ut, sequi
          consequuntur aliquam. Dolorem consectetur, impedit sunt adipisci
          doloribus quo vero iure. Quas temporibus in fugit aliquid.
        </p>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{`<div className="text-card">
        <h1 className="card-title">Card title</h1>
        <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. ecessitatibus mollitia commodi 
recusandae ea aut eos labore ut, sequi consequuntur
aliquam. Dolorem consectetur, impeditsunt adipisci
doloribus quo vero iure. Quas temporibus in fugit 
aliquid.</p>
      </div>`}</SyntaxHighlighter>

      <h2 className="mtb1-rem">Card with image</h2>

      <div className="image-card">
        <img
          src="https://semantic-ui.com/images/avatar/large/stevie.jpg"
          alt=""
        />
        <div className="card-info">
          <h3>Card title</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          officia!
        </div>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{`<div class="image-card">
        <img src="https://semantic-ui.com/images/avatar/large/stevie.jpg" alt="">
        <div class="card-info">
           <h3>Card title</h3>
               Lorem ipsum dolor sit amet consectetur 
               adipisicing elit. Molestiae, officia!
        </div>
      </div>`}</SyntaxHighlighter>
      <h1 className="mtb1-rem">Cards with Shadow</h1>
      <div className="card-container">
        <div className="text-card shadow">
          <h1 className="card-title">Card title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus mollitia commodi recusandae ea aut eos labore ut,
            sequi consequuntur aliquam. Dolorem consectetur, impedit sunt
            adipisci doloribus quo vero iure. Quas temporibus in fugit aliquid.
          </p>
        </div>

        <div className="image-card mtb1-rem shadow">
          <img
            src="https://semantic-ui.com/images/avatar/large/stevie.jpg"
            alt=""
          />
          <div className="card-info">
            <h3>Card title</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            officia!
          </div>
        </div>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{` <div class="text-card shadow">
        <h1 class="card-title">Card title</h1>
        <p>Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Necessitatibus mollitia commodi recusandae
ea aut eos labore ut, sequi consequuntur aliquam. Dolorem conse
ctetur, impedit sunt adipisci blanditiis quasi atque ad unde.
        Quasi modi sint illo non laboriosam ab placeat saepe eos
consectetur minima cum eaque vitae inventore laborum beatae inci
dunt veniam, autem doloribus quo vero iure. Quas temporibus in f
ugit aliquid.</p>
</div>

<div class="image-card shadow">
      <img src="https://semantic-ui.com/images/avatar/large/stevie.jpg"
alt="">
      <div class="card-info">
        <h3>Card title</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Molestiae, officia!
      </div>
</div>`}</SyntaxHighlighter>

      <h2 className="mtb1-rem ">Vertical Card</h2>

      <div className="vertical-card">
        <h3>Card title</h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        eligendi nesciunt iure asperiores. Consequatur rerum nihil id tempore
        quibusdam laborum eligendi eveniet asperiores? Blanditiis quidem
        incidunt voluptatum accusamus itaque suscipit! Dolores nemo natus esse
        maxime debitis inventore, earum iure explicabo recusandae dignissimos
        quibusdam modi, eius voluptates corrupti ducimus deleniti cumque illum
        minus, voluptatem consequatur amet dolorem repudiandae! Rem, laborum
        iste.
        <p></p>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{` <div class="vertical-card">
      <h3>Card title</h3>
      Lorem ipsum dolor sit amet consectetur, 
adipisicing elit. Inventore eligendi nesciunt iure 
asperiores. Consequatur rerum nihil id tempore quib
usdam m eligendi eveniet asperiores? Blanditiis qui
dem incidunt voluptatum accusamus itaque suscipit Do
lores nemo natus esse maxime debitis inventore, cabo
recusandae dignissimos quibusdam modi, eius volupta.
      <p></p>
</div>`}</SyntaxHighlighter>

      <h2 className="mtb1-rem">Card with dismiss button</h2>

      <div className="card-with-dismiss">
        <span className="dismiss">&#10008;</span>
        <img
          src="https://semantic-ui.com/images/avatar/large/stevie.jpg"
          alt=""
        />
        <div className="card-info">
          <h3>Card title</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          officia!
        </div>
      </div>

      <SyntaxHighlighter
        language="css"
        style={dracula}
      >{` <div class="card-with-dismiss">
      <span class="dismiss">&#10008;</span>
        <img
          src="https://semantic-ui.com/images/avatar/large/stevie.jpg"
          alt=""/>
         <div class="card-info">
           <h3>Card title</h3>
           Lorem ipsum dolor sit amet consectetur adipisicing elitae,
           officia!
         </div>
       </div>>`}</SyntaxHighlighter>

    </div>
  );
};

export default Card;
