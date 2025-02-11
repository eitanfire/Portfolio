import React from "react";
import ContactItem from "./ContactItem";

const PhoneContact = () => (
  <ContactItem
    type="Phone"
    value="+13038177843"
    formattedValue="(303) 817-7843"
    icon="fa-phone"
    storageKey="copiedPhone"
  />
);

export default PhoneContact;
