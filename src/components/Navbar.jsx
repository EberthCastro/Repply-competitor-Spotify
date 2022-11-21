import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Navig, Logon, Nav } from "../styles/LogoMenu.elements";

function Navbar() {
  return (
    <Navig>
      <Logon>
        <Link to="/">
          <img src={Logo} className="img" />
        </Link>
        <p>Soundwave</p>
      </Logon>
      <Nav>
        <Link to="/description">Discover</Link>
        <Link to="/contact">Join</Link>
      </Nav>
    </Navig>
  );
}

export default Navbar;
