import React from "react";
import "./global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
