import React from "react";
import "./Contact.css";
import Input from "../components/FormElements/Input";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <Input
            element="input"
            type="text"
            label="name"
            errorText="Please enter a valid text"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
