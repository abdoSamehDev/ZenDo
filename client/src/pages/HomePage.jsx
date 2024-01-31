import React from "react";
import Header from "../layout/Header";
import LandingBody from "../components/landing/LandingBody";
import { Box } from "@mui/material";
import Footer from "../layout/Footer";
import HomeBody from "../components/home/HomeBody";
import TaskItem from "../components/home/TaskItem";

function HomePage(props) {
  return (
    <Box>
      <Header auth={true} />
      <HomeBody />
      <Footer />
    </Box>
  );
}

export default HomePage;
