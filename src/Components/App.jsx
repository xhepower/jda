import React from "react";
//import "../styles/global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";
//import Login from "../containers/Login";
//import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CreateNewPassword from "./CreateNewPassword";
import EmailSent from "./EmailSent";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createnewpassword" element={<CreateNewPassword />} />
          <Route path="/EmailSent" element={<EmailSent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
