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

function App() {
  return (
    <>
      {/* <h1>Application works !!</h1> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
