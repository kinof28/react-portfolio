import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <Container className="contact-section">
        <h1 className="heading-name">Let Us Talk</h1>
        <br />
        <iframe
          title="google-contact-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeJ5I-MVffNa1rfdJBUdVRfS_zm8WdAcG0Y8jQkJTrT0a4v3g/viewform?embedded=true"
          //   width="700"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="i-frame"
        >
          Loading…
        </iframe>
      </Container>
    </>
  );
};
export default Contact;
