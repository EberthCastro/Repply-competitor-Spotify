import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Formcontainer,
  Formmain,
  Input,
} from "../styles/LogoMenu.elements";

function Form() {
  return (
    <Formmain>
      <Formcontainer>
        <div>
          <p>Name:</p>
          <Input />
        </div>
        <div>
          <p>Email:</p>
          <Input />
        </div>
        <div>
          <p>Password:</p>
          <Input type="password" />
        </div>
        <Button widthF="100%">
          <Link to="/contact">Join Now</Link>
        </Button>
      </Formcontainer>
    </Formmain>
  );
}

export default Form;
