import React from "react";
import Box from "@mui/material/Box";
import logoImage from "../assets/images/logo-png.png";

function AppIcon(props) {
  return (
    <Box
      component="img"
      src={logoImage}
      alt="App Icon"
      sx={{
        width: "3rem",
        height: "3rem",
      }}
    />
  );
}

export default AppIcon;
