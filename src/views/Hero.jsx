import React from "react";
import Girl from "../assets/img/girl.png";
import LogoMenu from "../components/LogoMenu";

function Hero() {
  return (
    <div className="hero-main">
      <LogoMenu />
      
      <div className="hero">
        <div className="banner">
          <img src={Girl} className="girl" />
        </div>
        <div className="cta">
          <h1>Feel The Music</h1>
          <p>Stream over 20 thousand song with a single click</p>
          <button className="button-cta">
            <a>Join Now</a>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Hero;
