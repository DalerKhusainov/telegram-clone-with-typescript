import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import { Home } from "../../pages/home/Home";
import { Register } from "../../pages/register/Register";
import "./main.styles.scss";
import { Contact, User } from "../../types/IndexTypes";

export const Main = () => {
  const [currentUser, setCurrentUser] = useState<User[]>([]);
  const [curUserContacts, setCurUserContacts] = useState<Contact[]>([]);

  console.log(curUserContacts);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Login
                  setCurUserContacts={setCurUserContacts}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path="home"
              element={
                <Home
                  curUserContacts={curUserContacts}
                  currentUser={currentUser}
                />
              }
            />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
