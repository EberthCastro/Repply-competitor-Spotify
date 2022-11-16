import React from "react";
import Girl from "../assets/img/girl.png";
import LogoMenu from "../components/LogoMenu";
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
      <LogoMenu />
      
      <div className="hero">
        <div className="banner">
          <img src={Girl} className="girl" />
        </div>
        <div className="cta">
          <h1>Feel The Music</h1>
          <p>Stream over 20 thousand song with a single click</p>
          <button className="button-cta">
          <Link to='/contact'><p>Join Now</p></Link>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Hero;
