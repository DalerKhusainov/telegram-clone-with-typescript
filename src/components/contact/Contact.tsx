import React from "react";
import "./contact.styles.scss";
import { Contact } from "../../types/IndexTypes";

type Props = {
  contact: Contact;
  handleClickContact: (contactId: string) => void;
};

export const Contacts = ({ contact, handleClickContact }: Props) => {
  const {
    contactId,
    contactFirstName,
    contactLastName,
    contactImgUrl,
    isLogin,
    lastMessage,
    lastMessageDate,
    newMessages,
  } = contact;

  return (
    <div className="contact" onClick={() => handleClickContact(contactId)}>
      <div className="contact__img">
        <img alt="" src={contactImgUrl} />
        <div
          className="is-online"
          style={{ display: `${isLogin ? "block" : "none"}` }}
        ></div>
      </div>
      <div className="contact__info">
        <p className="name">{`${contactFirstName} ${contactLastName}`}</p>
        <p className="last-message">{lastMessage}</p>
      </div>
      <div className="contact__date-and-message-amount">
        <p className="date">{lastMessageDate}</p>
        <div className="message-amount">{newMessages}</div>
      </div>
    </div>
  );
};
