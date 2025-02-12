import React, { useState } from "react";
import { Col } from "reactstrap";

const ContactItem = ({ type, value, formattedValue, icon, storageKey }) => {
  const [isVisible, setVisible] = useState(false);

  const handleCopy = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(value);
    localStorage.setItem(storageKey, value);
    setVisible(!isVisible);
    alert(`${type} copied!`);
  };

  const getHref = () => {
    switch (type.toLowerCase()) {
      case "phone":
        return `tel:${value}`;
      case "email":
        return `mailto:${value}`;
      default:
        return "#";
    }
  };

  return (
    <div>
      <a href={getHref()}>
        <i className={`fa ${icon} me-1`}></i>
        {type}
      </a>{" "}
      <a href="#" onClick={handleCopy}>
        <i className="fa fa-copy">&nbsp;</i>
      </a>{" "}
      {isVisible && (
        <Col
          className="12"
          id={`${type.toLowerCase()}Input`}
          style={{ cursor: "pointer" }}
          onClick={handleCopy}
        >
          {formattedValue || value}
        </Col>
      )}
    </div>
  );
};

export default ContactItem;
