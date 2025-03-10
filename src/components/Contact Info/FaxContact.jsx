import React, { useState } from "react";

const FaxContact = () => {
  const [isFaxVisible, setFaxVisible] = useState(false);

  const handleMagnifyingGlassClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the click event
    setFaxVisible(true);
  };

  const handleCopyClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the click event

    const faxInput = document.getElementById("faxInput");
    const fax = faxInput.textContent.trim(); // Get the text content of the span and trim any whitespace
    navigator.clipboard.writeText(fax); // Copy the trimmed email to the clipboard
    setFaxVisible(false);
    localStorage.setItem("copiedfax", fax);
    alert("Fax number copied!");
  };

  return (
    <div>
      <a href="tel:7604158620">
        <i className="fa fa-fax me-1"></i> Fax
      </a>{" "}
      <a href="#" onClick={handleMagnifyingGlassClick}>
        <i className="fa fa-search">&nbsp;</i>
      </a>{" "}
      {isFaxVisible && (
        <span
          id="faxInput"
          style={{ cursor: "pointer" }}
          onClick={handleCopyClick}
        >
          (760) 944-1501
        </span>
      )}
    </div>
  );
};

export default FaxContact;
