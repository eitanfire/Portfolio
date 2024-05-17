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
    <Container 
    className=""
    >
      <PhoneContact />
      <CredentialInfo />
      {/* <a href="tel:+13038177843">
        <i className="fa fa-phone"></i> Phone
      </a>
      <span className="d-none d-sm-inline">{" • "}</span> */}
      {/* <span className="d-block d-sm-none"></span>
      <a href="mailto:eitanfire@gmail.com">
        <i className="fa fa-envelope-o"></i> Email
      </a>{" "}
      <a href="#" onClick={handleMagnifyingGlassClick}>
        <i className="fa fa-search">&nbsp;</i>
      </a>{" "}
      {isEmailVisible && (
        <span
          id="emailInput"
          style={{ cursor: "pointer" }}
          onClick={handleCopyClick}
        >
          eitanfire@gmail.com
        </span>
      )} */}
      <EmailContact />
    </Container>
  );
};

export default ContactInfo;
