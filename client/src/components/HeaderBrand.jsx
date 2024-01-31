import React from "react";
import { Box } from "@mui/material";
import AppIcon from "./AppIcon";
import AppName from "./AppName";
import { useNavigate } from "react-router-dom";

function HeaderBrand(props) {
  const navigate = useNavigate();
  function handleClick() {
    console.log("Navigating...");
    navigate("/");
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "white",
      }}
      href="/"
      component="a"
      onClick={handleClick}
    >
      <AppIcon />

      <AppName />
    </Box>
  );
}

export default HeaderBrand;
