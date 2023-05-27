import React from "react";
import { Message } from "../message/Message";
import "./messages-list.styles.scss";
import { Message as MessageType } from "../../types/IndexTypes";

type Props = {
  filteredMessages: MessageType[];
  selectedContactImgURL: string;
  logedUserAbbreviation: string;
  selectedContactLastMessage: string;
  selectedContactLastMessageDate: string;
};

export const MessagesList = ({
  filteredMessages,
  selectedContactImgURL,
  logedUserAbbreviation,
  selectedContactLastMessage,
  selectedContactLastMessageDate,
}: Props) => {
  return (
    <div className="messages-list">
      <Message
        filteredMessages={filteredMessages}
        selectedContactImgURL={selectedContactImgURL}
        logedUserAbbreviation={logedUserAbbreviation}
        selectedContactLastMessage={selectedContactLastMessage}
        selectedContactLastMessageDate={selectedContactLastMessageDate}
      />
    </div>
  );
};
