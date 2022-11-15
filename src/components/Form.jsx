import React from "react";

function Form() {
  return (
    <div className="form">
      <div className="form-container">
        <div className="name">
          <p>Name:</p>
          <input type="text" />
        </div>
        <div className="email">
          <p>Email:</p>
          <input type="text" />
        </div>
        <div className="password">
          <p>Password:</p>
          <input type="text" />
        </div>
        <div className="submit">
          <button className="button-cta2">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
