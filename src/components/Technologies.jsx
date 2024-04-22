import { Container, Col, Row } from "reactstrap";

const Technologies = () => {
  return (
    <Container>
      {/* <h2 className="technologies-title">Latest Technologies</h2> */}
      <Row className="technologies">
        <Col>
          <section className="technologies-section">
            <h3 className="technologies-subsection-title">Frontend</h3>
            Semantic HTML, CSS, SCSS, JavaScript, JSX, React Redux
          </section>
        </Col>
        <Col className="col col-12 col-sm-6 col-md-4 col-xl-4">
          <section className="technologies-section">
            <h3 className="technologies-subsection-title">Frameworks</h3>
            React, React Native, Ruby on Rails, Reactstrap, Bootstrap, Git,
            GitHub
          </section>
        </Col>
        <Col className="col col-12 col-md-4">
          <section className="technologies-section">
            <h3 className="technologies-subsection-title">Backend</h3>
            NoSQL, NodeJS, Express, Firebase, Ruby, RESTful web services, JSON
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;
