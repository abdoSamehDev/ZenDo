import React from "react";
import Header from "../layout/Header";
import LandingBody from "../components/landing/LandingBody";
import { Box } from "@mui/material";
import Footer from "../layout/Footer";
import SignInBody from "../components/auth/SignInBody";
import SignUpBody from "../components/auth/SignUpBody";

function SignUpPage(props) {
  return (
    <Box height="100vh">
      {/* <Header auth={false} /> */}
      <SignUpBody />
      <Footer />
    </Box>
  );
}

export default SignUpPage;
