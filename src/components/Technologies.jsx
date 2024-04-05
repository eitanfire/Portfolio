import { Container, Col, Row } from "reactstrap";

const Technologies = () => {
  return (
    <Container>
      <h2 className="technologies-title">Latest Technologies</h2>
      <Row className="technologies">
        <Col>
          <section className="technologies-section">
            <h3 className="technologies-subsection-title">Front-End</h3>
            Semantic HTML, CSS, SCSS, JavaScript, JSX, React Redux
          </section>
        </Col>
        <Col className="col col-12 col-sm-6 col-md-4 col-xl-4">
          <section className="technologies-section">
            <h3 className="technologies-subsection-title">Frameworks</h3>
            React, React Native, Ruby on Rails, Bootstrap, Git
          </section>
        </Col>
        <Col className="col col-12 col-md-4">
          <section className="technologies-section">
            <h3 className="technologies-subsection-title">Back-End</h3>
            NodeJS, Express, Firebase, Ruby, API, RESTful web services
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;
