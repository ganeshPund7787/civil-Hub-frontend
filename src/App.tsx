import React from "react";
import "./global.css";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import SignUp from "./pages/civilUser/SignUp";
import SignIn from "./pages/SignIn";
import SelectRoleFoeSignUp from "./pages/SelectRoleFoeSignUp";
import Layout from "./layout/Layout";
import { useAppSelectore } from "./App/store";
import ProtectRoute from "./components/ProtectRoute";
import Profile from "./pages/civilUser/Profile";

const App: React.FC = () => {
  const { CurrentCivilUser } = useAppSelectore((state) => state.user);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={CurrentCivilUser ? <Navigate to={"/"} /> : <Outlet />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up-user" element={<SignUp />} />
          <Route path="/select-role" element={<SelectRoleFoeSignUp />} />
        </Route>
        <Route element={<ProtectRoute />}>
          <Route
            path="/"
            element={
              <Layout showHero={false}>
                <span>Home Page</span>
              </Layout>
            }
          />
          <Route
            path="/user-profile"
            element={
              <Layout showHero={false}>
                <Profile />
              </Layout>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
