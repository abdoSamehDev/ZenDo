import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

function AuthRoutes(props) {
  const cookies = new Cookies();
  const userId = cookies.get("User.id");
  console.log(userId);
  return !userId ? <Outlet /> : <Navigate to="/" replace />;
}

export default AuthRoutes;
