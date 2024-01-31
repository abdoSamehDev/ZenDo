import { Button } from "@mui/material";
import React from "react";

function PrimaryButton(props) {
  return (
    <Button
      variant="contained"
      onClick={props.onClick}
      sx={{
        width: { xs: "30%", md: "100%" },
        my: 3,
        // color: "red",
        ":hover": {
          backgroundColor: "#31b6c9",
          color: "white",
        },
        backgroundColor: "white",
        height: 54,
      }}
    >
      {/* <Typography variant="button" component="div"> */}
      {props.label}
      {/* </Typography> */}
    </Button>
  );
}

export default PrimaryButton;
