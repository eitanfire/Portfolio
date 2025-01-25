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
        As a software engineer with a background in teaching, I craft
        responsive, mobile-first web apps focused on intuitive user experiences
        using modern frameworks.
      </p>
      <Projects />
      <Technologies />
      <CiteIcons8 />
      <ConactInfo />
    </Container>
  );
}

export default App;
