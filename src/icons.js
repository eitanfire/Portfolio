import reduxIcon from "./assets/img/icons8-redux-50.png";
import firestoreIcon from "./assets/img/icons8-firestore-48.png";
import nodejsIcon from "./assets/img/icons8-node-js-32.png";
import calendarIcon from "./assets/img/icons8-google-calendar-50.png";
import classroomIcon from "./assets/img/icons8-google-classroom-32.png";

export const icons = [
  { className: "fa-brands fa-html5", text: "HTML" },
  { className: "fa-brands fa-bootstrap", text: "Bootstrap" },
  { className: "fa-brands fa-css3-alt", text: "CSS" },
  { className: "fa-brands fa-js", text: "Javascript" },
  { className: "fa-brands fa-react", text: "React" },
  { className: "fa-brands fa-node", text: "NodeJS" },
  { className: "png-icon", text: "Express", image: nodejsIcon },
  { className: "png-icon", text: "Redux", image: reduxIcon },
  { className: "png-icon", text: "Firestore", image: firestoreIcon },
  { className: "fa-solid fa-lock", text: "Firebase Auth" },
  { className: "png-icon", text: "Google Calendar API", image: calendarIcon },
  { className: "png-icon", text: "Google Classroom API", image: classroomIcon },
  { className: "fa fa-github", text: "GitHub" },
];
