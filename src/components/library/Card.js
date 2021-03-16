import React from "react";

const Card = () => {
  return (
    <div className="card container">
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

      <iframe
        title="code"
        src={
          "https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522text-card%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520className%253D%2522card-title%2522%253ECard%2520title%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ELorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520adipisicing%2520elit.%2520ecessitatibus%2520mollitia%2520commodi%2520%250Arecusandae%2520ea%2520aut%2520eos%2520labore%2520ut%252C%2520sequi%2520consequuntur%250Aaliquam.%2520Dolorem%2520consectetur%252C%2520impeditsunt%2520adipisci%250Adoloribus%2520quo%2520vero%2520iure.%2520Quas%2520temporibus%2520in%2520fugit%2520%250Aaliquid.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
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

      <iframe
        title="code"
        src={
          "https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522image-card%2522%253E%250A%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fsemantic-ui.com%252Fimages%252Favatar%252Flarge%252Fstevie.jpg%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%253Cdiv%2520class%253D%2522card-info%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch3%253ECard%2520title%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520adipisicing%2520elit.%2520Molestiae%252C%2520officia%21%250A%2520%2520%2520%253C%252Fdiv%253E%250A%2520%253C%252Fdiv%253E"
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
      <iframe
        title="code"
        src={
          "https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520class%253D%2522text-card%2520shadow%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522card-title%2522%253ECard%2520title%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ELorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520%250A%2520%2520adipisicing%2520elit.%2520Necessitatibus%2520mollitia%2520commodi%2520recusandae%250A%2520%2520ea%2520aut%2520eos%2520labore%2520ut%252C%2520sequi%2520consequuntur%2520aliquam.%2520Dolorem%2520conse%250A%2520%2520ctetur%252C%2520impedit%2520sunt%2520adipisci%2520blanditiis%2520quasi%2520atque%2520ad%2520unde.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Quasi%2520modi%2520sint%2520illo%2520non%2520laboriosam%2520ab%2520placeat%2520saepe%2520eos%250A%2520%2520consectetur%2520minima%2520cum%2520eaque%2520vitae%2520inventore%2520laborum%2520beatae%2520inci%250A%2520%2520dunt%2520veniam%252C%2520autem%2520doloribus%2520quo%2520vero%2520iure.%2520Quas%2520temporibus%2520in%2520f%250Augit%2520aliquid.%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522image-card%2520shadow%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fsemantic-ui.com%252Fimages%252Favatar%252Flarge%252Fstevie.jpg%2522%250Aalt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-info%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ECard%2520title%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520%250AMolestiae%252C%2520officia%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
        }
        style={{
            width: "100%",
            height: "500px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

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

      <iframe
        title="code"
        src={
          "https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520class%253D%2522vertical-card%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ECard%2520title%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%252C%2520%250Aadipisicing%2520elit.%2520Inventore%2520eligendi%2520nesciunt%2520iure%2520%250Aasperiores.%2520Consequatur%2520rerum%2520nihil%2520id%2520tempore%2520quib%250Ausdam%2520m%2520eligendi%2520eveniet%2520asperiores%253F%2520Blanditiis%2520qui%250Adem%2520incidunt%2520voluptatum%2520accusamus%2520itaque%2520suscipit%2520Do%250Alores%2520nemo%2520natus%2520esse%2520maxime%2520debitis%2520inventore%252C%2520cabo%250Arecusandae%2520dignissimos%2520quibusdam%2520modi%252C%2520eius%2520volupta.%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%253C%252Fp%253E%250A%2520%253C%252Fdiv%253E"
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
      <iframe title="code"
  src={"https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0%29&t=panda-syntax&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card-with-dismiss%2522%253E%250A%2520%2520%2520%253Cspan%2520class%253D%2522dismiss%2522%253E%2526%252310008%253B%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fsemantic-ui.com%252Fimages%252Favatar%252Flarge%252Fstevie.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-info%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ECard%2520title%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elitae%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520officia%21%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E"}
  style={{width: "100%", height: "384px", border:"0", transform: "scale(1)", overflow:"hidden"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
    </div>
  );
};

export default Card;
