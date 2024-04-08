import { useState } from "react";
import TL from "./assets/img/tl-ss.png";
import Class from "./assets/img/class-website-ss.png";
import Leaderboard from "./assets/img/leaderboard--ss.png";
import { Container, Col, Row, Card, CardBody } from "reactstrap";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import "./App.css";

const handleCopyClick = (event) => {
  event.preventDefault(); // Prevent the default behavior of the anchor tag

  const emailInput = document.getElementById("emailInput");
  emailInput.select();
  document.execCommand("copy");
  emailInput.setSelectionRange(0, 0);

  window.alert("Email address copied!"); // Show a popup message
};

function App() {
  return (
    <Container>
      <contact-links>
        <a
          href="https://drive.google.com/file/d/15u2y7JFO3BUc1gGXpk9bGd8-bUxUUpDG/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-solid fa-image-portrait"></i> Resume
        </a>
        {" • "}
        <a href="https://github.com/eitanfire" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i> GitHub
        </a>
        {" • "}
        <a
          href="https://www.linkedin.com/in/eitanfire/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i> LinkedIn
        </a>
        {" • "}
        <a href="tel:+13038177843">
          <i className="fa fa-phone"></i> Phone
        </a>
        {" • "}
        <a href="mailto:eitanfire@gmail.com" target="_blank" rel="noreferrer">
          <i className="fa fa-envelope-o"></i> Email
        </a>{" "}
        <a href="mailto:eitanfire@gmail.com" id="emailInput">
          <i className="fa fa-copy" onClick={handleCopyClick} />
        </a>
      </contact-links>
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
    </Container>
  );
}

export default App;
