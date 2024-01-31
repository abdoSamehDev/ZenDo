import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ProfileButton from "../components/buttons/ProfileButton";
import HeaderBrand from "../components/HeaderBrand";

function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#074a5a",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png")`,
          // padding: "20px 0",
          p: { xs: "10px", sm: "15px", md: "20px" }, // Responsive padding
          // padding: "16px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        }}
      >
        <Toolbar
          sx={{ justifyContent: props.auth ? "space-between" : "center" }}
        >
          <HeaderBrand />

          {props.auth && <ProfileButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
