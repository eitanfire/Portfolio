import TL from "../assets/img/tl-ss.png";
import TLLight from "../assets/img/tl-light-ss.png";
import Class from "../assets/img/class-website-ss.png";
import About from "../assets/img/class-website-about-me-sm-ss.png";
import Leaderboard from "../assets/img/leaderboard--ss.png";
import { Container, Col, Row } from "reactstrap";

const Projects = () => {
  return (
    <Container>
      <h2 className="title">🚀 Teach League</h2>
      <Row className="mb-3">
        <Col className="col">
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://teach-league.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          <br></br>
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://github.com/eitanfire/legendary-quest.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
          </div>
        </Col>
        <Col>
          <Col
            className="col col-12 
        hstack"
          >
            <div className="project-links-md d-none d-md-block d-lg-none">
              <a
                href="https://teach-league.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-circle-play"></i> Live Demo
              </a>
            </div>
            <br></br>
            <div className="project-links-md d-none d-md-block d-lg-none">
              <a
                href="https://github.com/eitanfire/legendary-quest.git"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i> GitHub
              </a>
            </div>
          </Col>
          <Col className="screenshot-container col d-md-none d-xl-block col-xl-2">
            <Col>
              <img
                className="screenshots"
                src={TLLight}
                alt="Teach League screenshot"
              ></img>
            </Col>
            <br></br>
            <Col>
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
                className="screenshots-md-lg"
                src={TLLight}
                alt="Teach League screenshot"
              ></img>
            </Col>
            <br></br>
            <Col className="d-none d-md-block d-xl-none">
              <img
                className="screenshots-md-lg"
                src={TL}
                alt="Teach League screenshot"
              ></img>
            </Col>
          </Col>
        </Col>
        <Col className="description col col-12 col-xl-8">
          <p>
            As a teacher with 14 years of experience, I am eager to offer
            support and mentorship to my colleagues. This web app shares the
            high-quality curriculum I have built over the years.
          </p>
          <p>
            I help teachers stay sharp as professionals by curating illuminating
            articles and ultimately to support their voices.
          </p>
          <Col className="col">
            <p>
              I used the Google Classroom API to provide them with an emergency
              lesson plan they can easily assign to their students.
            </p>
            <p></p>
            <p>
              Users can click on the light bulb to toggle between a light and
              dark theme and this preference will be saved to the local storage
              of their device so pages can be reloaded without reverting. This
              website is optimized for the screen size found in the full range
              of devices.
            </p>
          </Col>
        </Col>
      </Row>
      <h2 className="title">👨🏻‍🏫 Class Website</h2>
      <Row className="mb-3">
        <Col className="description col d-none d-xl-block col-xl-8">
          <p>
            I created this class website to support my students in getting the
            information they need to be successful in class. I used the date API
            to conditionally render a component that lets them know if it is an
            A day or a B day within the block schedule we follow. I leveraged
            this same API to keep all other date-related information seamlessly
            updated such as the information found on the "About Me" page. The
            layout of this web app adjusts responsively according to screen
            size.
          </p>
          <Col className="col">
            <p>
              I created an accordion that gives students quick access to
              assignments and documents they need for the day. The calendar
              shows important school events and the due dates for any
              assignments their teachers assign on Google Classroom. The
              carousel raises community spirit by "shouting out" students and
              staff for taking pride in their community.
            </p>
          </Col>
        </Col>
        <Col className="col col-12 col-xl hstack">
          <div className="project-links-md d-none d-md-block d-lg-none">
            <a href="https://eitans.website/" target="_blank" rel="noreferrer">
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          <br></br>
          <div className="project-links-md d-none d-md-block d-lg-none">
            <a
              href="https://github.com/eitanfire/Eitans-Website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
          </div>
        </Col>
        <Col>
          <Col className="screenshot-container col d-md-none d-xl-block">
            <Col>
              <img
                className="screenshots"
                src={Class}
                alt="Teach League screenshot"
              ></img>
            </Col>
            <br></br>
            <Col>
              <img
                className="screenshots about-screenshot"
                src={About}
                alt="Teach League screenshot"
              ></img>
            </Col>
          </Col>
          <Col className="hstack">
            <Col className="d-none d-md-block d-xl-none">
              <img
                className="screenshots-md-lg"
                src={Class}
                alt="Teach League screenshot"
              ></img>
            </Col>
            <br></br>
            <Col className="d-none d-md-block d-xl-none">
              <img
                className="screenshots-md-lg"
                src={About}
                alt="Teach League screenshot"
              ></img>
            </Col>
          </Col>
        </Col>
        <Col className="col">
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://teach-league.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          <br></br>
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://github.com/eitanfire/legendary-quest.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
          </div>
        </Col>

        <Col className="description col col-12 d-xl-none">
          <p>
            I created this class website to support my students in getting the
            information they need to be successful in class. I used the date API
            to conditionally render a component that lets them know if it is an
            A day or a B day within the block schedule we follow. I leveraged
            this same API to keep all other date-related information seamlessly
            updated such as the information found on the "About Me" page. The
            layout of this web app adjusts responsively according to screen
            size.
          </p>
          <Col className="col">
            <p>
              I created an accordion that gives students quick access to
              assignments and documents they need for the day. The calendar
              shows important school events and the due dates for any
              assignments their teachers assign on Google Classroom. The
              carousel raises community spirit by "shouting out" students and
              staff for taking pride in their community.
            </p>
          </Col>
        </Col>
      </Row>
      <h2 className="title">👻 Costume Contest Scoreboard</h2>
      <Row className="mb-3">
        <Col className="col">
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://teach-league.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          <br></br>
          <div className="project-links d-md-none d-lg-block">
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
          <Col
            className="col col-12 
        hstack"
          >
            <div className="project-links-md d-none d-md-block d-lg-none">
              <a
                href="https://teach-league.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-circle-play"></i> Live Demo
              </a>
            </div>
            <br></br>
            <div className="project-links-md d-none d-md-block d-lg-none">
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
          <Col className="screenshot-container col d-md-none d-xl-block col-xl-2">
            <Col>
              <img
                className="screenshots"
                src={Leaderboard}
                alt="Teach League screenshot"
              ></img>
            </Col>
          </Col>
          <Col className="hstack">
            <Col className="d-none d-md-block d-xl-none">
              <img
                className="screenshots-md-lg"
                src={Leaderboard}
                alt="Teach League screenshot"
              ></img>
            </Col>
            <br></br>
          </Col>
        </Col>
        {/* </Row>
      <Row> */}
        <Col className="description col col-12 col-xl-8">
          <p>
            I aim to write clean code in a functional style but I won't hesitate
            to use class-based components when working with legacy code such as
            the Scoreboard which I started with a tutorial. As a teacher, a
            whiteboard coding interview is not quite as terrifying as having a
            school full of students tensely watching me debug a program to find
            out the costume contest winner!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
