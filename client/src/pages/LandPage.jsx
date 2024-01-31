import React from "react";
import Header from "../layout/Header";
import LandingBody from "../components/landing/LandingBody";
import { Box } from "@mui/material";
import Footer from "../layout/Footer";

function LandingPage(props) {
  return (
    <Box height="100vh">
      <Header auth={false} />
      <LandingBody />
      <Footer />
    </Box>
  );
}

export default LandingPage;
