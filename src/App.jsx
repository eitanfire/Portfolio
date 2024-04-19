import { useState } from "react";
import { Container, Col, Row, Card, CardBody } from "reactstrap";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ConactInfo from "./components/ContactInfo";
import "./App.css";

function App() {
  return (
    <Container className="wrapper col col-12">
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
      <br></br>
      <br></br>
      <cite>
        <a target="_blank" href="https://icons8.com/icon/FQlr_bFSqEdG/node-js">
          Node Js
        </a>
        {", "}
        <a
          target="_blank"
          href="https://icons8.com/icon/SQEEoDcpUD6c/cloud-firestore"
        >
          Firestore
        </a>
        {", "}
        <a
          target="_blank"
          href="https://icons8.com/icon/UJGaYqXaHWdp/google-calendar"
        >
          Google Calendar
        </a>
        {" & "}
        <a
          target="_blank"
          href="https://icons8.com/icon/31054/google-classroom"
        >
          Google Classroom
        </a>{" "}
        icons by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </cite>
    </Container>
  );
}

export default App;
