export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type Contact = {
  contactId: string;
  contactFirstName: string;
  contactLastName: string;
  contactImgUrl: string;
  isLogin: boolean;
  lastMessage: string;
  lastMessageDate: string;
  newMessages: string;
  owner: string;
};

export type Message = {
  messageId: string;
  senderId: string;
  receiverId: string;
  message: string;
  date: string;
};
