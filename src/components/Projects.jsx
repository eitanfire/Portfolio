import LeetrbooAuth from "../assets/img/leetrboo-sign-in-ss.png";
import LeetrbooApp from "../assets/img/leetrbooApp.png"
import TL from "../assets/img/tl.png";
import TLAccount from "../assets/img/tl-account-ss.png";
import Class from "../assets/img/class-website-ss.png";
import About from "../assets/img/class-website-about-me-sm-ss.png";
import { Container, Col, Row } from "reactstrap";
import { icons } from "../icons";
import BTAHomepage from "../assets/img/body-therapy-arts-homepage-ss.png";
import BTAServices from "../assets/img/body-therapy-arts-services-ss.png";

const Projects = () => {
  const renderIconsByText = (text) => {
    const filteredIcons = icons.filter((icon) => icon.text === text);
    return filteredIcons.map((icon, index) => (
      <Container>
        <Col className="tech-icons" key={index} xs="">
          {icon.image ? (
            <img src={icon.image} className={icon.className} alt={icon.text} />
          ) : (
            <i className={icon.className}></i>
          )}
          <p>{icon.text}&nbsp;&nbsp;</p>
        </Col>
      </Container>
    ));
  };

  return (
    <Container className="projects">
      <h2 className="title">leetrboo</h2>
      <div className="tech-icons">
        <Row>
          <Col className="col col-md-12 col-lg-6 hstack">
            {/* {renderIconsByText("HTML")} */}
            {renderIconsByText("Bootstrap")}
            {/* {renderIconsByText("CSS")} */}
            {renderIconsByText("TypeScript")}
            {renderIconsByText("React")}
            {renderIconsByText("NodeJS")}
            {/* {renderIconsByText("Express")} */}
          </Col>
          <Col className="col-12 col-lg-5 col-lg-6 hstack">
            {/* {renderIconsByText("Redux")} */}
            {renderIconsByText("SST")}
            {renderIconsByText("OAuth")}
            {renderIconsByText("PostgreSQL")}
            {renderIconsByText("AWS")}
          </Col>
        </Row>
      </div>
      <Row className="row-content row-content-by-spaced-out-tech-icons">
        <Col className="col">
          <div className="project-links d-md-none d-lg-block">
            <a href="https://leetr.boo/" target="_blank" rel="noreferrer">
              <i className="fa fa-circle-play"></i> Live Site
            </a>
          </div>
          <br />
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://github.com/eitanfire/leetrboo.git"
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
              <a href="https://leetr.boo/" target="_blank" rel="noreferrer">
                <i className="fa fa-circle-play"></i> Live Site
              </a>
            </div>
            <br />
            <div className="project-links-md d-none d-md-block d-lg-none">
              <a
                href="https://github.com/eitanfire/leetrboo.git"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i> GitHub
              </a>
            </div>
          </Col>
          <a href="https://leetr.boo/" target="_blank" rel="noreferrer">
            <Col className="screenshot-container col d-md-none d-xl-block col-xl-2">
              <Col>
                <img
                  className="screenshots"
                  src={LeetrbooAuth}
                  alt="Teach League screenshot"
                ></img>
              </Col>
              <br />
              <Col>
                <img
                  className="screenshots"
                  src={LeetrbooApp}
                  alt="Teach League screenshot"
                ></img>
              </Col>
            </Col>
            <Col className="hstack">
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={LeetrbooAuth}
                  alt="Teach League screenshot"
                ></img>
              </Col>
              <br />
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={LeetrbooApp}
                  alt="Teach League screenshot"
                ></img>
              </Col>
            </Col>
          </a>
        </Col>
        <Col className="description single-page-description col col-12 col-xl-8">
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
            The data is saved on Supabase to prevent any loss in the event of an
            accidental browser refresh. With all my bases covered, I have been
            freed to MC the contest!
          </p>
        </Col>
      </Row>
      <h2 className="title">
        {/* 🚀  */}
        Teach League
      </h2>
      <div className="tech-icons">
        <Row>
          <Col className="col col-md-12 col-lg-6 hstack">
            {/* {renderIconsByText("HTML")} */}
            {renderIconsByText("Bootstrap")}
            {/* {renderIconsByText("CSS")} */}
            {/* {renderIconsByText("Javascript")} */}
            {renderIconsByText("React")}
            {renderIconsByText("Google Gemini API")}
            {renderIconsByText("NodeJS")}
            {/* {renderIconsByText("Express")} */}
          </Col>
          <Col className="col-12 col-lg-5 col-lg-6 hstack">
            {renderIconsByText("Redux")}
            {renderIconsByText("Firestore")}
            {renderIconsByText("OAuth")}
            {renderIconsByText("Google Classroom API")}
          </Col>
        </Row>
      </div>
      <Row className="row-content row-content-by-spaced-out-tech-icons">
        <Col className="col">
          <div className="project-links d-md-none d-lg-block">
            <a href="https://teachleague.com/" target="_blank" rel="noreferrer">
              <i className="fa fa-circle-play"></i> Live Site
            </a>
          </div>
          <br />
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
                href="https://teachleague.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-circle-play"></i> Live Site
              </a>
            </div>
            <br />
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
          <a href="https://teachleague.com/" target="_blank" rel="noreferrer">
            <Col className="screenshot-container col d-md-none d-xl-block col-xl-2">
              <Col>
                <img
                  className="screenshots"
                  src={TL}
                  alt="Teach League screenshot"
                ></img>
              </Col>
              <br />
              <Col>
                <img
                  className="screenshots"
                  src={TLAccount}
                  alt="Teach League screenshot"
                ></img>
              </Col>
            </Col>
            <Col className="hstack">
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={TL}
                  alt="Teach League screenshot"
                ></img>
              </Col>
              <br />
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={TLAccount}
                  alt="Teach League screenshot"
                ></img>
              </Col>
            </Col>
          </a>
        </Col>
        <Col className="description col col-12 col-xl-8">
          <p>
            This web app has educators covered from the beginning of class with
            writing prompts{" "}
            <a
              href="https://teachleague.com/warmups"
              target="_blank"
              rel="noreferrer"
            >
              powered by AI
            </a>{" "}
            to the rest of the school year with a database of high-quality
            curricula I have built and curated over 15 years of experience as a
            teacher. This site also uses the Google Classroom API to give
            teachers an emergency lesson plan they can easily assign to their
            students.
          </p>
          <p>
            Followers who want to experience curated content featuring
            cutting-edge teaching practices can opt-in to an emailed newsletter.
            Users can click on the light bulb to toggle between a light and dark
            theme.
          </p>
        </Col>
      </Row>
      <h2 className="title">
        {/* 🧘🏽‍♀️ */}
        Body Therapy Arts
      </h2>
      <div className="tech-icons">
        <Row>
          <Col className="col col-md-12 col-lg-7 hstack">
            {/* {/* {renderIconsByText("HTML")} */}
            {renderIconsByText("Bootstrap")}
            {/* {renderIconsByText("CSS")} */}
            {/* {renderIconsByText("Javascript")} */}
            {renderIconsByText("React")}
            {renderIconsByText("NodeJS")}
            {renderIconsByText("TypeScript")}
          </Col>
          <Col className="col col-sm-11 col-10 mx-auto col-lg-5 col-lg-5 hstack">
            {renderIconsByText("Express")}
            {renderIconsByText("Google Maps API")}
          </Col>
        </Row>
      </div>
      <Row className="row-content row-content-by-spaced-out-tech-icons">
        <Col className="col">
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://bodytherapyarts.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Site
            </a>
          </div>
          <br />
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://github.com/eitanfire/body-therapy-arts"
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
                href="https://bodytherapyarts.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-circle-play"></i> Live Site
              </a>
            </div>
            <br />
            <div className="project-links-md d-none d-md-block d-lg-none">
              <a
                href="https://github.com/eitanfire/body-therapy-arts.git"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github"></i> GitHub
              </a>
            </div>
          </Col>
          <a
            href="https://bodytherapyarts.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Col className="screenshot-container col d-md-none d-xl-block col-xl-2">
              <Col>
                <img
                  className="screenshots"
                  src={BTAHomepage}
                  alt="Body Therapy Arts screenshot"
                ></img>
              </Col>
              <br />
              <Col>
                <img
                  className="screenshots"
                  src={BTAServices}
                  alt="Body Therapy Arts screenshot"
                ></img>
              </Col>
            </Col>
            <Col className="hstack">
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={BTAHomepage}
                  alt="Body Therapy Arts screenshot"
                ></img>
              </Col>
              <br />
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={BTAServices}
                  alt="Body Therapy Arts screenshot"
                ></img>
              </Col>
            </Col>
          </a>
        </Col>
        <Col className="description col col-12 col-xl-8">
          <p>
            Body Therapy Arts has been offering a range of holistic services to
            Encinitas, CA for over 30 years. Clients can use the Google map
            integrated into the site to locate the business. I have set up a
            CI/CD pipeline to streamline maintenance and development. I am
            currently converting this app to TypeScript.
          </p>
        </Col>
      </Row>
      <h2 className="title">
        {/* 👨🏻‍🏫  */}
        Class Dashboard
      </h2>
      <div className="tech-icons">
        <Row>
          <Col className="col col-md-12 col-lg-7 hstack">
            {/* {/* {renderIconsByText("HTML")} */}
            {renderIconsByText("Bootstrap")}
            {/* {renderIconsByText("CSS")} */}
            {/* {renderIconsByText("Javascript")} */}
            {renderIconsByText("React")}
            {renderIconsByText("NodeJS")}
          </Col>
          <Col className="col col-sm-11 col-10 mx-auto col-lg-5 col-lg-5 hstack">
            {renderIconsByText("Express")}
            {renderIconsByText("Google Calendar API")}
          </Col>
        </Row>
      </div>
      <Row className="row-content row-content-by-spaced-out-tech-icons">
        <Col className="col">
          <div className="project-links d-md-none d-lg-block">
            <a
              href="https://class.eitans.website/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-circle-play"></i> Live Site
            </a>
          </div>
          <br />
          <div className="project-links d-md-none d-lg-block">
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
          <Col
            className="col col-12 
        hstack"
          >
            <div className="project-links-md d-none d-md-block d-lg-none">
              <a
                href="https://class.eitans.website/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-circle-play"></i> Live Site
              </a>
            </div>
            <br />
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
          <a
            href="https://class.eitans.website/"
            target="_blank"
            rel="noreferrer"
          >
            <Col className="screenshot-container col d-md-none d-xl-block col-xl-2">
              <Col>
                <img
                  className="screenshots"
                  src={Class}
                  alt="Class Dashboard screenshot"
                ></img>
              </Col>
              <br />
              <Col>
                <img
                  className="screenshots"
                  src={About}
                  alt="Class Dashboard screenshot"
                ></img>
              </Col>
            </Col>
            <Col className="hstack">
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={Class}
                  alt="Class Dashboard screenshot"
                ></img>
              </Col>
              <br />
              <Col className="d-none d-md-block d-xl-none">
                <img
                  className="screenshots-md-lg"
                  src={About}
                  alt="Class Dashboard screenshot"
                ></img>
              </Col>
            </Col>
          </a>
        </Col>
        <Col className="description col col-12 col-xl-8">
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
              href="https://class.eitans.website/read-more"
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
    </Container>
  );
};

export default Projects;
