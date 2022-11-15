import React from "react";
import Logo from "../assets/img/logo.svg";

function LogoMenu() {
  return (
    <div className="Logomenu">
      <div className="logo">
        <img src={Logo} className="img" />
        <p>Soundwave</p>
      </div>
      <nav className="navbar">
        <a href="/#"><p>Discover</p></a>
        <a href="/#"><p>Join</p></a>
      </nav>
    </div>
  );
}

export default LogoMenu;
