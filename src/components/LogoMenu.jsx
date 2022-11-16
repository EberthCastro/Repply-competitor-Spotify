import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Navig, Logon, Navbar, A } from "../styles/LogoMenu.elements";

function LogoMenu() {
  return (
    <Navig>
      <Logon>
        <Link to="/">
          <img src={Logo} className="img" />
        </Link>
        <p>Soundwave</p>
      </Logon>
      <Navbar>
        <Link to="/description"><A>Discover</A></Link>
        <Link to="/contact"><A>Join</A></Link>
      </Navbar>
    </Navig>
  );
}

export default LogoMenu;
