// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHtml5,
//   faBootstrap,
//   faCss3Alt,
//   faJs,
//   faReact,
//   faNode,
// } from "@fortawesome/free-brands-svg-icons";

const TechIcons = ({ techIcons }) => (
  <div className="tech-icons">
    {techIcons.map((icon, index) => (
      <div key={index} className="icon">
        {icon.className === "fa-brands fa-html5" && (
          <FontAwesomeIcon icon={faHtml5} />
        )}
        {icon.className === "fa-brands fa-bootstrap" && (
          <FontAwesomeIcon icon={faBootstrap} />
        )}
        {icon.className === "fa-brands fa-css3-alt" && (
          <FontAwesomeIcon icon={faCss3Alt} />
        )}
        {icon.className === "fa-brands fa-js" && (
          <FontAwesomeIcon icon={faJs} />
        )}
        {icon.className === "fa-brands fa-react" && (
          <FontAwesomeIcon icon={faReact} />
        )}
        {icon.className === "fa-brands fa-node" && (
          <FontAwesomeIcon icon={faNode} />
        )}
        {/* Add more icon mappings as needed */}
        {/* For icons with image URLs, you'll need to render them differently */}
        {icon.image && <img src={icon.image} alt={icon.title} />}
        {/* Add additional logic for other types of icons */}
      </div>
    ))}
  </div>
);

export default TechIcons;
