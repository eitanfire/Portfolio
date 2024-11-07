import { Container, Col, Row } from "reactstrap";

const CredentialInfo = () => {
  return (
    <Container className="">
      <Row>
        <Col>
          {/* {" • "} */}
          <a
            href="https://drive.google.com/file/d/1oip4i-8qzz0MqjB4UiQ3gEICl_sH7yLQ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-image-portrait fa-sm"></i> Resume
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/eitanfire/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i> LinkedIn
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default CredentialInfo;
