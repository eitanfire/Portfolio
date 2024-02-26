import { Container, Col, Row } from "reactstrap";

const Technologies = () => {
  return (
    <Container>
      <Row>
        <h2 className="technologies-title">Latest Technologies</h2>
        <Col>
          <section className="technologies-section">
            <h2 className="technologies-subsection-title">• Front-End</h2>◊
            HTML, CSS, JavaScript, JSX, Redux
          </section>
        </Col>
        <Col>
          <section className="technologies-section">
            <h2 className="technologies-subsection-title">• Frameworks</h2>◊
            React, React Native, Ruby on Rails, Bootstrap
          </section>
        </Col>
        <Col>
          <section className="technologies-section">
            <h2 className="technologies-subsection-title">• Back-End</h2>◊
            NodeJS, Express, Firebase, Ruby, API, RESTful web services
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Technologies