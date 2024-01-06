import { useState } from "react";
import TL from "../assets/img/tl-ss.png";
import Class from "../assets/img/class-website-ss.png";
import Leaderboard from "../assets/img/leaderboard--ss.png";
import { Container, Col, Row, Card, CardBody } from "reactstrap";

const Projects = () => {
  return (
    <Container>
      <Row className=" mb-3">
        <h2 className="title">🚀 Teach League</h2>
        <Col className="col col-xs-8" sm="8">
          <img
            className="screenshots"
            src={TL}
            alt="Teach League screenshot"
          ></img>
        </Col>
        <Col className="project-links col col-xs-3" sm="3">
          {" "}
          <a
            href="https://teach-league.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-circle-play"></i> Live Demo
          </a>
          <div>
            <a
              // className="btn btn-social-icon btn-github"
              href="https://github.com/eitanfire/legendary-quest.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
          </div>
        </Col>
      </Row>
      <Row className="description">
        <Col className="col col-xs-6">
          {" "}
          <p>
            As a teacher with 14 years of experience I am eager to offer support
            and mentorship to other educators in the field. This web app shares
            the high-quality curriculum I have built over the years.
          </p>
          <p>
            I help teachers stay sharp as professionals by curating illuminating
            articles and ultimately to support their own voices.
          </p>
        </Col>
        <Col className="col col-xs-6">
          <p>
            I used the Google Classroom API to provide them with an emergency
            lesson plan they can easily assign to their students.
          </p>
          <p>

          </p>
          <p>
            Users can click on the light bulb to toggle between a light and dark
            theme.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <h2 className="title">👨🏻‍🏫 Class Website</h2>
        <Col className="col col-xs-8" sm="8">
          <img
            className="screenshots"
            src={Class}
            alt="Class website screenshot"
          ></img>
        </Col>
        <Col className="col col-xs-2" sm="2">
          {" "}
          <a
            href="https://teach-league.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
          <div>
            <a
              href="https://github.com/eitanfire/legendary-quest.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </Col>
      </Row>
      <Row className="description">
        <Col className="col col-xs-6">
          {" "}
          <p>
            As a high school teacher I wanted to help my students get quickly
            oriented to be successful in class. I used the date API to
            conditionally render a component that lets them know if it is an A
            day or a B day within the block schedule we follow. I leveraged this
            same API to keep all other date related information seemlessly
            updated such as the information foound it on the "About Me" page.
          </p>
        </Col>
        <Col className="col col-xs-6">
          <p>
            I created an accordion that gives students quick access to
            assignemnts and documents they will need for the day. The calendar
            shows important school events and also shows the due dates for any
            assignments their teachers assign on Google Classroom. The carousel
            raises community spirit by "shouting out" students and staff for
            taking pride in their community
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <h2 className="title">👻 Costume Contest Scoreboard</h2>
        <Col className="col col-xs-8" sm="8">
          <img
            className="screenshots"
            src={Leaderboard}
            alt="Class website screenshot"
          ></img>
        </Col>
        <Col className="col col-xs-2" sm="2">
          {" "}
          <a
            href="https://teach-league.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
          <div>
            <a
              href="https://github.com/eitanfire/legendary-quest.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </Col>
      </Row>
      <Row className="description">
        <Col className="col col-xs-6">
          {" "}
          <p>
            I aim to write clean code in a functional style but I won't
            hesitaste to make use of class based components when working with
            legacy code such as the Scoreboard which I started with a tutorial.
          </p>
        </Col>
        <Col className="col col-xs-6">
          <p>
            As a teacher a whiteboard coding interview is not quite as
            terrifying as having a school full of students tensely watching me
            debug a program to find out the winner of the costume contest!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
