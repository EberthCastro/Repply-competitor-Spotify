import React from "react";
import Girl from "../assets/img/girl.png";
import LogoMenu from "../components/LogoMenu";
import { Link } from 'react-router-dom'
import { Banner, Cta, Herosection, Girlimg, Button} from "../styles/LogoMenu.elements";


function Hero() {
  return (
    <div>
      <LogoMenu />
      
      <Herosection>
        <Banner>
          <Girlimg src={Girl} />
        </Banner>
        <Cta>
          <h1>Feel The Music</h1>
          <p>Stream over 20 thousand songs with a single click</p>
          <Button widthF="7rem">
          <Link to='/contact'>Join Now</Link>
          </Button>
        </Cta>

      </Herosection>

    </div>
  );
}

export default Hero;
