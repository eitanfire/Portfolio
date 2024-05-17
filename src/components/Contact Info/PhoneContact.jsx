import React, { useState } from "react";

const PhoneContact = () => {
  const [isPhoneVisible, setPhoneVisible] = useState(false);

  const handleMagnifyingGlassClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the click event
    setPhoneVisible(true);
  };

  const handleCopyClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the click event

    const phoneInput = document.getElementById("phoneInput");
    const phone = phoneInput.textContent.trim(); // Get the text content of the span and trim any whitespace
    navigator.clipboard.writeText(phone); // Copy the trimmed email to the clipboard
    setPhoneVisible(false);
    localStorage.setItem("copiedPhone", phone);
    alert("Phone number copied!");
  };

  return (
    <div>
      <a href="tel:+13038177843">
        <i className="fa fa-phone"></i> Phone
      </a>{" "}
      <a href="#" onClick={handleMagnifyingGlassClick}>
        <i className="fa fa-search">&nbsp;</i>
      </a>{" "}
      {isPhoneVisible && (
        <span
          id="phoneInput"
          style={{ cursor: "pointer" }}
          onClick={handleCopyClick}
        >
          (303) 817-7843
        </span>
      )}
    </div>
  );
};

export default PhoneContact;
