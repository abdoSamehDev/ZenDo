import React from "react";
import Header from "../layout/Header";
import LandingBody from "../components/landing/LandingBody";
import { Box } from "@mui/material";
import Footer from "../layout/Footer";
import SignInBody from "../components/auth/SignInBody";

function SignInPage(props) {
  return (
    <Box height="100vh">
      <SignInBody />
      <Footer />
    </Box>
  );
}

export default SignInPage;
