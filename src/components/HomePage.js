import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSidebar } from "../context/sidebarContext";
import logo1 from "./images/logo1.png";
export const HomePage = () => {
  const { setSidebar, setBrand } = useSidebar();

  useEffect(() => {
    setSidebar(false);
    setBrand(false);
  }, []);

  return (
    <div className="home-page">
      <div className="hero">
        <a href="https://github.com/shubambhasin/EasyCSS-docs" className="fork pointer">
          <FaStar size={14} /> Star on github
        </a>
        <img class="mylogo" src={logo1} alt="logo" />
        <div>
          <HashLink to="/#why" className="secondary-button m-1">
            Why Ease.CSS
          </HashLink>
          <Link
            to="/docs"
            style={{ marginTop: "0px" }}
            className="primary-button m-1"
          >
            Docs
          </Link>
        </div>
      </div>
      <div id="why" className="why-css flex-col container">
        <h3 className="h3  mtb1-rem">Why Section ! Hello go</h3>

        <p>The biggest problem that people face while suing CSS libraries is with keeping in mind the classnames, so we simplified it. e.g., if you need a red background, just write the class<code>.bg-red</code> and it will make the background of that element red irrespective of what it is.</p>
        <p>Naming of classes has been done carefully. So that keeping in mind the class names do not come as a new and hard task. Once you start using it. It will start coming to you naturally. 😊</p>
      </div>
    </div>
  );
};
