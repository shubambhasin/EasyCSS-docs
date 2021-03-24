import React, { useEffect } from "react";
// import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSidebar } from "../context/sidebarContext";
import logo1 from './images/logo1.png'
export const HomePage = () => {

  
  const {setSidebar, setBrand, star, setStar} = useSidebar()

  useEffect(() => {

   
    setSidebar(false)
    setBrand(false)
    setStar(!star)
   

  }, [])

  return (
    <div className="home-page">
      <div className="hero">
        {/* <div className="fork pointer">
          <FaStar size={14} /> Star on github
        </div> */}
        <img class="mylogo" src={logo1 } alt="logo"/>
        <div>
          <HashLink to="/#why" className="secondary-button m-1">
            Why Ease.CSS

          </HashLink>
          <Link to="/docs" style={{marginTop: "0px"}} className="primary-button m-1">
            Docs
          </Link>
        </div>
      </div>
      <div id="why" className="why-css">
        <h1>Why Section ! 
            Hello go</h1>
      </div>
    </div>
  );
};
