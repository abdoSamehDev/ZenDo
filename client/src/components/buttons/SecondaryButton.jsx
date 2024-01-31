import { Button, Typography } from "@mui/material";
import React from "react";

function SecondaryButton(props) {
  return (
    <Button
      variant="outlined"
      onClick={props.onClick}
      sx={{
        width: { xs: "30%", md: "100%" },
        height: 54,
        color: "white",
        borderColor: "white",
        background: "transparent",
        ":hover": {
          borderColor: "#31b6c9",
          color: "white",
        },
      }}
    >
      {/* <Typography variant="button" component="div"> */}
      {props.label}
      {/* </Typography> */}
    </Button>
  );
}

export default SecondaryButton;
