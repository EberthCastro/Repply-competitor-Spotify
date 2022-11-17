import React from "react";
import Form from "../components/Form";
import LogoMenu from "../components/LogoMenu";
import { Contactform, Join } from "../styles/LogoMenu.elements";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <LogoMenu />
      <Contactform>
        <Join>
          <span>Join the </span>
          <span className="join-color">fun.</span>
        </Join>
        <Form />
      </Contactform>
      <Footer />
    </div>
  );
}

export default Contact;
