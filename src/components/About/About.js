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
              <p className="about-description" style={{ textAlign: "justify" }}>
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
          <Col xs={4} md={2} className="tech-icons" title="Java/JavaEE">
            <SiJava title="Java/JavaEE" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="JavaScript">
            <SiJavascript title="JavaScript" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="TypeScrypt">
            <SiTypescript title="TypeScrypt" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="React">
            <SiReact title="React" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="Angular">
            <SiAngular title="Angular" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="SpringBoot">
            <SiSpringboot title="SpringBoot" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="Spring">
            <SiSpring title="Spring" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="Redux/NgRx">
            <SiRedux title="Redux/NgRx" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="RxJs">
            <SiReactivex title="RxJs" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="NestJs">
            <SiNestjs title="NestJs" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="MySQL">
            <SiMysql title="MySQL" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="PostegreSQL">
            <SiPostgresql title="PostegreSQL" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="Git">
            <SiGit title="Git" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="C++">
            <SiCplusplus title="C++" />
          </Col>
          <Col xs={4} md={2} className="tech-icons" title="Node JS">
            <DiNodejs title="Node JS" />
          </Col>
        </Row>
        <Github />
      </Container>
    </>
  );
};
export default About;
