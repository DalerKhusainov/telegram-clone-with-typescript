import React from "react";
import "./sidebar.styles.scss";
import { SearchContacts } from "../search-contacts/SearchContacts";
import { ContactsList } from "../contacts-list/ContactsList";
import { Contact } from "../../types/IndexTypes";

type Props = {
  curUserContacts: Contact[];
  handleClickContact: (contactId: string) => void;
};

export const Sidebar = ({ curUserContacts, handleClickContact }: Props) => {
  return (
    <div className="sidebar">
      <SearchContacts />
      <ContactsList
        curUserContacts={curUserContacts}
        handleClickContact={handleClickContact}
      />
    </div>
  );
};
