import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { Footermain,
    Menufooter,
    SocialLinks,
    Socialnet, } from "../styles/LogoMenu.elements"

function Footer() {
    return (
      <Footermain>
        <Menufooter>
          <p>About Us</p>
          <p>Contact</p>
        </Menufooter>
  
        <SocialLinks>
          <Socialnet>
            <FaTwitter />
            <p>Twitter</p>
          </Socialnet>
          <Socialnet>
            <FaFacebookSquare />
            <p>Facebook</p>
          </Socialnet>
          <Socialnet>
            <FaInstagram />
            <p>Instagram</p>
          </Socialnet>
        </SocialLinks>
      </Footermain>
    );
  }
  
  export default Footer;
  