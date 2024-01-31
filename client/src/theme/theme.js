import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      main: "#074a5a",
      default: "#074a5a",
      paper: "#074a5a",
    },
    primary: {
      main: "#31b6c9",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#31b6c9",
    },
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "white", // Default background color
          color: "#33a16f", // Default label color
          "&:hover": {
            backgroundColor: "#31b6c9",
            color: "white",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.4)",

          "&::before, &::after": {
            borderColor: "rgba(128, 128, 128, 0.5)", // Border color
            content: '""',
            display: "block",
            margin: 0,
            height: "1px", // Height of the divider
            // innerWidth: "100%",
            // outerWidth: "100%",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          icon: {
            color: "white", // Set the unfocused color of the select icon
          },
          "& .MuiInputBase-input": {
            icon: {
              color: "white", // Set the unfocused color of the select icon
            },
            color: "white", // Sets default text color to white
          },
          "& label": {
            color: "white", // Default label color
          },
          "& .MuiOutlinedInput-root": {
            icon: {
              color: "white", // Set the unfocused color of the select icon
            },
            "&:hover fieldset": {
              borderColor: "#31b6c9",
            },
            "& fieldset": {
              borderColor: "white", // Default border color
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "white",
        },
        icon: {
          color: "white", // Set the unfocused color of the select icon
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // Set the label color
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "white", // Sets default text color to white
          "&:hover": {
            backgroundColor: "#31b6c9", // Set the background color on hover
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "white", // Default border color
          },
        },
      },
    },
  },
});

export default theme;
