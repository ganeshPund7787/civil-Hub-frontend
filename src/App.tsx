import React from "react";
import "./global.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import SignUp from "./pages/civilUser/SignUp";
import SignIn from "./pages/SignIn";
import SelectRoleFoeSignUp from "./pages/SelectRoleFoeSignUp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up-user" element={<SignUp />} />
        <Route path="/select-role" element={<SelectRoleFoeSignUp />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
