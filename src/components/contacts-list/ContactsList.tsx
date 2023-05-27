import React from "react";
import "./contacts-list.styles.scss";
import { Contacts } from "../contact/Contact";
import { Contact } from "../../types/IndexTypes";

type Props = {
  curUserContacts: Contact[];
  handleClickContact: (contactId: string) => void;
};

export const ContactsList = ({
  curUserContacts,
  handleClickContact,
}: Props) => {
  return (
    <div className="contacts-list">
      {curUserContacts.map((contact) => (
        <Contacts contact={contact} handleClickContact={handleClickContact} />
      ))}
    </div>
  );
};
