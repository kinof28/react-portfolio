import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

import "./Github.css";

const Github = () => {
  return (
    <Row
      className="github-calendar"
      style={{ justifyContent: "center", paddingBottom: "10px" }}
    >
      <h1
        className="project-heading"
        style={{ paddingBottom: "20px", textAlign: "center" }}
      >
        My Github Calendar
      </h1>
      <GitHubCalendar
        username="kinof28"
        blockSize={17}
        blockMargin={8}
        color="#dfbfbf"
        fontSize={16}
        blockRadius={5}
      />
    </Row>
  );
};
export default Github;
