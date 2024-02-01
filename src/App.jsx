import { useState } from "react";
import TL from "./assets/img/tl-ss.png";
import Class from "./assets/img/class-website-ss.png";
import Leaderboard from "./assets/img/leaderboard--ss.png";
import { Container, Col, Row, Card, CardBody } from "reactstrap";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <Container>
      <h1 className="main-title">My Latest Projects</h1>
      <p className="intro-text">
        My name is Eitan Fire. Here are some of my latest apps I have built to
        help me solve challenges as a teacher.
      </p>
      <Projects className="" />
    </Container>
  );
}

export default App;
