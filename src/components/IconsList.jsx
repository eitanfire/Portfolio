import React from "react";
import { Container, Col, Row } from "reactstrap";
import reduxIcon from "../assets/img/icons8-redux-50.png";
import firestoreIcon from "../assets/img/icons8-firestore-48.png";
import nodejsIcon from "../assets/img/icons8-node-js-32.png";
import calendarIcon from "../assets/img/icons8-google-calendar-50.png";

const IconList = () => {
  const icons = [
    { className: "fa-brands fa-html5", text: "HTML" },
    { className: "fa-brands fa-bootstrap", text: "Bootstrap" },
    { className: "fa-brands fa-css3-alt", text: "CSS" },
    { className: "fa-brands fa-js", text: "Javascript" },
    { className: "fa-brands fa-react", text: "React" },
    { className: "fa-brands fa-node fa-lg", text: "NodeJS" },
    { className: "png-icon", text: "Express", image: nodejsIcon },
    { className: "png-icon", text: "Redux", image: reduxIcon },
    { className: "png-icon", text: "Firestore", image: firestoreIcon },
    { className: "fa-solid fa-lock", text: "Firebase Auth" },
    { className: "png-icon", text: "Google Calendar API", image: calendarIcon },
    { className: "fa fa-github", text: "GitHub" },
  ];
};
export default IconList;
