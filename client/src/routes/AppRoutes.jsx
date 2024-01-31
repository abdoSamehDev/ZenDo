import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
// import { Cookies } from "react-cookie";
import PrivateRoutes from "../utils/PrivateRoutes.js";
import AuthRoutes from "../utils/AuthRoutes.js";

function AppRoutes(props) {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/profile" element={<LandingPage />} />
      </Route>
      <Route element={<AuthRoutes />}>
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Route>
      {/* <Route
        path="/"
        element={props.isAuthenticated ? <HomePage /> : <LandingPage />}
      /> */}
    </Routes>
  );
}

export default AppRoutes;
