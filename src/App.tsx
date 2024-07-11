import React from "react";
import "./global.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import SignUp from "./pages/civilUser/SignUp";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
