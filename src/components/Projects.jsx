import TL from "../assets/img/tl-ss.png";
import TLLight from "../assets/img/tl-light-ss.png";
import Class from "../assets/img/class-website-ss.png";
import About from "../assets/img/class-website-about-me-sm-ss.png";
import Leaderboard from "../assets/img/leaderboard--ss.png";
import Therapy from "../assets/img/body-therapy-arts-ss.png";
import Lotus from "../assets/img/lotus.png";
import Transparent from "../assets/img/Color-Explosion.png";
import { Container, Col, Row } from "reactstrap";
import { reduxIcon } from "../svgIcons";

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
        {/* <br></br> <br></br> */}
        <Col>
          <h3 className="technologies-utilized-title">Technologies Utilized</h3>
          <div>
            {" "}
            <i className="fa-brands fa-html5"> </i> HTML{" "}
            <i className="fa-brands fa-bootstrap"> </i> Bootstrap{" "}
            <i className="fa-brands fa-css3-alt"> </i> CSS{" "}
            <i className="fa-brands fa-js"> </i> Javascript{" "}
            <i className="fa-brands fa-react"> </i> React{" "}
            <svg width="20" height="auto" viewBox="0 0 24 24">
              <path d="M 11.5 2 C 8.416 2 6 5.5822969 6 10.154297 C 6 12.224297 6.5020781 14.081906 7.3300781 15.503906 C 7.2830781 15.662906 7.25 15.826 7.25 16 C 7.25 16.966 8.034 17.75 9 17.75 C 9.966 17.75 10.75 16.966 10.75 16 C 10.75 15.034 9.966 14.25 9 14.25 C 8.976 14.25 8.9536875 14.256813 8.9296875 14.257812 C 8.3596875 13.159813 8 11.719297 8 10.154297 C 8 6.8182969 9.603 4 11.5 4 C 12.786 4 13.934969 5.2969219 14.542969 7.1699219 C 15.285969 7.2889219 16.026672 7.4920937 16.763672 7.7460938 C 16.085672 4.3850938 14.016 2 11.5 2 z M 11.375 8.5 C 10.409 8.5 9.625 9.284 9.625 10.25 C 9.625 11.216 10.409 12 11.375 12 C 12.062 12 12.6505 11.601391 12.9375 11.025391 C 14.2305 11.083391 15.669344 11.458359 17.027344 12.193359 C 18.987344 13.255359 20.465813 14.885219 20.882812 16.449219 C 21.097812 17.252219 21.021156 17.957922 20.660156 18.544922 C 19.942156 19.712922 18.226531 20.180594 16.269531 19.933594 C 15.690531 20.524594 15.0295 21.067594 14.3125 21.558594 C 15.3125 21.850594 16.303328 22.001953 17.236328 22.001953 C 19.470328 22.001953 21.383281 21.18675 22.363281 19.59375 C 23.015281 18.53375 23.171453 17.268594 22.814453 15.933594 C 22.250453 13.826594 20.441516 11.769547 17.978516 10.435547 C 16.179516 9.4605469 14.307281 9.0066719 12.613281 9.0136719 C 12.296281 8.6956719 11.859 8.5 11.375 8.5 z M 4.0976562 11.742188 C 2.6376563 12.951187 1.5905 14.426594 1.1875 15.933594 C 0.8305 17.268594 0.98667187 18.533797 1.6386719 19.591797 C 2.6166719 21.184797 4.530625 22 6.765625 22 C 8.457625 22 10.333 21.536453 12.125 20.564453 C 13.835 19.638453 15.216656 18.361844 16.097656 16.964844 C 16.896656 16.802844 17.5 16.097 17.5 15.25 C 17.5 14.284 16.716 13.5 15.75 13.5 C 14.784 13.5 14 14.284 14 15.25 C 14 15.576 14.095953 15.878625 14.251953 16.140625 C 13.544953 17.155625 12.468828 18.105641 11.173828 18.806641 C 8.0548281 20.495641 4.4658438 20.374969 3.3398438 18.542969 C 2.9788438 17.955969 2.9041406 17.252219 3.1191406 16.449219 C 3.3371406 15.634219 3.8475469 14.801063 4.5605469 14.039062 C 4.3425469 13.314063 4.1876563 12.545187 4.0976562 11.742188 z"></path>
            </svg>{" "}
            {/* <span svg={reduxIcon}></span>
            <reduxIcon /> */}
            Redux{" "}
            <svg x="0px" y="0px" width="22" height="auto" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                // fill="#ffca28"
              ></circle>
              <polygon
                fill="#fff"
                points="32,19.13 32,22.45 24,18.66 16,22.45 16,19.13 24,15.34"
              ></polygon>
              <polygon
                fill="#fff"
                points="32,25.13 32,28.45 24,24.66 16,28.45 16,25.13 24,21.34"
              ></polygon>
              <polygon
                fill="#fff"
                points="29.43,30.45 23,33.1 23,29.85 25.77,28.71"
              ></polygon>
            </svg>
            <i className="fa-brands fa-firestore"> </i> Firestore{" "}
            <svg
              // x="0px"
              // y="0px"
              width="20"
              height="auto"
              viewBox="0 0 24 24"
            >
              <path d="M21.612,17.714l-2.125-13c-0.059-0.358-0.307-0.657-0.649-0.78c-0.342-0.121-0.724-0.05-0.997,0.189l-3.247,2.845	l-1.829-3.551c-0.166-0.321-0.492-0.528-0.853-0.541c-0.362-0.013-0.701,0.169-0.89,0.478L9.93,5.14L7.592,0.521	c-0.191-0.377-0.603-0.585-1.019-0.54c-0.42,0.054-0.76,0.366-0.85,0.78l-3.7,17.026c-0.117,0.539,0.225,1.072,0.765,1.189	c0.027,0.006,0.054,0.005,0.081,0.009c0.003,0.001,0.004,0.004,0.007,0.005l8.455,4.875C11.485,23.955,11.657,24,11.83,24	c0.174,0,0.348-0.045,0.503-0.136l8.795-5.125C21.486,18.53,21.679,18.123,21.612,17.714z M11.801,5.915l1.242,2.411l-1.039,0.91	l-1.012-1.998L11.801,5.915z M10.451,10.597l-3.244,2.842l2.56-4.193L10.451,10.597z M7.079,3.937l1.626,3.211l-3.607,5.907	L7.079,3.937z M11.827,21.844l-6.742-3.887l7.357-6.446c0.007-0.008,0.016-0.012,0.023-0.02l5.339-4.677l1.724,10.543L11.827,21.844	z"></path>
            </svg>
            <i className="fa-brands fa-firebase"> </i> Firebase Auth{" "}
            <i className="fa-brands fa-node"> </i> NodeJS{" "}
            <svg x="0px" y="0px" width="20" height="auto" viewBox="0 0 32 32">
              <path d="M 15.994141 3 C 15.629141 3 15.264219 3.0895313 14.949219 3.2695312 L 5.0390625 8.9902344 C 4.3990625 9.3602344 4 10.060781 4 10.800781 L 4 21.179688 C 4 21.929688 4.3990625 22.620234 5.0390625 22.990234 L 7.640625 24.490234 C 8.900625 25.110234 9.3499219 25.109375 9.9199219 25.109375 C 11.789922 25.109375 12.859375 23.979531 12.859375 22.019531 L 12.859375 11.310547 C 12.859375 11.150547 12.730312 11.019531 12.570312 11.019531 L 11.320312 11.019531 C 11.150313 11.019531 11.029297 11.150547 11.029297 11.310547 L 11.029297 22.009766 C 11.029297 22.889766 10.120391 23.749531 8.6503906 23.019531 L 5.9296875 21.449219 C 5.8296875 21.399219 5.7695313 21.289687 5.7695312 21.179688 L 5.7695312 10.810547 C 5.7695312 10.690547 5.8296875 10.589297 5.9296875 10.529297 L 15.839844 4.8105469 C 15.929844 4.7505469 16.050391 4.7505469 16.150391 4.8105469 L 26.060547 10.529297 C 26.160547 10.589297 26.220703 10.690781 26.220703 10.800781 L 26.220703 21.179688 C 26.220703 21.289687 26.160313 21.399219 26.070312 21.449219 L 16.150391 27.179688 C 16.060391 27.229688 15.929844 27.229688 15.839844 27.179688 L 13.289062 25.669922 C 13.219062 25.619922 13.120781 25.610391 13.050781 25.650391 C 12.340781 26.050391 12.210781 26.100078 11.550781 26.330078 C 11.390781 26.380078 11.140625 26.479766 11.640625 26.759766 L 14.949219 28.720703 C 15.269219 28.900703 15.630234 29 15.990234 29 C 16.360234 29 16.719062 28.900703 17.039062 28.720703 L 26.960938 22.990234 C 27.600938 22.620234 28 21.929688 28 21.179688 L 28 10.810547 C 28 10.060547 27.600938 9.37 26.960938 9 L 17.039062 3.2695312 C 16.724063 3.0895313 16.359141 3 15.994141 3 z M 18.660156 11.005859 C 15.830156 11.005859 14.140625 12.205078 14.140625 14.205078 C 14.140625 16.375078 15.819062 16.974141 18.539062 17.244141 C 21.789062 17.564141 22.039062 18.045547 22.039062 18.685547 C 22.039062 19.785547 21.150547 20.255859 19.060547 20.255859 C 16.430547 20.255859 15.850156 19.594922 15.660156 18.294922 C 15.640156 18.154922 15.520859 18.054688 15.380859 18.054688 L 14.089844 18.054688 C 13.929844 18.054688 13.810547 18.185938 13.810547 18.335938 C 13.810547 20.005937 14.720547 21.994141 19.060547 21.994141 C 22.200547 21.994141 24 20.755703 24 18.595703 C 24 16.455703 22.549766 15.884609 19.509766 15.474609 C 16.419766 15.074609 16.109375 14.864531 16.109375 14.144531 C 16.109375 13.544531 16.380156 12.755859 18.660156 12.755859 C 20.690156 12.755859 21.449766 13.194453 21.759766 14.564453 C 21.789766 14.694453 21.899062 14.794922 22.039062 14.794922 L 23.330078 14.794922 C 23.410078 14.794922 23.479063 14.755313 23.539062 14.695312 C 23.589062 14.645313 23.619375 14.564609 23.609375 14.474609 C 23.409375 12.114609 21.840156 11.005859 18.660156 11.005859 z"></path>
            </svg>
            <i className="fa-brands fa-express"> </i> Express{" "}
            <svg x="0px" y="0px" width="20" height="auto" viewBox="0 0 50 50">
              <path d="M 9.6601562 5.9589844 C 8.2180589 5.9589844 7.0175781 7.1415381 7.0175781 8.5859375 L 7.0175781 13.263672 C 6.2450497 13.528472 5.5501554 14.004327 5.0214844 14.650391 C 4.1795173 15.678012 3.8441628 17.033667 4.1113281 18.335938 C 5.041439 22.835238 6.3660682 29.257349 6.4140625 29.490234 C 6.3656925 29.724816 5.0472016 36.115366 4.1191406 40.615234 C 3.8492797 41.924512 4.1870816 43.286166 5.0332031 44.320312 C 5.8811224 45.353795 7.1513288 45.955078 8.4921875 45.955078 L 41.402344 45.955078 C 42.759109 45.955078 44.044582 45.347837 44.904297 44.300781 L 44.90625 44.300781 C 45.765468 43.252767 46.104537 41.872127 45.832031 40.546875 C 44.90391 36.048677 43.598552 29.71982 43.550781 29.488281 C 43.599171 29.253188 44.921561 22.825977 45.849609 18.326172 C 46.117233 17.02684 45.784999 15.672861 44.941406 14.644531 C 44.424618 14.013606 43.748644 13.549841 42.998047 13.283203 L 42.998047 8.5859375 C 42.998047 7.1415381 41.797566 5.9589844 40.355469 5.9589844 L 9.6601562 5.9589844 z M 9.6601562 7.9589844 L 40.355469 7.9589844 C 40.727371 7.9589844 40.998047 8.2343369 40.998047 8.5859375 L 40.998047 13.023438 L 9.0175781 13.023438 L 9.0175781 8.5859375 C 9.0175781 8.2343369 9.2882536 7.9589844 9.6601562 7.9589844 z M 8.4628906 15.023438 L 41.507812 15.023438 C 42.241368 15.023438 42.933485 15.349237 43.394531 15.912109 L 43.394531 15.914062 C 43.856939 16.477733 44.037001 17.21316 43.890625 17.923828 L 43.892578 17.923828 C 42.947501 22.506202 41.550781 29.287109 41.550781 29.287109 L 41.509766 29.488281 L 41.550781 29.691406 C 41.550781 29.691406 42.928044 36.369206 43.873047 40.949219 C 44.024541 41.685967 43.838157 42.447264 43.359375 43.03125 C 42.87909 43.616194 42.163579 43.955078 41.402344 43.955078 L 8.4921875 43.955078 C 7.7470462 43.955078 7.0481588 43.623252 6.5800781 43.052734 C 6.113136 42.481041 5.9301199 41.737604 6.078125 41.019531 C 7.0231337 36.437489 8.4140625 29.691406 8.4140625 29.691406 L 8.4550781 29.488281 L 8.4140625 29.287109 C 8.4140625 29.287109 7.0174352 22.513234 6.0703125 17.931641 C 5.9243921 17.2174 6.1059999 16.48158 6.5683594 15.917969 L 6.5703125 15.916016 C 7.0325676 15.351116 7.7280513 15.023437 8.4628906 15.023438 z M 19.988281 21.902344 C 15.559281 21.902344 15.163625 25.924344 15.140625 26.902344 L 17.013672 26.902344 C 17.041672 26.228344 17.352281 23.605469 19.988281 23.605469 C 22.456281 23.605469 22.798828 25.307203 22.798828 26.158203 C 22.798828 26.584203 22.542359 28.710938 19.818359 28.710938 L 19.052734 28.710938 L 19.052734 30.328125 C 19.392734 30.243125 19.733203 30.242187 20.158203 30.242188 C 20.583203 30.242188 23.478516 30.328656 23.478516 33.222656 C 23.478516 36.030656 20.499219 36.285156 20.074219 36.285156 C 18.565219 36.285156 16.816672 35.369344 16.763672 32.902344 L 14.884766 32.902344 C 14.901766 34.129344 15.274219 37.902344 20.074219 37.902344 C 21.010219 37.902344 25.435547 37.647719 25.435547 33.136719 C 25.435547 30.328719 23.562953 29.476641 22.626953 29.306641 L 22.626953 29.222656 C 23.222953 28.882656 24.755859 27.859266 24.755859 26.072266 C 24.755859 25.391266 24.584281 21.902344 19.988281 21.902344 z M 32.544922 22.015625 C 32.294922 23.115625 31.798594 23.87125 31.058594 24.28125 C 30.318594 24.69125 29.318641 24.896484 28.056641 24.896484 L 28.056641 26.304688 L 31.972656 26.304688 L 31.972656 37.591797 L 34.017578 37.591797 L 34.017578 22.015625 L 32.544922 22.015625 z"></path>
            </svg>{" "}
            Google Calendar API <i className="fa fa-github"> </i> GitHub{" "}
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
