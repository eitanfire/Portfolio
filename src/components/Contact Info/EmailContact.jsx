import React from "react";
import ContactItem from "./ContactItem";

const EmailContact = () => (
  <ContactItem
    type="Email"
    value="eitan@eitans.website"
    icon="fa-envelope-o"
    storageKey="copiedEmail"
  />
);

export default EmailContact;
