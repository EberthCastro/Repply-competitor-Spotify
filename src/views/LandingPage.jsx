import React from "react";
import Navbar from "../components/Navbar";
import Girl from "../assets/img/girl.png";
import {
  Girlimg,
  Banner,
  Cta,
  Herosection,
  Button,
} from "../styles/LogoMenu.elements";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Navbar />

      <Herosection>
        <Banner>
          <Girlimg src={Girl} />
        </Banner>
        <Cta>
          <h1>Feel The Music</h1>
          <p>Stream over 20 thousand songs with a single click</p>
          <Button widthF="7rem">
            <Link to="/contact">Join Now</Link>
          </Button>
        </Cta>
      </Herosection>
    </div>
  );
}

export default LandingPage;
