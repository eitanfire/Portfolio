import { useState } from "react";
import { Container, Col, Row, Card, CardBody } from "reactstrap";
import Projects from "./components/Projects";
import DeclarativeProjects from "./components/DeclarativeProjects";
import Technologies from "./components/Technologies";
import ConactInfo from "./components/ContactInfo";
import CiteIcons8 from "./components/CiteIcons8";
import "./App.css";

function App() {
  return (
    <Container className="wrapper col col-12">
      <ConactInfo />
      <h1 className="main-title">
        Eitan Fire's Latest Pro<span className="j-from-projects">j</span>ects
      </h1>
      {/* <h2 className="intro-text">
        I am seeking a React & JavaScript developer role.
      </h2> */}
      {/* <p className="intro-text">
        My name is Eitan Fire. Here are some of the latest apps I have built to
        help me solve challenges as a teacher.
      </p> */}
      <p className="intro-text">
        Software engineer with 14 years of teaching experience seeking a
        full-stack developer role. I am passionate about creating responsive and
        mobile-first design websites and web applications.
      </p>
      <Technologies />
      {/* <DeclarativeProjects /> */}
      <Projects className="" />
      <ConactInfo />
      <br></br>
      <CiteIcons8 />
    </Container>
  );
}

export default App;
