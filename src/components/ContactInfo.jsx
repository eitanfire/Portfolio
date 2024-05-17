import React, { useState } from "react";
import EmailContact from "../components/Contact Info/EmailContact";
import PhoneContact from "../components/Contact Info/PhoneContact";
import CredentialInfo from "./Contact Info/CredentialInfo";
import { Container, Col, Row } from "reactstrap";

const ContactInfo = () => {
  const [isEmailVisible, setEmailVisible] = useState(false);

  const handleMagnifyingGlassClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the click event
    setEmailVisible(true);
  };

  const handleCopyClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the click event

    const emailInput = document.getElementById("emailInput");
    const email = emailInput.textContent.trim(); // Get the text content of the span and trim any whitespace
    navigator.clipboard.writeText(email); // Copy the trimmed email to the clipboard
    setEmailVisible(false);
    localStorage.setItem("copiedEmail", email);
    alert("Email address copied!");
  };

  return (
    <Container className="">
      <Row className="contact-info">
        <Col className="col-4 col-md-4 phone-contact">
          <PhoneContact />
        </Col>
        <Col className="col-4 col-md-3 credential-contact">
          <CredentialInfo />
        </Col>
        <Col className="col-4 col-md-4 email-contact">
          <EmailContact />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
