import { Typography } from "@mui/material";
import React from "react";

function FormError(props) {
  return (
    <Typography color="error" variant="caption">
      {props.message}
    </Typography>
  );
}

export default FormError;
