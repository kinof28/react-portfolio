import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Writer from "../UI/Writer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Row>
          <Col md={12} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Welcome to my world
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>
            </h1>
            <h1 className="heading-name">
              Hi ,I'M
              <div className="main-name">
                <div className="glitch" data-text="ABDÈLWAHÀB">
                  ABDÈLWAHÀB
                </div>
                <div className="glow">ABDÈLWAHÀB</div>
              </div>
            </h1>
            <div
              className="heading-name"
              style={{ padding: 50, textAlign: "left" }}
            >
              <Writer
                words={[
                  "Full Stack Developer                 ",
                  "React And Angular Developer               ",
                  "Java Spring Developer          ",
                  "Backend Developer         ",
                  "Sofwtare Engineer               ",
                ]}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kinof28"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/abdelwahab.hamadouche"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdelwahab-hamadouche-415161231/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
