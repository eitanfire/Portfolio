import { Container } from "reactstrap";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ConactInfo from "./components/ContactInfo";
import CiteIcons8 from "./components/CiteIcons8";
import "./App.css";

function App() {
  return (
    <Container className="wrapper col col-12">
      <ConactInfo />
      <h1 className="main-title">
        <span className="eitan-fires">Eitan Fire's</span>
        {"\n"}
        <span className="latest-projects">
          Latest Pro<span className="j-from-projects">j</span>ects
        </span>
      </h1>
      <p className="intro-text">
        I'm a software engineer with 14 years of teaching experience seeking a
        full-stack developer role. I am passionate about creating responsive and
        mobile-first design websites and web applications.
      </p>
      <Technologies />
      {/* <DeclarativeProjects /> */}
      <Projects />
      <CiteIcons8 />
      <ConactInfo />
    </Container>
  );
}

export default App;
