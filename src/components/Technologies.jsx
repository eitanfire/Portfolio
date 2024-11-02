import { Container, Col, Row } from "reactstrap";

const Technologies = () => {
  return (
    <>
      <h3>Technical Competencies</h3>
      <Container className="technologies">
        AWS, CI/CD, CSS, Express, Firebase, Git, GitHub, GraphQL, JavaScript,
        JSON, JSX, NodeJS, NoSQL, React, React Native, Redux, RESTful web
        services, Ruby, Ruby on Rails, Semantic HTML, SolidJS, SST, TypeScript
        {/* <Row>
        <Col>
          <section className="technologies-section">
            <h3 className="technologies-subsection-title">Frontend</h3>
            React, TypeScript, JavaScript, JSX, Redux, CSS, Semantic HTML
          </section>
        </Col>
        <Col className="col col-12 col-sm-6 col-md-4 col-xl-4">
          <section className="technologies-section">
            <h3 className="technologies-subsection-title">
              Libraries, Frameworks & Version Control{" "}
            </h3>
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
      </Row> */}
      </Container>
    </>
  );
};

export default Technologies;
