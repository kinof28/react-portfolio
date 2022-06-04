import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Github from "../common/Github";
import "./About.css";
import avatar from "../../assets/avatar.svg";
import { DiNodejs } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactivex,
  SiAngular,
  SiSpringboot,
  SiSpring,
  SiJava,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiNestjs,
  SiGit,
  SiRedux,
} from "react-icons/si";
const About = () => {
  return (
    <>
      <Container className="about-container">
        <Row>
          <h2 className="about-title">About me</h2>
        </Row>
        <Row>
          <Col md={3} className="about-avatar-container">
            <img height={200} src={avatar} alt="About Images" />
          </Col>
          <Col md={7} className="about-description-container">
            <div className="neons">
              <h3>LET ME INTRODUCE MYSELF</h3>
              <p className="about-description">
                Since beginning my journey nearly 2 years ago, I've done remote
                work for agencies and collaborated with talented people to
                create digital content for both business and consumer use. I'm
                quietly confident, naturally curious, and a hungry learner, this
                is my current tech stack ...
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiJava title="Java" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiJavascript title="JavaScript" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTypescript title="TypeScrypt" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiReact title="React" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiRedux title="Redux" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiReactivex title="RxJs" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiAngular title="Angular" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot title="SpringBoot" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiSpring title="Spring" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNestjs title="NestJs" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiMysql title="MySQL" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql title="PostegreSQL" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiGit title="Git" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiCplusplus title="C++" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
        </Row>
        <Github />
      </Container>
    </>
  );
};
export default About;
