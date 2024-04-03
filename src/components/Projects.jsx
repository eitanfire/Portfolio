import TL from "../assets/img/tl-ss.png";
import TLLight from "../assets/img/tl-light-ss.png";
import Class from "../assets/img/class-website-ss.png";
import About from "../assets/img/class-website-about-me-sm-ss.png";
import Leaderboard from "../assets/img/leaderboard--ss.png";
import Therapy from "../assets/img/body-therapy-arts-ss.png";
import Lotus from "../assets/img/lotus.png";
import Transparent from "../assets/img/Color-Explosion.png";
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
          <a
            href="https://teach-league.web.app/"
            target="_blank"
            rel="noreferrer"
          >
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
          </a>
        </Col>
        <br></br> <br></br>
        <Col>
          <h3>Technologies Utilized</h3>
          <div>
            {" "}
            <i className="fa fa-github">GitHub</i>{" "}
            <i className="fa-brands fa-html5">HTML</i>
          </div>
        </Col>
        <Col className="description col col-12 col-xl-8">
          <p>
            This web app allows educators to search by credit through a database
            of high-quality curricula I have built and curated over my 14 years
            of experience as a teacher and is adapted to further support
            educators with illuminating content and an opt-in email newsletter.
            Ultimately this platform will elevate the voices of all educators,
            but{" "}
            <a href="https://fakerjs.dev/" target="_blank" rel="noreferrer">
              Faker.js
            </a>{" "}
            has been excellent in the meantime for adding Lorem Ipsum and
            generic user data as I have been designing this project. This app
            also uses Google Classroom API to provide teachers with an emergency
            lesson plan they can easily assign to their students.
          </p>
          <p>
            Users can click on the light bulb to toggle between a light and dark
            theme. Attention is paid to maximizing accessibility and ease of use
            in the interface for all users. For example, check out how the tab
            title changes on the homepage when you navigate to the Teacher’s
            Lounge section.
          </p>
        </Col>
      </Row>
      <h2 className="title">👨🏻‍🏫 Class Dashboard</h2>
      <Row className=" mb-3">
        <Col className="description col d-none d-xl-block col-xl-8">
          <p>
            I developed this website to help my students more easily access
            relevant school and course information. Students can quickly locate
            learning activities on the top fold of the homepage. Scrolling down
            the calendar shows due dates for any assignments originated in
            Google Classroom and school-wide events. I took a data-driven
            approach to our school’s end-of-day ritual by recording community
            shout-outs and displaying them on the carousel under the homepage
            header. Community members can also add shout-outs directly by
            clicking the button on the left menu.
          </p>
          <p>
            I use the date API to conditionally render a component that informs
            students if it is an A day or a B day according to their schedule. I
            leveraged this same API to keep all other date-related information
            seamlessly updated such as my years teaching on the{" "}
            <a
              href="https://eitans.website/read-more"
              target="_blank"
              rel="noreferrer"
            >
              read more page
            </a>
            , as another example. The layout of each page adjusts responsively
            according to screen size so students can still access and use the
            website on their phones or tablets.
          </p>
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
          <a href="https://eitans.website/" target="_blank" rel="noreferrer">
            <Col className="screenshot-container class-website-screenshot-container-xl-xxl col d-md-none d-xl-block col-xl-2">
              <Col>
                <img
                  className="screenshots"
                  src={Class}
                  alt="Class website screenshot"
                ></img>
              </Col>
              <br></br>
              <Col>
                <img
                  className="screenshots about-screenshot"
                  src={About}
                  alt="About me screenshot"
                ></img>
              </Col>
            </Col>
            <Col className="hstack">
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={Class}
                  alt="Class website screenshot"
                ></img>
              </Col>
              <br></br>
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={About}
                  alt="About me screenshot"
                ></img>
              </Col>
            </Col>
          </a>
        </Col>
        <Col className="col">
          <div className="xl-project-links-rightside project-links d-md-none d-lg-block">
            <a href="https://eitans.website/" target="_blank" rel="noreferrer">
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          <br></br>
          <div className="xl-project-links-rightside project-links d-md-none d-lg-block">
            <a
              href="https://github.com/eitanfire/Eitans-Website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
          </div>
        </Col>

        <Col className="description col col-12 d-xl-none">
          <p>
            I developed this website to help my students more easily access
            relevant school and course information. Students can quickly locate
            learning activities on the top fold of the homepage. Scrolling down
            the calendar shows due dates for any assignments originated in
            Google Classroom and school-wide events. I took a data-driven
            approach to our school’s end-of-day ritual by recording community
            shout-outs and displaying them on the carousel under the homepage
            header. Community members can also add shout-outs directly by
            clicking the button on the left menu.
          </p>
          <p>
            I use the date API to conditionally render a component that informs
            students if it is an A day or a B day according to their schedule. I
            leveraged this same API to keep all other date-related information
            seamlessly updated such as my years teaching on the{" "}
            <a
              href="https://eitans.website/read-more"
              target="_blank"
              rel="noreferrer"
            >
              read more page
            </a>{" "}
            page, as another example. The layout of each page adjusts
            responsively according to screen size so students can still access
            and use the website on their phones or tablets.
          </p>
        </Col>
      </Row>
      <h2 className="title">👻 Halloween Contest Leaderboard</h2>
      <Row className="mb-3">
        <Col className="col">
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://halloween-contest-leaderboard.web.app/"
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
              href="https://github.com/eitanfire/costume-contest-scoreboard"
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
                href="https://halloween-contest-leaderboard.web.app/"
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
                href="https://github.com/eitanfire/costume-contest-scoreboard"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i> GitHub
              </a>
            </div>
          </Col>
          <a
            href="https://halloween-contest-leaderboard.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Col className="screenshot-container col d-md-none d-xl-block col-xl-2">
              <Col>
                <img
                  className="screenshots"
                  src={Leaderboard}
                  alt="Leaderboard screenshot"
                ></img>
              </Col>
            </Col>
            <Col className="vstack">
              <Col className="hstack ">
                <Col className="d-none d-md-block col-md-1 d-xl-none">
                  <img
                    className="transparent-screenshots-md-lg leaderboard-screenshot-md screenshots-md-lg"
                    src={Transparent}
                    alt="Leaderboard screenshot"
                  ></img>
                </Col>
                <Col className="d-none d-md-block d-xl-none">
                  <img
                    className="screenshots-md-lg"
                    src={Leaderboard}
                    alt="Leaderboard screenshot"
                  ></img>
                </Col>
                <br></br>
              </Col>
            </Col>
          </a>
        </Col>
        <Col className="description col col-12 col-xl-8">
          <p>
            A few years ago I started the tradition of a Halloween costume
            contest at my school. Students compete by showing off their costumes
            while I project an accompanying music video they’ve selected in the
            background. Having tracked student scores manually for years, I
            envisioned a program that could not only track scores but also
            broadcast participants’ standings to spectators in real-time. I
            could not find an app that already provided this kind of leaderboard
            and that’s when I determined to solve this problem with programming.
          </p>
          <p>
            I found a tutorial for creating a scoreboard using React,
            JavaScript, CSS, and HTML. I aim to write clean code in a functional
            style and I also don't hesitate to tackle class-based components
            found in legacy code such as those used by the tutorial. Using its
            initial guidance, I personalized my solution by successfully
            creating a leaderboard that pairs participants’ names and scores, as
            well as the link to the music videos they selected. I also ensured
            the data was saved on local storage to prevent any loss in the event
            of an accidental browser refresh. With all my bases covered, I was
            free to MC the contest!
          </p>
        </Col>
      </Row>
      <h2 className="title">🧘🏽‍♀️Body Therapy Arts</h2>
      <Row className=" mb-3">
        <Col className="description col d-none d-xl-block col-xl-8">
          <p>
            Body Therapy Arts has been offering a range of holistic services to
            Encinitas, CA for over 30 years. They are in need of a more
            efficient and modern solution to their marketing needs than their
            current site provides. This project is in progress so be sure to
            check in the near future for how it develops. Because I am building
            this for a client I can’t share the source code.
          </p>
        </Col>
        <Col className="col col-12 col-xl hstack">
          <div className="project-links-md d-none d-md-block d-lg-none">
            <a
              href="https://body-therapy-arts-encinitas.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          {/* <br></br> */}
          {/* <div className="project-links-md d-none d-md-block d-lg-none">
            <a
              href="https://github.com/eitanfire/Eitans-Website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
          </div> */}
        </Col>
        <Col>
          <a
            href="https://body-therapy-arts-encinitas.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Col className="screenshot-container class-website-screenshot-container-xl-xxl col d-md-none d-xl-block col-xl-2">
              <Col>
                <img
                  className="screenshots"
                  src={Therapy}
                  alt="Class website screenshot"
                ></img>
              </Col>
              {/* <br></br>
              <Col>
                <img
                  className="screenshots about-screenshot"
                  src={Lotus}
                  alt="About me screenshot"
                ></img>
              </Col> */}
            </Col>
            <Col className="hstack">
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={Therapy}
                  alt="Class website screenshot"
                ></img>
              </Col>
              <br></br>
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={Lotus}
                  alt="About me screenshot"
                ></img>
              </Col>
            </Col>
          </a>
        </Col>
        <Col className="col">
          <div className="xl-project-links-rightside project-links d-md-none d-lg-block">
            <a
              href="https://body-therapy-arts-encinitas.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Demo
            </a>
          </div>
          {/* <br></br> */}
          {/* <div className="xl-project-links-rightside project-links d-md-none d-lg-block">
            <a
              href="https://github.com/eitanfire/Eitans-Website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
          </div> */}
        </Col>

        <Col className="description col col-12 d-xl-none">
          <p>
            Body Therapy Arts has been offering a range of holistic services to
            Encinitas, CA for over 30 years. They are in need of a more
            efficient and modern solution to their marketing needs than their
            current site provides. This project is in progress so be sure to
            check in the near future for how it develops. Because I am building
            this for a client I can’t share the source code.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
