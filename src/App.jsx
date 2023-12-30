import { useState } from 'react'
import TL from "./assets/img/tl-ss.png";
import Class from "./assets/img/class-website-ss.png";
import Leaderboard from "./assets/img/leaderboard--ss.png";
import { Container, Col, Row, Card, CardBody } from "reactstrap";
import Projects from './components/Projects';
import "./App.css";

function App() {
  return (
    <Container>
      <h1 className="title">My Latest Projects</h1>
      <p className="text-align:left">
        My name is Eitan Fire. Here are some of the my latest apps I have built
        to help me solve challenges as a teacher.
      </p>
      <p>
        {" "}
        Recently I have been creating new projects using Vite. I make modern web
        apps React to{" "}
      </p>
      <Projects />
    </Container>
  );
}

export default App
