import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import imageProcessing from "../../assets/projects/image-processing.png";
import algorithmApp from "../../assets/projects/algorithm.png";
import paintingApp from "../../assets/projects/draw.png";
import superMario from "../../assets/projects/superMario.png";
import liveWithMe from "../../assets/projects/live-with-me.png";
import twilio from "../../assets/projects/twilio.png";

import "./Projects.css";
const projects = [
  {
    title: "Live With ME client website",
    description:
      "Angular front-end application for the use of Live with me service , a service that helps people to find roommates , this is a part of the project ",
    imgPath: liveWithMe,
    repositoryLink: "https://github.com/kinof28/live-with-me-client-front-end",
    demoLink: "https://unruffled-euclid-12e5cb.netlify.app/",
  },
  {
    title: "Live With ME administation website",
    description:
      "Angular front-end application for the use of Live with me administration ",
    imgPath: liveWithMe,
    repositoryLink: "https://github.com/kinof28/live-with-me-admin-front-end",
    demoLink: "",
  },
  {
    title: "Live With ME Backend API",
    description:
      "Backend Restful Api made by SpringBoot for the use of Live with me service , a service that helps people to find roommates , this is a part of the project ",
    imgPath: liveWithMe,
    repositoryLink: "https://github.com/kinof28/Live-with-me-api",
    demoLink: "",
  },
  {
    title: "Messaging API",
    description:
      "Backend Restful Api made by SpringBoot and Twilio Service to send SMS messages ",
    imgPath: twilio,
    repositoryLink: "https://github.com/kinof28/sms-project-back-end",
    demoLink: "",
  },
  {
    title: "Image Processing website",
    description:
      "Front-end website made by angular for basic image processing operations like grey levels , flip and rotation , Histogram calculation , some enhancement operations and EAN-13 barcode scanner ",
    imgPath: imageProcessing,
    repositoryLink: "https://github.com/kinof28/image-processing-website",
    demoLink: "https://moonlit-cocada-297c5e.netlify.app/",
  },
  {
    title: "Algorithm Visualisation website",
    description:
      "Front-end website made by angular to visualize some algorithms, for now I implemented Genetic Algorithm to solve traveling salmesman problem",
    imgPath: algorithmApp,
    repositoryLink: "https://github.com/kinof28/algorithms-application",
    demoLink: "https://deft-medovik-e66226.netlify.app/",
  },
  {
    title: "Super Mario",
    description:
      "Simple static website made using phaser library, super mario basic game ",
    imgPath: superMario,
    repositoryLink: "https://github.com/kinof28/phaser-super-mario",
    demoLink: "https://nifty-poincare-b38efd.netlify.app/",
  },
  {
    title: "Painting html canvas",
    description:
      "Simple static website similar to paint, u can draw and download the result ",
    imgPath: paintingApp,
    repositoryLink: "https://github.com/kinof28/drawing-web-app",
    demoLink: "https://stoic-noether-baf8ea.netlify.app/",
  },
];
const Projects = () => {
  return (
    <>
      <Container fluid className="project-section">
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="deconstructed">
            <div>MY RECENT WORKS</div>
            <div>MY RECENT WORKS</div>
            <div>MY RECENT WORKS</div>
            <div>MY RECENT WORKS</div>
            MY RECENT WORKS
          </div>
        </div>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((e, i) => (
            <Col md={4} className="project-card" key={i}>
              <ProjectCard
                imgPath={e.imgPath}
                title={e.title}
                description={e.description}
                repo={e.repositoryLink}
                demo={e.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Projects;
