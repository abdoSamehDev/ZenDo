import React from "react";
import { Typography } from "@mui/material";

function AppName(props) {
  return (
    <Typography
      variant="h4"
      component="div"
      sx={{
        ml: 2,
        fontWeight: 600,
      }}
    >
      ZenDo
    </Typography>
  );
}

export default AppName;
