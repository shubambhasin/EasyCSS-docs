import React from "react";
import {FaStar}from 'react-icons/fa'
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="home-page">

      <div className="hero">
      <div className="fork"><FaStar size={14}/>  Star on github</div>
        <h1>Ease.CSS</h1>
        <div>
          <button className="secondary-button m-1">Why Ease.CSS</button>
          <Link to="/docs" className="primary-button m-1">Docs</Link>
        </div>
      </div>
      <div className="why-css">
          <h1>Why Section !</h1>
      </div>
    </div>
  );
};
