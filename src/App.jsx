import { useState } from "react";
import TL from "./assets/img/tl-ss.png";
import Class from "./assets/img/class-website-ss.png";
import Leaderboard from "./assets/img/leaderboard--ss.png";
import { Container, Col, Row, Card, CardBody } from "reactstrap";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ConactInfo from "./components/ContactInfo";
import "./App.css";

function App() {
  return (
    <Container>
      <ConactInfo />
      <h1 className="main-title">My Latest Projects</h1>
      <p className="intro-text">
        My name is Eitan Fire I am a motivated, self-starting, and collaborative
        software engineer with over 14 years of teaching experience seeking a
        full-stack developer role. I am passionate about creating responsive and
        mobile-first design websites and web applications. These are some of the
        latest apps I have built to help me solve challenges as a teacher.
      </p>
      {/* <p className="intro-text">
        My name is Eitan Fire. Here are some of the latest apps I have built to
        help me solve challenges as a teacher.
      </p> */}
      <p className="intro-text center-text">
        I am seeking a React & JavaScript developer role.
      </p>
      <Technologies />
      <Projects className="" />
      <ConactInfo />
    </Container>
  );
}

export default App;
