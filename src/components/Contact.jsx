import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;