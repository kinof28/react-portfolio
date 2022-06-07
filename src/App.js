import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import Background from "./components/common/Background";
import NotFound from "./components/common/NotFound";
import { Container } from "react-bootstrap";
// import Helmet from "./components/common/Helmet";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Background className="back" />
      {/* <Helmet /> */}
      <Header />
      <Container fluid className="home-section" id="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
