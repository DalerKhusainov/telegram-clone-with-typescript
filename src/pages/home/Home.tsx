import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Chat } from "../../components/chat/Chat";
import axios from "axios";
import { getFirstLetter } from "../../functions/functions";
import "./home.style.scss";
import { Contact, Message, User } from "../../types/IndexTypes";

type Props = {
  curUserContacts: Contact[];
  currentUser: User[];
};

export const Home = ({ curUserContacts, currentUser }: Props) => {
  const [selectedContact, setSelectedContact] = useState<Contact[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);

  const logedUserId = currentUser.map((user) => user.userId);
  const logedUserFirstName = currentUser.map((user) => user.firstName);
  const logedUserLastName = currentUser.map((user) => user.lastName);
  const logedUserAbbreviation = `${getFirstLetter(
    logedUserFirstName
  )}${getFirstLetter(logedUserLastName)}`;
  const selectedContactId = selectedContact.map((contact) => contact.contactId);

  const handleClickContact = async (id: string) => {
    await fetch(`http://localhost:5000/contacts/allcontacts/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((contacts) => setSelectedContact(contacts));

    getMessage();
  };

  const getMessage = () => {
    axios
      .get(
        `http://localhost:5000/messages/${logedUserId[0]}/${selectedContactId[0]}`
      )
      .then((res) => setFilteredMessages(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <div className="container">
        <Sidebar
          curUserContacts={curUserContacts}
          handleClickContact={handleClickContact}
        />
        <Chat
          selectedContact={selectedContact}
          currentUser={currentUser}
          getMessage={getMessage}
          filteredMessages={filteredMessages}
          logedUserAbbreviation={logedUserAbbreviation}
        />
      </div>
    </div>
  );
};
