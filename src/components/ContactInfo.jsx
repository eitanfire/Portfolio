// const handleCopyClick = (event) => {
//   event.preventDefault(); // Prevent the default behavior of the anchor tag

//   const emailInput = document.getElementById("emailInput");
//   emailInput.select();
//   document.execCommand("copy");
//   emailInput.setSelectionRange(0, 0);

//   window.alert("Email address copied!"); // Show a popup message
// };

const ContactInfo = () => {
  return (
    <contact-links>
      <a
        href="https://drive.google.com/file/d/1X7FGKxASFayUJf7Xf5le-ZqC1JzrfKXO/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-solid fa-image-portrait"></i> Resume
      </a>
      {" • "}
      <a href="https://github.com/eitanfire" target="_blank" rel="noreferrer">
        <i className="fa fa-github"></i> GitHub
      </a>
      {" • "}
      <a
        href="https://www.linkedin.com/in/eitanfire/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-linkedin"></i> LinkedIn
      </a>
      {" • "}
      <a href="tel:+13038177843">
        <i className="fa fa-phone"></i> Phone
      </a>
      {" • "}
      <a href="mailto:eitanfire@gmail.com" target="_blank" rel="noreferrer">
        <i className="fa fa-envelope-o"></i> Email
      </a>{" "}
      {/* <a href="mailto:eitanfire@gmail.com" id="emailInput">
        <i className="fa fa-copy" onClick={handleCopyClick} />
      </a> */}
    </contact-links>
  );
};

export default ContactInfo;
