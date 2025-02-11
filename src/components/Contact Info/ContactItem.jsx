import React, { useState } from "react";
import { Col } from "reactstrap";

const ContactItem = ({ type, value, formattedValue, icon, storageKey }) => {
  const [isVisible, setVisible] = useState(false);

  const handleCopyClick = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(value);
    setVisible(false);
    localStorage.setItem(storageKey, value);
    alert(`${type} copied!`);
  };

  const handleCopyIconClick = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(value);
    localStorage.setItem(storageKey, value);
    setVisible(true);
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
      <a href="#" onClick={handleCopyIconClick}>
        <i className="fa fa-copy">&nbsp;</i>
      </a>{" "}
      {isVisible && (
        <Col
          className="12"
          id={`${type.toLowerCase()}Input`}
          style={{ cursor: "pointer" }}
          onClick={handleCopyClick}
        >
          {formattedValue || value}
        </Col>
      )}
    </div>
  );
};

export default ContactItem;
