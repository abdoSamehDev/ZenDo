import React from "react";
import { Typography, Grid, Container, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Container
      maxWidth="100%"
      component="footer"
      sx={{
        bgcolor: "#074a5a",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png")`,
        // p: { xs: "10px", sm: "15px", md: "20px" }, // Responsive padding
        // p: 4,
        height: "9vh",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        justifyItems="end"
        alignItems="center"
        // spacing={2}
      >
        <Grid item>
          <Divider sx={{ width: "90vw" }} variant="middle"></Divider>
        </Grid>
        <Grid item mb="2.5vh">
          <Typography variant="caption">
            © {new Date().getFullYear()} ZenDo, Inc. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
