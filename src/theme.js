import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#C6F199",
      contrastText: "#000000",
    },
    footer: {
      main: "#1a2722",
      contrastText: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Open Sans",
      fontSize: 35,
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Open Sans",
      fontSize: 32,
    },

    h3: {
      fontFamily: "Open Sans",
      fontSize: 25,
    },

    h4: {
      fontFamily: "Open Sans",
      fontSize: 18,
    },

    text: {
      fontFamily: "Montserrat",
      fontSize: 20,
    },

    buttons: {
      fontFamily: "Open Sans",
      fontSize: 18,
      fontWeight: "bold",
    },

    name: {
      fontFamily: "Open Sans",
      fontSize: 23,
    },
  },
});

export default theme;
