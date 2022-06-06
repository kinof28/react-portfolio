import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = (props) => {
  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button variant="primary" href={props.repo} target="_blank">
              <BiLinkExternal /> &nbsp; View Repository
            </Button>

            {props.demo && (
              <Button variant="primary" href={props.demo} target="_blank">
                <BiLinkExternal /> &nbsp; View Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProjectCard;
