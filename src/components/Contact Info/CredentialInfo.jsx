import { Container, Col, Row } from "reactstrap";

const CredentialInfo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <a
            href="https://drive.google.com/file/d/12qCB8QA41-RbLyfJ8hla0fmuwe7MdUiI/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-image-portrait fa-sm me-1"></i>Resume
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/eitanfire/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin me-1"></i>LinkedIn
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default CredentialInfo;
