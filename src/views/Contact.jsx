import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Contactform, Join } from "../styles/LogoMenu.elements";

function Contact() {
  return (
    <div>
      <Navbar />
      <Contactform>
        <Join>
          <h1 >Join the <span className="join-color2"> fun.</span></h1>          
        </Join>
        <Form />
      </Contactform>
      <Footer />
    </div>
  );
}

export default Contact;
