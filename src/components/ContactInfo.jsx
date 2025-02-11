import React from "react";
import EmailContact from "../components/Contact Info/EmailContact";
import PhoneContact from "../components/Contact Info/PhoneContact";
import CredentialInfo from "./Contact Info/CredentialInfo";
import { Container, Col, Row } from "reactstrap";

const ContactInfo = () => {
  return (
    <Container className="contact-info">
      <Row className="">
        <Col className="col-4 phone-contact">
          <PhoneContact />
        </Col>
        <Col className="col-4 credential-contact">
          <CredentialInfo />
        </Col>
        <Col className="col-4 email-contact">
          <EmailContact />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
