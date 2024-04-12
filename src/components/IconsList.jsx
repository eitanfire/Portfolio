import React from "react";
import { Container, Col, Row } from "reactstrap";

const IconList = () => {
  // Define your list of icons
  const icons = [
    { className: "fa-brands fa-html5", text: "HTML" },
    { className: "fa-brands fa-bootstrap", text: "Bootstrap" },
    { className: "fa-brands fa-css3-alt", text: "CSS" },
    { className: "fa-brands fa-js", text: "Javascript" },
    { className: "fa-brands fa-react", text: "React" },
  ];

  return (
    <div>
      {/* Map over the list of icons and render them */}
      {icons.map((icon, index) => (
        <div key={index}>
          {/* Render the icon */}

          <i className={icon.className}></i>

          {/* Render the text */}
          {icon.text}
        </div>
      ))}
    </div>
  );
};

export default IconList;
