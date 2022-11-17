import React from "react";
import Album from "../assets/img/covers.jpg";
import LogoMenu from "../components/LogoMenu";
import Footer from "./Footer";
import {
  Albumimg,
  Discover,
  Discoversection,
  Cover,
} from "../styles/LogoMenu.elements";

function Description() {
  return (
    <div>
      <LogoMenu />
      <Discover>
        <Discoversection>
          <div>
            <h2>Discover new music</h2>
            <div className="icons"></div>
            <p>
              By joining you can benefit by listening to the latest albums
              released.
            </p>
          </div>
        </Discoversection>
        <Cover>
          <Albumimg src={Album} />
        </Cover>
      </Discover>
      <Footer />
    </div>
  );
}

export default Description;
