import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="menu-footer">
        <p>About Us</p>
        <p>Contact</p>
      </div>

      <div className="socialLinks">
        <div className="twitter">
          <FaTwitter/>
          <p>Twitter</p>
        </div>
        <div className="facebook">
          <FaFacebookSquare />
          <p>Facebook</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
