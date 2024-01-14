import TL from "../assets/img/tl-ss.png";
import TLLight from "../assets/img/tl-light-ss.png";
import Class from "../assets/img/class-website-ss.png";
import About from "../assets/img/class-website-about-me-ss.png";
import Leaderboard from "../assets/img/leaderboard--ss.png";
import { Container, Col, Row, Card, CardBody } from "reactstrap";

const Projects = () => {
  return (
    <Container>
      <h2 className="title">🚀 Teach League</h2>
      <Row className="mb-3">
        <Col className="col col-xl-2">
          <div className="project-links d-md-none">
            <a
              href="https://teach-league.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          <br></br>
          <div className="project-links d-md-none d-block-lg">
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
        <Col className="col col-xl-2">
          <div className="project-links-md d-none d-md-block d-lg-none hstack">
            <a
              href="https://teach-league.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          <br></br>
          <div className="project-links-md d-none d-md-block d-lg-none hstack">
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
        <Col
        // className="vstack"
        >
          <Col className="col col-2 d-md-none d-xl-block">
            <img
              className="screenshots"
              src={TLLight}
              alt="Teach League screenshot"
            ></img>
          </Col>
          <br></br>
          <Col className="col col-2 d-md-none d-xl-block">
            <img
              className="screenshots"
              src={TL}
              alt="Teach League screenshot"
            ></img>
          </Col>
        </Col>
        <Col className="hstack">
          <Col className="d-none d-md-block d-xl-none">
            <img
              className="screenshots-md"
              src={TLLight}
              alt="Teach League screenshot"
            ></img>
          </Col>
          <br></br>
          <Col className="d-none d-md-block d-xl-none">
            <img
              className="screenshots-md"
              src={TL}
              alt="Teach League screenshot"
            ></img>
          </Col>
        </Col>
        {/* </Row>
      <Row> */}
        <Col className="description col-12 col-xl-7">
          <p>
            As a teacher with 14 years of experience I am eager to offer support
            and mentorship to other educators in the field. This web app shares
            the high-quality curriculum I have built over the years.
          </p>
          <p>
            I help teachers stay sharp as professionals by curating illuminating
            articles and ultimately to support their own voices.
          </p>
          <Col className="col">
            <p>
              I used the Google Classroom API to provide them with an emergency
              lesson plan they can easily assign to their students.
            </p>
            <p></p>
            <p>
              Users can click on the light bulb to toggle between a light and
              dark theme.
            </p>
          </Col>
        </Col>
      </Row>
      <Row
      // className="mb-5"
      >
        <h2 className="title">👨🏻‍🏫 Class Website</h2>
        <Col className="col col-xs-8" sm="8">
          <img
            className="screenshots"
            src={Class}
            alt="Class website screenshot"
          ></img>
        </Col>
        <Col className="col col-xs-2" sm="2">
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
          <p>
            I created this class website to support my students in getting the
            information they need to be successful in class. I used the date API
            to conditionally render a component that lets them know if it is an
            A day or a B day within the block schedule we follow. I leveraged
            this same API to keep all other date related information seemlessly
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
            taking pride in their community.
          </p>
        </Col>
      </Row>
      <h2 className="title">👻 Costume Contest Scoreboard</h2>
      <Row className="mb-3">
        <Col className="col col-xs-2" sm="2">
          <div className="project-links">
            <a
              href="https://teach-league.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          <br></br>
          <div className="project-links">
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
        <Col className="col col-xs-2" sm="2">
          <img
            className="screenshots"
            src={Leaderboard}
            alt="Scoreboard screenshot"
          ></img>
        </Col>
        <Col className="description col col-xs-7" sm="7">
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
      <Row className="mb-3">
        <Col
        // className="vstack"
        >
          <Col className="col col-xs-2" sm="2">
            <img
              className="screenshots"
              src={TLLight}
              alt="Teach League screenshot"
            ></img>
          </Col>
          <br></br>
          <Col className="col col-xs-2" sm="2">
            <img
              className="screenshots"
              src={TL}
              alt="Teach League screenshot"
            ></img>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
