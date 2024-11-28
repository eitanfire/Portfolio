import { Container, Col, Row } from "reactstrap";

const CredentialInfo = () => {
  return (
    <Container>
      <Row>
        <Col>
          {/* {" • "} */}
          <a
            href="https://drive.google.com/file/d/17CB9MFkYkhR0LrMK5LZPCDxhgVIO1ek4/view?usp=sharing"
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
