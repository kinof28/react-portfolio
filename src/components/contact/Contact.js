import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 4) {
    errors.name = "Must be 4 characters or more";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 5) {
    errors.message = "Must be 5 characters or more";
  }

  return errors;
};
const Contact = () => {
  const form = useRef();
  const [result, setResult] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("form submited !! with values : ", values);
      // e.preventDefault();

      emailjs
        .sendForm(
          "service_srjggxu",
          "template_4ducf0e",
          form.current,
          "bG4LCZKFw1g_E6DuX"
        )
        .then(
          (result) => {
            console.log(result.text);
            setResult(
              <div className="success">message was sent succesfuly</div>
            );
          },
          (error) => {
            setResult(
              <div className="fail">
                some thing went wrong , <br /> message was not sent , please try
                later
              </div>
            );
          }
        );
    },
  });

  return (
    <>
      <Container className="contact-section">
        <br />

        <h1 className="heading-name">Let Us Talk</h1>
        <br />
        {result}
        <br />
        <Container
          style={{
            maxWidth: "720px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form onSubmit={formik.handleSubmit} ref={form}>
            <Row>
              <Col>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="your email *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </Col>
              <Col>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="your name *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  name="subject"
                  type="text"
                  placeholder="your subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="your Message *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}
              </Col>
            </Row>
            <br />
            <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "150px" }}
                >
                  send
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
    </>
  );
};
export default Contact;
