import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Album from "../assets/img/covers.jpg";
import Mic from "../assets/img/microphone.svg";
import Albums from "../assets/img/albums.svg";
import More from "../assets/img/more.svg";
import {
  Albumimg,
  Discover,
  Discoversection,
  Cover,
  Icons,
  Icons2,
} from "../styles/LogoMenu.elements";

function Description() {
  return (
    <div>
      <Navbar />
      <Discover>
        <Discoversection>
          <div className="new-icons">
            <h2>Discover new music</h2>
            <Icons2>
              <div>
                <Icons src={Mic} />
                <p>Charts</p>
              </div>
              <div>
                <Icons src={Albums} />
                <p>Album</p>
              </div>
              <div>
                <Icons src={More} />
                <p>More</p>
              </div>
            </Icons2>
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
